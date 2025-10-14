<?php
session_start();
if (!isset($_SESSION['usuario_id']) || $_SESSION['rol'] !== 'admin') {
  header("Location: login.php");
  exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Panel Administrador</title>
  <link rel="stylesheet" href="../CSS/estilos.css">
</head>
<body>
  <h2>👑 Bienvenido Admin, <?php echo $_SESSION['nombre']; ?></h2>
  <p>Aquí puedes gestionar usuarios y revisar información del sistema.</p>

  <a href="perfil.php">Ver mi perfil</a> |
  <a href="logout.php">Cerrar sesión</a>
</body>
</html>
