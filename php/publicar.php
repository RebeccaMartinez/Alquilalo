<?php
$servername = "localhost";
$username = "alu4555";
$password = "1dr9Ku";
$dbname = "alu4555";

$tamImg = $_FILES[imagen][size];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$username = $_COOKIE['usuario_alquilalo'];
$titulo = $_POST['titulo'];
$lugar = $_POST['lugar'];
$precio = $_POST['precio'];
$contacto = $_POST['contacto'];
$desc = $_POST['informacion'];

//Si el tamaño de la imagen es 0 es que no se ha introducido ninguna imagen en el formulario
if($tamImg != 0){
  $fichero="true";

  if ($_FILES[imagen][size]>400000){
    $msg=$msg."El archivo es mayor que 400KB, debes reduzcirlo antes de subirlo<BR>";
    $fichero="false";
  }

  if ($_FILES['imagen']['type'] == "image/jpeg"){
    $msg=$msg."Foto valida";
  } 
  else {
    $msg=$msg."El achivo tiene que ser JPG";
    $fichero="false";
  }

  $file_name=$_FILES[imagen][name];
  
  //add es la ruta desde aqui, mientras que ruta es la ruta que tendra la imagen cuando se llame desde los ficheros html y es la que se guardara en la bd
  $add = "../imagenesUsuarios/$file_name";
  $ruta = "imagenesUsuarios/$file_name";
  if($fichero=="true"){

    if(move_uploaded_file($_FILES['imagen']['tmp_name'], $add)){
    
      $sql = "INSERT INTO anuncios (username, titulo, contacto, descripcion,ruta, precio, lugar) VALUES ('$username', '$titulo', '$contacto', '$desc', '$ruta', '$precio', '$lugar')";
    
      if($conn->query($sql) === TRUE){
         echo "true";
      }
      else {
         echo "Error:" .$sql . "<br>" . $conn->error;
      }

      $conn->close();

    }
    else {
      echo "false";
    }
  }
  else{
   echo $msg;
  }
}
//En caso de que no se haya introducido una imagnen
else{


   $sql = "INSERT INTO anuncios (username, titulo, contacto, descripcion, precio, lugar) VALUES ('$username', '$titulo', '$contacto', '$desc', '$precio', '$lugar')";
    
   if($conn->query($sql) === TRUE){
      echo "true";
   }
   else {
      echo "Error:" .$sql . "<br>" . $conn->error;
   }

   $conn->close();
}

?>
