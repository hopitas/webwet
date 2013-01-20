<?php

//used to push data in json form to tab2
#Include the connect.php file
include('arduinosettings.php');
echo json_encode($arduinosettings);
?>