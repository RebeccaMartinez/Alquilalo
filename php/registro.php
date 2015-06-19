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

$sql = "INSERT INTO usuarios (username, email, contrasena) VALUES ('$username', '$password', '$email')";

if($conn->query($sql) === TRUE){
      echo "Nuevo usuario creado";
} 
else {
      echo "Error:" .$sql . "<br>" . $conn->error; 
}

$conn->close();

?>

