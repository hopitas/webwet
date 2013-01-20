<?php

//This gets data to tab1 from moisture_val table and parses it to json that chart can read


include('config.php');
include('arduinosettings.php');

$SQL = "SELECT plantnumber,moisture_val,date_time,watered FROM water ORDER BY date_time";
$result = mysql_query($SQL) or die("Couldn?t execute query." . mysql_error());

$i = 0;
$i1 = 0;

class Plant {

    public $name = "";
    public $tooltip = "";
    public $type = "";
    public $yaxis = "";
    public $data = "";

}

while ($row = mysql_fetch_array($result, MYSQL_ASSOC)) {

    $plantnumber = $row[plantnumber];
    $row[moisture_val] = (int) $row[moisture_val];
    $row[watered] = (int) $row[watered];


    for ($i2 = 1; $i2 <= $to; $i2++) {

        if ($plantnumber == $i2) {

            $rows[$i2][$i] = array(strtotime($row[date_time]) * 1000, $row[moisture_val]);
            $rowswater[$i1] = array(strtotime($row[date_time]) * 1000, $row[watered]);
            $i1++;
        }
        $i++;
    }
}

$watered = new Plant();
$watered->name = "watered";
$watered->tooltip = "valueDecimals: 2";
$watered->type = "column";
$watered->yaxis = 1;
$watered->data = $rowswater;

$plants = array();

for ($i2 = 1; $i2 <= $to; $i2++) {

    if ($rows[$i2] !== null) {

        $plant[$i2] = new Plant();
        $plant[$i2]->name = $arduinosettings[$i2 - 1]['plantname'];
        $plant[$i2]->tooltip = "valueDecimals: 2";
        $plant[$i2]->type = "";
        $plant[$i2]->yaxis = 0;
        $plant[$i2]->data = array_values($rows[$i2]);

        array_push($plants, $plant[$i2]);
    }
}

array_push($plants, $watered);

echo json_encode($plants);
?>