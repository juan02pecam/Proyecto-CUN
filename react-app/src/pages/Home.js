import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/estilos.css';
//import libroAbierto from '../images/libro-abierto.png';
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';
import twitter from '../images/X.png';
import img1 from '../images/Desarrollo-WEB/1 (1).avif';
import img2 from '../images/Desarrollo-WEB/1 (2).avif';
import img3 from '../images/Desarrollo-WEB/1 (3).avif';
import img4 from '../images/Desarrollo-WEB/1 (4).avif';
import img5 from '../images/Desarrollo-WEB/1 (5).avif';


const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagenes = [img1, img2, img3, img4, img5];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagenes.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
    );
  };

  // Cambiar imagen cada 5 segundos
  React.useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="hamburguesa" id="boton-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav id="menu" className={menuOpen ? 'mostrar' : ''}>
        <fieldset>
          <ul className="list-one">
            <li><a href="#information">Acerca de nosotros</a></li>
            <li><Link to="../book"><p>Libros</p></Link></li>
            <li><a href="#redes">Redes sociales</a></li>
          </ul>

          <button id="inicio-sesion"><Link to="/login"><p>iniciar sesion</p></Link></button>

        </fieldset>
      </nav>

      <main>

        <div id="products">
          <h2>Libros</h2>
          <p>Son productos con los que se cuentan</p>
          
          <div className="carrusel-contenedor">
            <button className="boton-carrusel prev" onClick={prevImage}>❮</button>
            
            <div className="carrusel">
              <img 
                className="producs" 
                src={imagenes[currentIndex]} 
                alt={`Producto ${currentIndex + 1}`} 
                key={currentIndex}
              />
            </div>
            
            <button className="boton-carrusel next" onClick={nextImage}>❯</button>
          </div>

          {/* Indicadores de página */}
          <div className="carrusel-indicadores">
            {imagenes.map((_, index) => (
              <span 
                key={index}
                className={`punto ${index === currentIndex ? 'activo' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>

        <div id="information">
          <fieldset>
            <h1>Bibliotech</h1>
            <p>
              El espacio en blanco es cualquier cadena de texto compuesta solo por espacios, tabulaciones o saltos de línea (para ser precisos,
              secuencias CRLF, retornos de carro o avances de línea). Estos caracteres te permiten formatear tu código de una manera que lo hará fácilmente
              legible por ti y otras personas. De hecho, gran parte de nuestro código fuente está lleno de estos caracteres de espacio en blanco, y solo
              tendemos a deshacernos de ellos en un paso de compilación de producción para reducir el tamaño de descarga del código
            </p>
          </fieldset>
        </div>

      </main>

      <footer>
        <p className="description">Desarrollo Web</p>
        <p className="description">Juan Sebastian Cardenas <br></br>
            Jefferson Delgado<br></br>
            Kelly Soto<br></br>
            Juan David Peña
        </p>

        <span className="final">
          <a href="https://www.facebook.com/juandavid.penacamacho.1/"><img src={facebook} alt="facebook" id="redes" /></a>
          <a href="https://wa.me/qr/TYHGCT6KPELQH1"><img src={whatsapp} alt="whatsapp" id="redes" /></a>
          <a href="https://x.com/juandavidpecam5"><img src={twitter} alt="X" id="redes" /></a>
        </span>
      </footer>

    </div>
  );
};

export default Home;