<?php

//This gets values from arduino and saves them to database

$plantnumber = $_GET['plant_num']+1;
$moisture_val = $_GET['moisture_val'];
$sensor_val = $_GET['sensor_val'];
$watered = $_GET['watered'];

$timestamp = time();
$time = date("YmdHis",$timestamp);

echo "Current date and local time on this server is $time \n";
include('config.php');
$query = "INSERT INTO water (date_time, plantnumber, moisture_val, sensor_val, watered) VALUES ($time, $plantnumber, $moisture_val, $sensor_val, $watered)";
mysql_query($query, $db_con) or die("query error");
mysql_close($db_con);

echo "DATA RECEIVED BY SCRIPT...\n";
echo "time: $time\n";
echo "plantnumber: $plantnumber\n";
echo "Moisture value: $moisture_val\n";
echo "Sensor value: $sensor_val\n";
echo "Watered times: $watered\n";
echo "SUCCESS\n";
?>