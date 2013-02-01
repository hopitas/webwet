
//define analog inputs to which we have connected our sensors
int moistureSensor = A0;

int moisture_val;

void setup() {
  //open serial port
Serial.begin(9600);
}

void loop() {
// read the value from the moisture-sensing probes, print it to screen, and wait a second
moisture_val = analogRead(moistureSensor);
Serial.print("moisture sensor reads ");
Serial.println( moisture_val );
delay(1000);
}

