<?php

//This gets values from arduino and saves them to database

$waterval = $_GET['waterval'];

include('config.php');
$query = "UPDATE waterval SET waterval='$waterval' WHERE id='1'";
mysql_query($query, $db_con) or die("query error");
mysql_close($db_con);

echo "DATA RECEIVED BY SCRIPT...\n";
echo "Waterval: $waterval\n";
echo "SUCCESS\n";

?>