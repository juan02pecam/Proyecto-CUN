<?php
session_start();
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $contrasena = $_POST['contrasena'];

  $stmt = $conn->prepare("SELECT id, nombre, contrasena, rol FROM usuarios WHERE email = ?");
  $stmt->bind_param("s", $email);
  $stmt->execute();
  $stmt->store_result();

  if ($stmt->num_rows > 0) {
    $stmt->bind_result($id, $nombre, $hashGuardado, $rol);
    $stmt->fetch();

    if (password_verify($contrasena, $hashGuardado)) {
      $_SESSION['usuario_id'] = $id;
      $_SESSION['nombre'] = $nombre;
      $_SESSION['email'] = $email;
      $_SESSION['rol'] = $rol;

      if ($rol === 'admin') {
        header("Location: panel_admin.php");
      } else {
        header("Location: panel_usuario.php");
      }
      exit();
    } else {
      $error = "Contraseña incorrecta.";
    }
  } else {
    $error = "Correo no registrado.";
  }

  $stmt->close();
}
$conn->close();









/*include("conexion.php");

if($conn->connect_error){
  die("Error de conexión: " . $conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"] == "POST"){
  $email = $_POST['email'] ?? '';
  $contrasena = $_POST['contrasena'] ?? '';

  //valida si los campos no estan vacíos
  if(empty($email)||empty($contrasena)){
    echo "
      <script>
        alert('Por favor complete todos los campos.');
        window.history.back();
      </script>
    ";
    exit;
  }

  //busca los datos en la base de datos
  $sql = "SELECT * FROM registro WHERE email = '$email' AND contrasena = '$contrasena'";
  $resultado = $conn->query($sql);
  if($resultado->num_rows > 0){

    //usuario encontrado
    echo "
    <script>
      alert('Inicio de sesión exitoso.');
      window.location.href='../inicio.html';
    </script>
    ";
  }else{
    //usuario no encontrado
    echo "
    <script>
      alert('Usuario o contraseña incorrectos.');
      window.history.back();
    </script>
    ";
  }
}

$conn->close();*/

?>
