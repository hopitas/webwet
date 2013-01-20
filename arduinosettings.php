<?php

#Include the connect.php file
include('config.php');
// get data and store in a json array
$query = "SELECT * FROM arduinosettings";
$from = 0;
$result = mysql_query("SELECT * FROM arduinosettings", $db_con);
$to = mysql_num_rows($result);
$query .= " LIMIT " . $from . "," . $to;

$result = mysql_query($query) or die("SQL Error 1: " . mysql_error());
while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $arduinosettings[] = array(
        'plantnumber' => $row['plantnumber'],
        'preset' => $row['preset'],
        'minval' => $row['minval'],
        'maxval' => $row['maxval'],
        'plantname' => $row['plantname'],
        'pump' => $row['pump'],
        'wlevel' => $row['wlevel']
    );
}
?>
