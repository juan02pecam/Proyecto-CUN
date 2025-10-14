<?php
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $contrasena = $_POST['contrasena'];
    $telefono = $_POST['telefono'];
    $rol = "usuario"; //toma por defecto a todos como usuario

    // Encriptar la contraseña
    $hash = password_hash($contrasena, PASSWORD_DEFAULT);

    // Preparar sentencia segura (evita inyección SQL)
    $stmt = $conn->prepare("INSERT INTO registro (nombre, email, contrasena, telefono, rol) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $nombre, $email, $hash, $telefono, $rol);
    //consulta si hay un correo existente en la base de datos
    $check = $conn->prepare("SELECT id FROM registro WHERE email = ?");
    $check->bind_param("s", $email);
    $check->execute();
    $check->store_result();

    // Ejecutar e informar al usuario

    if ($check->num_rows > 0) {
        echo "<script>alert('Este correo ya está registrado'); window.history.back();</script>";
        exit;
    }
    $check->close();

    if ($stmt->execute()) {
        echo "<script>
                alert('Registro exitoso ✅');
                window.location.href = '../Login.html';
              </script>";
    } else {
        echo "<script>
                alert('Error al registrar: " . $stmt->error . "');
                window.history.back();
              </script>";
    }

    $stmt->close();
    $conn->close();
}


/*//Conexion
$servidor = "localhost";
$usuario = "root";
$contrasena = ""; // sin contraseña por defecto en XAMPP
$basedatos = "proyect_one";

//conectar con la base de datos
$conn = new mysqli($servidor, $usuario, $contrasena, $basedatos);

//verifica conexion
if ($conn->connect_error){
    die("Falla en la conexion: " . $conn->connect_error);
}*/

/*include("conexion.php");

//obtener los datos del registro
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$contrasena = $_POST['contrasena'];
$_hash = password_hash($contrasena, PASSWORD_DEFAULT);
$telefono = $_POST['telefono'];

//insertar los datos en la base de datos 
$sql = "INSERT INTO registro (nombre, email, contrasena, telefono) 
        VALUES ('$nombre', '$email', '$contrasena', '$telefono' )";

if ($conn->query($sql) === TRUE) {
        // Mostrar alerta y redirigir
        echo "<script>
                alert('Registro exitoso');
                window.location.href = 'Login.html';
              </script>";
    } else {
        echo "<script>
                alert('Error al registrar: " . $conn->error . "');
                window.history.back(); // vuelve al formulario
              </script>";
    }
    
    /*else {
        echo "<script>
            if(email === "" || password === ""){
                alert("todos los campos deben ser completados.");
                return false; 
            }
          </script>";
    }*/
//$conn->close();*/

?>