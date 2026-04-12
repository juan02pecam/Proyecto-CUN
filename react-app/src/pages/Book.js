import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CssCart.css'; // Asumiendo que hay un CssCart.css, si no, usar estilos.css
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';
import twitter from '../images/X.png';

const Book = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        <h1>Libros</h1>
        {/* Aquí puedes agregar lógica para mostrar items del carrito */}

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

export default Book;