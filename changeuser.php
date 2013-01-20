<?php
//change username and password

include('config.php');


$name = $_POST['name'];
$password = $_POST['password'];

    $query = "UPDATE users SET username='$name', password='$password' WHERE id=1";
    $insertSite = mysql_query($query, $db_con) or die(mysql_error());

?>