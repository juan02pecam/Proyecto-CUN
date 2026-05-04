import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CssForm.css';
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';
import twitter from '../images/X.png';

const Form = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (name === '' || email === '' || message === '') {
      alert('Todos los campos deben ser completados.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    alert('Formulario enviado correctamente.');
    // Redirigir o manejar envío
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

      <main>
        <h2>Formulario de Sugerencias</h2>
        <form id="sugeForm" onSubmit={validateForm}>
          <label htmlFor="name">Nombre:</label><br />
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} /><br /><br />

          <label htmlFor="email">Correo electrónico:</label><br />
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} /><br /><br />

          <label htmlFor="message">Mensaje:</label><br />
          <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea><br /><br />

          <button type="submit">Enviar</button>
        </form>
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

export default Form;