<?php

$id_usuario = $_COOKIE['usuario_alquilalo'];
setcookie("usuario_alquilalo", $id_usuario, time() - 3600);


echo 1;




?>

