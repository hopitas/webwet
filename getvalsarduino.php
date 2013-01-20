<?php

//Give settting values to arduino


include('config.php');
include('arduinosettings.php');

// first give amount of plants

echo($to); 
echo"/";


echo($arduinosettings[0]['wlevel']); 
echo"/";

// then minvals/maxvals

for ($i = 0; $i < $to; $i++) {

    echo($arduinosettings[$i]['minval']);
    echo"/";
}
for ($i = 0; $i < $to; $i++) {
    echo($arduinosettings[$i]['maxval']);
    echo"/";
}
for ($i = 0; $i < $to; $i++) {
    echo($arduinosettings[$i]['pump']);
    echo"/";
}

?>