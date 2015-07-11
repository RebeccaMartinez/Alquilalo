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


$habitaciones = $_POST['habitaciones'];
$lugar = $_POST['lugar'];
$precio = $_POST['precio'];
$jsondata = array();

if($precio != "" && $lugar != ""){
	$query = "SELECT *  FROM anuncios WHERE precio <= '$precio' AND lugar = '$lugar' ORDER BY ID DESC";
}

if($precio != "" && $lugar == ""){
	$query = "SELECT * FROM anuncios WHERE precio <= '$precio' ORDER BY ID DESC";
}

if($lugar != "" AND $precio == ""){
	$query = "SELECT * FROM anuncios WHERE lugar = '$lugar' ORDER BY ID DESC"; 
}
$result = mysql_query($query);

if(mysql_num_rows($result) > 0){


   $jsondata["pisos"] = array();
   $jsondata["success"] = true;
   while($row = mysql_fetch_assoc($result)){

      $jsondata["pisos"][] = $row;

   }
}

else{
   $jsondata["success"] = false;
}


header('Content.type: application/json; charset=utf-8');
echo json_encode($jsondata, JSON_FORCE_OBJECT);

