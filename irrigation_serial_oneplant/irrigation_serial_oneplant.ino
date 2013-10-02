#include <SPI.h>

int maxPlants=2; // maximum amount of plants, needed when initializing variables
int moistSensor[] = {
  A0};    // soil moisture sensor
int vent[] = {
  3};      // valve pin
int moistV[]= {
  4}; // moist sensor V pin, moist sensor voltage is turned on, then measured, then off to save the metal surface of the sensor
int pumpPin=5;  //pump pin
int waterPin=2; //water lvl pin
int waterVal=0; // reservoir water level value

// does it need to be 16 or 17????
int moisture_val[2]; // variable that saves moisture sensor value
int sensor_val[2];    // water level sensor pin
int wetValue[2]; // how wet we want the plant to go, this value is got from the server
int dryValue[2]; // how dry plant gets, got from server
int watered[2]; // we measure the amount of watering cycles
int pump[2]; // water pump, if we have one
int serialdata = 0; // for reading serial data
int plantAmount=0; // real amount of plants, got from server
int waterSensor=0; // is reservoir water level sensor in use
int waterEmpty=0; // if reservoir sensor in use, is it empty?
int i=0;

// setup

void setup(){

  Serial.begin(9600); // start serial port: 
  pinMode(pumpPin, OUTPUT);     // define pump as output
  pinMode(waterPin, INPUT); // waterlevel of vater container
  digitalWrite(pumpPin, LOW); // turn pump off
  zeroVal(); // put all vals to zero
  io(0,0); // get dryValue, wetValue and amount of plants in database.

  for (int i = 0; i < plantAmount; i++)
  {
    moisture_val[i] = moistureVal(i); // initial moisture value reading
    sensor_val[i] = HIGH; // check that there is no flood 
    io(1,i);
  }
}

// main loop

void loop()
{
  for (int i = 0; i < plantAmount; i++){
    if (moisture_val[i] < dryValue[i]){ // moisture value smaller than dry value, go to irrigation loop
      irrigation(i);
      io(1, i); // write data to database for plant i
    }
  }
  recycle(); // after every plant is above wet value, go to recycle loop for ~6h
}

//irrigation cycle function

void irrigation(int plantNum)
{
  while (moisture_val[plantNum] < wetValue[plantNum] && watered[plantNum] < 500 && sensor_val[plantNum] == HIGH) // water until moisture bigger than wetValue, max irrigation 500 so there is some max limit, time max~40min, check also waterlevel
  {
    readWaterLvL();  // read waterlevel from container
    io(0,0); // we get dry value and wet value from database, if someone wants to change them during watering...

    digitalWrite(vent[plantNum], HIGH);    // open valve
    if (pump[plantNum] == 1){        // if we use pump, turn it on  
      digitalWrite(pumpPin, HIGH);
    }
    delay(5000);                 // wait 2s
    //  digitalWrite(pumpPin, LOW);  // pump off
    watered[plantNum]=watered[plantNum]+1;  // count watering times
    //digitalWrite(vent[plantNum], LOW);
    //delay(3000);                 // wait 3s
    moisture_val[plantNum] = moistureVal(plantNum); // read moisture value
    sensor_val[plantNum] = HIGH; // read value from water level diode
  }
  digitalWrite(pumpPin, LOW);
  digitalWrite(vent[plantNum], LOW);
}

//reycle function

void recycle()
{
  digitalWrite(pumpPin, LOW);  // pump off, just to make sure
  for (int i = 0; i < plantAmount; i++){
    digitalWrite(vent[i], LOW);    // valve off
    watered[i]=0; // zero watered...  
  }
  delay(21600000);  // 1000ms*60*60*6=21600000=6h this is how often moisture val is measured during recycle, is there need to be able to define it to some other val? 
  for (int i = 0; i < plantAmount; i++){
    moisture_val[i] = moistureVal(i); // read moisture sensor value
    sensor_val[i] = HIGH;  
    io(1, i);
  }
  io(0,0); // read dry and wet values, will it be strange to user if it takes max 6h to take effect?
}

// water level function for water container

void readWaterLvL()
{
  if(waterSensor == true)
  {
    waterVal = digitalRead(waterPin);
    while(waterVal == HIGH)
    {
      digitalWrite(pumpPin, LOW);
      waterEmpty=1;
      io(2,0);
      delay(5000);                 // wait 5s

    }
  }
  else
  {
    waterEmpty=0;
    io(2,0);
  }
}

void io(int w, int plantNum)  // function to talk with php, w defines if we read/write/or alert about no water
{
  if (w == 1) // if we intent to write
  {
    writeData(plantNum);
  }
  if (w == 0) // if we intent to read
  {
    readData();
  }
  if (w == 2) // if water container is empty
  {
    noWater();
  }
}

void noWater()
{
  Serial.println("*nowater*");
  Serial.println(waterEmpty);
}


// function gives plant data to php script that writes it to mysql

void writeData(int plantNum)
{  
  Serial.println("*write*");
  Serial.println(plantNum);
  Serial.println(moisture_val[plantNum]);
  Serial.println(sensor_val[plantNum]);   
  Serial.println(watered[plantNum]);
}

// read data from php

void readData()
{
  int i2=0;
  int i3=0;

  Serial.println("*read*"); // read dry/wet value, amount of plants, do we use pump and do we have level sensor for the container
  delay(3000);
  if(Serial.available())
  {
    plantAmount=getSerial(); // amount of plants before dry/wet vals
    waterSensor=getSerial(); // do we use water level sensor in container
    while(Serial.available()) // dry/wet values + do we use pump for every plant
    {
      for (int i = 0; i < plantAmount; i++)
      {
        dryValue[i]=getSerial();
      }
      for (int i = 0; i < plantAmount; i++)
      {
        wetValue[i]=getSerial();
      }
      for (int i = 0; i < plantAmount; i++)
      {
        pump[i]=getSerial();
      }
    }
  }
  else
  {
    Serial.println("ARDUINO: no response received / no response received in time");
    zeroVal(); // if we don't get connection, put all values to zero
  }
}

// moisture value function

int moistureVal(int z) // z=plant number
{
  /* This function will read the Pin 'z' 5 times and take an average. */
  digitalWrite(moistV[z], HIGH); //turn on sensors main voltage
  delay(1000); // give time for voltage to stabilize
  int i;
  int sval = 0;
  for (i = 0; i < 5; i++) // take 5 measurements
  {
    sval = sval + analogRead(moistSensor[z]);   // sensor on analog pin 'z'
  }
  digitalWrite(moistV[z], LOW);  
  sval = sval / 5 / 10;    // average / 100 -> ~ percentage
  return sval;
}

//Read serial data until get / slash. Then number ends and return number.
int getSerial()
{
  int inbyte = 0;
  int serialdata = 0;
  while (inbyte != '/')
  {
    inbyte = Serial.read(); 
    if (inbyte > 0 && inbyte != '/')
    { 
      serialdata = serialdata * 10 + inbyte - '0';
    }
  }
  return serialdata;
}

void zeroVal() // zero all variables
{
  for (int i = 0; i < maxPlants; i++)
  {
    pinMode(moistSensor[i], INPUT);  // moist sensor input
    pinMode(vent[i], OUTPUT);     // valve output
    pinMode(moistV[i], OUTPUT);   // moist sensor Vdd as output
    moisture_val[i]=0; // put everything to zero
    watered[i]=0;
    sensor_val[i]=0;
    pump[i]=0;
    dryValue[i]=0;
    wetValue[i]=0;

  } 
}




