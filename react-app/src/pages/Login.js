import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CssLogin.css';
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';
import twitter from '../images/X.png';

const Login = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('todos los campos deben ser completados.');
      return;
    }
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
      alert('Por favor, ingrese un correo electronico valido');
      return;
    }
    alert('Ha iniciado sesion correctamente.');
    // Aquí podrías manejar el envío a backend
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
        <button type="submit" id="regist"><Link to="/register">Registrarse</Link></button>
      </nav>

      <main>
        <div>
          <fieldset>
            <h2>Iniciar sesion</h2>
            <form id="loginForm" onSubmit={validateForm}>
              <label htmlFor="email">Correo electronico:</label><br />
              <input type="email" name="email" id="email" placeholder="Email@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />

              <label htmlFor="contrasena">Contraseña</label><br />
              <input type="password" name="contrasena" id="contrasena" placeholder="contrasena" value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />

              <button type="submit">Ingresar</button>
            </form>
          </fieldset>
        </div>
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

export default Login;