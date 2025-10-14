<?php
session_start();
if (!isset($_SESSION['usuario_id']) || $_SESSION['rol'] !== 'usuario') {
  header("Location: login.php");
  exit();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Panel de Usuario</title>
  <link rel="stylesheet" href="../CSS/estilos.css">
</head>
<body>
  <h2>Hola, <?php echo $_SESSION['nombre']; ?> 👋</h2>
  <p>Bienvenido a tu perfil personal.</p>

  <a href="perfil.php">Ver mi perfil</a> |
  <a href="logout.php">Cerrar sesión</a>
</body>
</html>
