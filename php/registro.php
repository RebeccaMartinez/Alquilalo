<?php

$servername = "localhost";
$username = "alu4555";
$password = "1dr9Ku";
$dbname = "alu4555";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


// Realizar una consulta MySQL
$username = $_POST['nombre'];
$password = $_POST['pass'];
$email = $_POST['email'];


$sql = "INSERT INTO usuarios (username, email, contrasena) VALUES ('$username', '$email', '$password')";

setcookie("usuario_alquilalo", $username, time() + 3600);

if($conn->query($sql) === TRUE){
      echo 1;
} 
else {
      echo 2;
}

$conn->close();

?>

