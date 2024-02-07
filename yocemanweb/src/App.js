import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carousel
import Navbar from '../src/Navbar/Navbar';
import Footer from './Footer/Footer';
import Yoceman1 from '../src/assets/Yoceman.jpeg'
import Yoceman2 from './assets/yocezzz.jpg'
import Yoceman3 from './assets/yoceman1.jpg'
// import './Carousel.css'

function App() {
  return (
    <div>
      <Navbar />
      <Carousel showArrows={true} infiniteLoop={true}>
        <div>
          <img src={Yoceman1} alt="Imagen 1" className="carousel-image" />
          <p className="legend">El iceberg de Yoceman 1</p>
        </div>
        <div>
          <img src={Yoceman2} alt="Imagen 2" className="carousel-image" />
          <p className="legend">Yoceman en un momento de relajacion 2</p>
        </div>
        <div>
          <img src={Yoceman3} alt="Imagen 3" className="carousel-image" />
          <p className="legend">Yoceman feliz</p>
        </div>
      </Carousel>
      <Footer />
    </div>
  );
}

export default App;


