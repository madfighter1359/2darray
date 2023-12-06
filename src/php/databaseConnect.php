<?php

$servername='localhost';
$username='root'; 
$password=''; 
$dbname='numbers';
$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn) {
    die("Connection error");
}

