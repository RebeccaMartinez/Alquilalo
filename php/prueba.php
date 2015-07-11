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

$jsondata = array();

$query = "SELECT *  FROM anuncios ORDER BY ID DESC";
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

//mysql_free_result($result);
header('Content-type: application/json; charset=utf-8');
echo json_encode($jsondata, JSON_FORCE_OBJECT);

?>

