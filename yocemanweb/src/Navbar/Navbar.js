import React from 'react';
import './Navbar.css'; // Importar el archivo CSS

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca">Acerca</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
