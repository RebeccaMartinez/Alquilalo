<?php
  $servername = "localhost";
  $username = "alu4555";
  $password = "1dr9Ku";
  $dbname = "alu4555";

  $conn = new mysqli($servername, $username, $password, $dbname);
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }
?>
