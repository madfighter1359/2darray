<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$max = $_POST['max'];
$min = $_POST['min'];

include "databaseConnect.php";

$maxsql = "select number from integers where id = '$max'";
$minsql = "select number from integers where id = '$min'";
$maxresult = mysqli_query($conn, $maxsql);
$minresult = mysqli_query($conn, $minsql);

// while ($row = mysqli_fetch_assoc($result)) {
//     echo $row['number'];
// }

$max = mysqli_fetch_assoc($maxresult)['number'];
$min = mysqli_fetch_assoc($minresult)['number'];

$number = rand($min, $max);

echo json_encode($number);
?>