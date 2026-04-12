import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/regist.css';
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';
import twitter from '../images/X.png';

const Register = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contrasena: '',
    telefono: ''
  });
  const [mensaje, setMensaje] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const RegisLogin = (e) => {
    e.preventDefault();
    // Validación básica
    if (!formData.nombre || !formData.email || !formData.contrasena || !formData.telefono) {
      setMensaje('Todos los campos son requeridos.');
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!formData.email.match(emailPattern)) {
      setMensaje('Por favor, ingrese un correo electrónico válido.');
      return;
    }
    setMensaje('Registro exitoso.');
    // Aquí manejar envío
  };

  return (
    <div>
      <div className="hamburguesa" id="boton-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav id="menu" className={menuOpen ? 'mostrar' : ''}>
        <Link to="/">Inicio</Link>
      </nav>

      <p id="text">Si no te has registrado lo podras hacer acá</p>

      <main>
        <fieldset>
          <h2>Registro</h2>
          <form onSubmit={RegisLogin} id="formu">
            <label htmlFor="nombre">Nombre completo:</label><br />
            <input type="text" name="nombre" id="nombre" placeholder="Nombre completo" required value={formData.nombre} onChange={handleChange} /><br /><br />

            <label htmlFor="email">Correo electronico:</label><br />
            <input type="email" name="email" id="email" placeholder="Email@gmail.com" required value={formData.email} onChange={handleChange} /><br /><br />

            <label htmlFor="contrasena">Contraseña</label><br />
            <input type="password" name="contrasena" id="contrasena" placeholder="password" required value={formData.contrasena} onChange={handleChange} /><br /><br />

            <label htmlFor="telefono">Numero telefonico:</label><br />
            <input type="number" name="telefono" id="telefono" placeholder="Numero telefonico" required value={formData.telefono} onChange={handleChange} /><br /><br />

            <button type="submit" id="register">Registrarte</button>
          </form>

          <p id="mensaje">{mensaje}</p>
        </fieldset>
      </main>

      <footer>
        <p className="name"></p> <br />
        <p className="description"></p>

        <span className="final">
          <a href="https://www.facebook.com/juandavid.penacamacho.1/"><img src={facebook} alt="facebook" id="redes" /></a>
          <a href="https://wa.me/qr/TYHGCT6KPELQH1"><img src={whatsapp} alt="whatsapp" id="redes" /></a>
          <a href="https://x.com/juandavidpecam5"><img src={twitter} alt="X" id="redes" /></a>
        </span>
      </footer>
    </div>
  );
};

export default Register;