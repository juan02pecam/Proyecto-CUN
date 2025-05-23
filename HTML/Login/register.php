<?php

//Conexion
$servidor = "localhost";
$usuario = "root";
$contrasena = ""; // sin contraseña por defecto en XAMPP
$basedatos = "proyect_one";

//conectar con la base de datos
$conn = new mysqli($servidor, $usuario, $contrasena, $basedatos);

//verifica conexion
if ($conn->connect_error){
    die("Falla en la conexion: " . $conn->connect_error);
}

//obtener los datos del registro
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$contrasena = $_POST['contrasena'];
$telefono = $_POST['telefono'];

//insertar los datos en la base de datos 
$sql = "INSERT INTO registro (nombre, email, contrasena, telefono) 
        VALUES ('$nombre', '$email', '$contrasena', '$telefono' )";

//if ($conn->query($sql) === TRUE){
    //echo "Registro exitosamente.";
//}else{
    //echo "Error: " . $conn->error;
//}

//$conn->close();

?>