<?php

//used in tab2 to save plantname
require_once 'config.php';

$value = (isset($_POST['value'])) ? $_POST['value'] : ""; //value posted
$id = (isset($_POST['id'])) ? $_POST['id'] : ""; //id posted

$plantnumber = preg_replace("/[^0-9]+/", "", $id) + 1; //strip only numeric value

mysql_query("UPDATE arduinosettings SET plantname='$value' WHERE plantnumber=$plantnumber");

print $value;
?>



