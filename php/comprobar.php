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

$conn->close();
//Conectando, seleccionando la base de datos
$link = mysql_connect($servername,$username,$password)
    or die('No se pudo conectar: ' . mysql_error());

mysql_select_db($dbname) or die('No se pudo seleccionar la base de datos');


    $username = $_COOKIE['usuario_alquilalo'];

$query = "SELECT * FROM usuarios WHERE username = '$username'";
$result = mysql_query($query);

if(mysql_num_rows($result) > 0) {
        echo 1;

}
else{
        echo 0;
}

// Liberar resultados
mysql_free_result($result);


?>

