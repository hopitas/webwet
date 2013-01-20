<?php

//This one is called from tab2 or 4 and is used to change arduinosettings table and create new plants. If posted val parameter is between 0-3 we change arduinosettings.
//if 4 we create/delete plants
// 6 is for setting if pump for plant should be in use or not
// 7 if we use water sensor in container


include('config.php');

function dbcall($a, $b, $c, $d) {

    include('config.php');

    $query = "UPDATE arduinosettings SET preset='$a', minval='$b', maxval='$c' WHERE plantnumber='$d'";
    $insertSite = mysql_query($query, $db_con) or die(mysql_error());
}

$Plant = $_POST['Plant'];
$minval = $_POST['minval'];
$maxval = $_POST['maxval'];
$val = $_POST['val'];
$plantnumber = $_POST['plantnumber'];
$pump = $_POST['pump'];
$wlevel = $_POST['wlevel'];


if ($val >= 0 && $val <= 3) {

    dbcall($val, $minval, $maxval, $plantnumber);
}

if ($val == 4) {
    $result = mysql_query("SELECT * FROM arduinosettings", $db_con);
    $dbplants = mysql_num_rows($result);
    if ($plantnumber > $dbplants) {
        $addamount = $plantnumber - $dbplants;
        for ($i = 1; $i <= $addamount; $i++) {
            $index = $dbplants + $i;
            mysql_query("INSERT INTO arduinosettings (plantnumber)
VALUES ('$index')");
        }
    }
    if ($plantnumber < $dbplants) {
        $removeamount = $dbplants - $plantnumber;
        for ($i = 0; $i < $removeamount; $i++) {
            $index = $dbplants - $i;
            mysql_query("DELETE FROM arduinosettings WHERE plantnumber='$index'");
        }
    }
}

if ($val == 6) {

    $query = "UPDATE arduinosettings SET pump='$pump' WHERE plantnumber='$plantnumber'";
    $insertSite = mysql_query($query, $db_con) or die(mysql_error());
}
if ($val == 7) {

    $query = "UPDATE arduinosettings SET wlevel='$wlevel' WHERE plantnumber='1'";
    $insertSite = mysql_query($query, $db_con) or die(mysql_error());
}
?>