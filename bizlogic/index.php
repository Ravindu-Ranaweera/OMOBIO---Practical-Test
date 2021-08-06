<?php

header("Access-Control-Allow-Origin: *");

$host = 'localhost';
$user = 'root';
$password = '';
$database = 'exam';

//Create Database Connection 
$conn = new mysqli($host, $user, $password, $database);

if (!$conn)
	die("Connection failed: " . mysqli_connect_error());
	 // echo "Connected successfully";

