import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import IMG1 from '../Img/IMG1.jpg';
import IMG2 from '../Img/IMG2.jpg';
import IMG3 from '../Img/IMG3.jpg';
import IMG4 from '../Img/IMG4.jpg';
import IMG5 from '../Img/IMG5.jpg';
import IMG6 from '../Img/IMG6.jpg';
import IMG7 from '../Img/IMG7.jpg';
import IMG9 from '../Img/IMG9.jpg';
import IMG10 from '../Img/IMG10.jpg';
import IMG11 from '../Img/IMG11.jpg';

const OtrosServiciosSlider = () => {
  const images = [IMG10, IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG9, IMG11];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id='otros-Servicios'>
      <h3>Comprometidos con el trabajo</h3>
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Imagen ${index}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default OtrosServiciosSlider;
