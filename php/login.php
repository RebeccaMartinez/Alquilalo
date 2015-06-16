<?php

  include_once('db.php');

  $username = mysqli_real_escape_string($_POST["nombre"]);
  $password = mysqli_real_escape_string(md5 ($_POST["pass"]));
  $email = mysqli_real_escape_string($_POST["email"]);

  $sql = "INSERT INTO usuarios VALUES ($username, $password, $email)";
  if(mysqli_query($sql))
    echo "Insercion valida";
  else
    echo "insercion invalida";

?>
