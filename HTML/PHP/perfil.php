<?php
session_start();
if (!isset($_SESSION['usuario_id'])) {
  header("Location: login.php");
  exit();
}

include("conexion.php");

$id = $_SESSION['usuario_id'];
$stmt = $conn->prepare("SELECT nombre, email, telefono, rol FROM usuarios WHERE id = ?");
$stmt->bind_param("i", $id);
$stmt->execute();
$stmt->bind_result($nombre, $email, $telefono, $rol);
$stmt->fetch();
$stmt->close();
$conn->close();
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi perfil</title>
  <link rel="stylesheet" href="../CSS/estilos.css">
</head>
<body>
  <h2>Perfil de <?php echo $nombre; ?></h2>
  <ul>
    <li><b>Email:</b> <?php echo $email; ?></li>
    <li><b>Teléfono:</b> <?php echo $telefono; ?></li>
    <li><b>Rol:</b> <?php echo ucfirst($rol); ?></li>
  </ul>

  <a href="panel_<?php echo $rol; ?>.php">Volver al panel</a> |
  <a href="logout.php">Cerrar sesión</a>
</body>
</html>
