import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CssCart.css';
import facebook from '../images/facebook.png';
import whatsapp from '../images/whatsapp.png';
import twitter from '../images/X.png';

// Importar todas las imágenes
import img1 from '../images/Desarrollo-WEB/1 (1).avif';
import img2 from '../images/Desarrollo-WEB/1 (2).avif';
import img3 from '../images/Desarrollo-WEB/1 (3).avif';
import img4 from '../images/Desarrollo-WEB/1 (4).avif';
import img5 from '../images/Desarrollo-WEB/1 (5).avif';
import img6 from '../images/Desarrollo-WEB/1 (6).avif';
import img7 from '../images/Desarrollo-WEB/1 (7).avif';
import img8 from '../images/Desarrollo-WEB/1 (8).avif';
import img9 from '../images/Desarrollo-WEB/1 (9).jpg';
import img10 from '../images/Desarrollo-WEB/1 (10).avif';
import img11 from '../images/Desarrollo-WEB/1 (11).jpg';
import img12 from '../images/Desarrollo-WEB/1 (12).jpeg';
import img14 from '../images/Desarrollo-WEB/114.png';

// Array de libros con categorías
const libros = [
  { id: 1, nombre: 'React Fundamentals', categoria: 'Frontend', imagen: img1, precio: '$25.99' },
  { id: 2, nombre: 'JavaScript Advanced', categoria: 'Frontend', imagen: img2, precio: '$20.99' },
  { id: 3, nombre: 'Web Design Basics', categoria: 'Diseño', imagen: img3, precio: '$18.99' },
  { id: 4, nombre: 'Node.js Guide', categoria: 'Backend', imagen: img4, precio: '$28.99' },
  { id: 5, nombre: 'CSS Mastery', categoria: 'Frontend', imagen: img5, precio: '$22.99' },
  { id: 6, nombre: 'Database Design', categoria: 'Backend', imagen: img6, precio: '$30.99' },
  { id: 7, nombre: 'UX Principles', categoria: 'Diseño', imagen: img7, precio: '$24.99' },
  { id: 8, nombre: 'Python for Web', categoria: 'Backend', imagen: img8, precio: '$26.99' },
  { id: 9, nombre: 'Mobile Development', categoria: 'Frontend', imagen: img9, precio: '$27.99' },
  { id: 10, nombre: 'API REST', categoria: 'Backend', imagen: img10, precio: '$21.99' },
  { id: 11, nombre: 'Graphic Design', categoria: 'Diseño', imagen: img11, precio: '$23.99' },
  { id: 12, nombre: 'DevOps Essentials', categoria: 'Backend', imagen: img12, precio: '$29.99' },
  { id: 13, nombre: 'Web Performance', categoria: 'Frontend', imagen: img14, precio: '$19.99' },
];

const categorias = ['Todos', 'Frontend', 'Backend', 'Diseño'];

const Book = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todos');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Filtrar libros por categoría
  const librosFiltrados = categoriaSeleccionada === 'Todos' 
    ? libros 
    : libros.filter(libro => libro.categoria === categoriaSeleccionada);

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
        <h1>Librería de Desarrollo Web</h1>
        
        {/* Filtro de categorías */}
        <div className="contenedor-filtros">
          <h3>Filtrar por categoría:</h3>
          <div className="botones-filtro">
            {categorias.map(categoria => (
              <button
                key={categoria}
                className={`boton-filtro ${categoriaSeleccionada === categoria ? 'activo' : ''}`}
                onClick={() => setCategoriaSeleccionada(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Galería de libros */}
        <div className="galeria-libros">
          {librosFiltrados.length > 0 ? (
            librosFiltrados.map(libro => (
              <div key={libro.id} className="tarjeta-libro">
                <div className="imagen-contenedor">
                  <img src={libro.imagen} alt={libro.nombre} />
                  <span className="etiqueta-categoria">{libro.categoria}</span>
                </div>
                <div className="info-libro">
                  <h3>{libro.nombre}</h3>
                  <p className="precio">{libro.precio}</p>
                  <button className="boton-agregar">Agregar al carrito</button>
                </div>
              </div>
            ))
          ) : (
            <p className="sin-resultados">No hay libros en esta categoría</p>
          )}
        </div>

        <div className="contador-libros">
          Mostrando {librosFiltrados.length} de {libros.length} libros
        </div>
      </main>

      <footer>
        <p className="description">Desarrollo Web</p>

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