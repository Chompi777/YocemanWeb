import React from 'react';
import './Footer.css'; // Importar el archivo CSS

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Mi Página Web</p>
    </footer>
  );
}

export default Footer;
