<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
header("Content-type:application/json");
require_once 'index.php';
$_POST = json_decode(file_get_contents("php://input"));

//Sanitize data
$email = $conn->real_escape_string($_POST->email);
$password = $conn->real_escape_string($_POST->password);

$errors=[];

if (!verify($email, "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/")) array_push($errors, "Input valid email address");
if (empty($errors)) {
  
  //Search Email into Database
    $query = "SELECT * FROM user WHERE email = '{$email}' LIMIT 1";

    // echo ($query);
//there is no idea about hashing function. then cant to map with hash real password. password_hash()
    $result_set = mysqli_query($conn, $query);
      if($result_set){
          if(mysqli_num_rows($result_set) == 1) {
              $user = mysqli_fetch_assoc($result_set);

              $hash = '$2y$13$6rHoTJhsber6KZ.Ny0p4A.R77cfliz6xwEFTea/jqrOsb7oC3hEpC';
              if ($user['password'] == $password) {
                echo json_encode(['msg' => 'Success', 'user' => $user['name']]);
              } else {
                echo json_encode(['msg' => 'Invalid Password']);
              }
          }else{
            echo json_encode(['msg' => 'Email Doesnt Exists']);
          }

      }
}else{
  echo json_encode(['msg' => 'Invalid Email or Password']);
}

//verify Email Address
function verify($data, $pattern)
{
    if (preg_match($pattern, $data)) return  true;
    return false;
}