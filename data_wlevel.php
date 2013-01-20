<?php

//This gets data to tab1 for waterlevel alert


include('config.php');
include('arduinosettings.php');

$SQL = "SELECT waterval FROM waterval";
$result = mysql_query($SQL) or die("Couldn?t execute query." . mysql_error());

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $waterval[] = array(
        'waterval' => $row['waterval']
    );
}

echo json_encode($waterval);

?>