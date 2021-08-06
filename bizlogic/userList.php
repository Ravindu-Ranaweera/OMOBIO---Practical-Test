<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
require_once 'index.php';

//select all users
$query = "SELECT * FROM  user";
$users = mysqli_query($conn, $query);

if($users) {
$users=mysqli_fetch_all($users,MYSQLI_ASSOC);
}
else {
echo "Database Query Failed";
} 

echo json_encode($users);

    
?>