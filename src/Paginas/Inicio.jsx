import imagen1 from '../Img/bgPrincipal.png'
import icConserjeria from '../Img/icons/ic-conserje.png'
import icPorteria from '../Img/icons/ic-portero.png'
import icRecep from '../Img/icons/ic-recep.png'
import icAuxL from '../Img/icons/ic-limpieza.png'
import icVig from '../Img/icons/ic-camara.png'
import icPrevent from '../Img/icons/ic-prevent.png'
import icResguard from '../Img/icons/ic-police.png'
import icEscolta from '../Img/icons/ic-guarda.png'
import icSuper from '../Img/imgSuper.jpg'
import icasesoria from '../Img/asesoria.jpg'

import '../Css/Container.css'
import '../Css/Cont-mobile.css'

import lgCondOrange from '../Img/icCondOrange.png'
import lgPolOrange from '../Img/icPolOrange.png'
import lgCleanOrange from '../Img/icCleanOrange.png'
import lgCondBlue from '../Img/icCodBlue.png'
import lgPolBlue from '../Img/icPolBlue.png'
import lgCleanBlue from '../Img/icCleanBlue.png'

import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
import { Formulario } from '../Component/Formulario'
import { Comunicate } from '../Component/comunicate'
import { Brochure } from '../Component/Brochure'
import { Sct3Servicios } from '../Component/Sct3Servicios'


export function Inicio () {

    const [hoveredCards, setHoveredCards] = useState({
        condCard: false,
        polCard: false,
        cleanCard: false
    } 
    );

    const handleMouseEnter = (card) => {
        setHoveredCards(prevState => ({ ...prevState, [card]: true }));
    };
    
    const handleMouseLeave = (card) => {
        setHoveredCards(prevState => ({ ...prevState, [card]: false }));
    };   
    const handleScrollToSection = () => {
        const section5 = document.getElementById('sct5');
        if (section5) {
          section5.scrollIntoView({ behavior: 'smooth' });
        }
      };

      
      /* SECCION PARA ENVIAR CORREOS ---------------------  */
      const form = useRef();
      
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ony031l', 'template_gn90oix', form.current, 'gyTb0ybqHn8ZFNqeW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  /* ----------------------------------------------- */

        

    return (
        <>
        <Comunicate comunicate={true}/>
            <div id="inicio">
                <section id="sct1">
                    <div className='container-img'>
                        <img src= {imagen1} alt="IMAGEN1" />
                    </div>
                    <div className="sct1texto">
                        <h1>Administración de Edificios y Seguridad</h1>
                           <div className="p-content">
                            <p>
                            Ofrecemos una amplia gama de servicios generales para 
                            satisfacer todas sus necesidades de mantenimiento y reparación
                            </p>
                           </div>
                        <button  onClick={handleScrollToSection} className='btn-solicitar'>Solicitar información</button>
                    </div>
                </section>

                <section id="sct2">
                    <h2 className='column'>Los mejores en Administración de 
                        <span> Edificios y seguridad</span>
                    </h2>
                    <div className="sect2-card">
                        <div 
                            className="card" 
                            onMouseEnter={() => handleMouseEnter('condCard')}
                            onMouseLeave={() => handleMouseLeave('condCard')}
                        >
                            <img 
                                src= {hoveredCards.condCard ? lgCondBlue : lgCondOrange} alt="icono1" 
                            />
                            <h4>Administración de Edificios</h4>
                            <p>Análisis diagnósticos y  recomendaciones para garantizar la eficiencia, 
                                seguridad y rentabilidad</p>
                        </div>
                        <div 
                            className="card" 
                            onMouseEnter={() => handleMouseEnter('polCard')}
                            onMouseLeave={() => handleMouseLeave('polCard')}
                        >
                            <img 
                                src= {hoveredCards.polCard ? lgPolBlue : lgPolOrange} alt="icono2" 
                            />
                            <h4>Seguridad Privada</h4>
                            <p>Protegiendo espacios y personas con profesionalismo y dedicación. Ofrecemos soluciones integrales en seguridad para tranquilidad absoluta.</p>
                        </div>
                        <div 
                            className="card" 
                            onMouseEnter={() => handleMouseEnter('cleanCard')}
                            onMouseLeave={() => handleMouseLeave('cleanCard')}
                        >
                            <img 
                                src= {hoveredCards.cleanCard ? lgCleanBlue : lgCleanOrange} alt="icono3" 
                            />
                            <h4>Limpieza y mantenimiento</h4>
                            <p>Mantenemos espacios impecables y funcionales. Nuestro compromiso es la excelencia en limpieza y cuidado para ambientes que inspiran confianza y comodidad.</p>
                        </div>

                    </div>
                </section>

                <Sct3Servicios/>

                <h2 className='h2solo'>Nuestras<span>&nbsp;Soluciones</span></h2>
                <section id="sct4">
                    <div className="sct4-soluciones">
                        <div className="card1">
                            <img src= {icasesoria} alt="IMAGEM" />
                        </div>
                        <div className="card">
                            <h4>Asesoria, consultoria para revisión general</h4>
                                <p>Velamos y garantizamos tu seguridad y bienestar al examinar minuciosamente
                                    la infraestructura, sistemas y administración de tu propiedad. Identificamos
                                    posibles problemas y tomamos medidas preventivas. Nuestros informes proporcionan
                                    una visión precisa de cualquier deficiencia, permitiéndote tomar acciones correctivas
                                    para mejorar tu entorno residencial. Tu tranquilidad es nuestra máxima prioridad.
                                .</p>
                                <button  onClick={handleScrollToSection} className='btn-solicitar'>Solicitar información</button>
                        </div>
                        <div className="card">
                            <h4>Supervisión de personal y Estados de cuenta</h4>
                                <p>Supervisamos al personal para optimizar su rendimiento y gestionamos estados de cuenta
                                    con precisión financiera y transparencia. Estos procesos son esenciales para mantener
                                    la eficiencia operativa e integridad financiera en el entorno empresarial actual.
                                .</p>
                                <button  onClick={handleScrollToSection} className='btn-solicitar'>Solicitar información</button>
                        </div>
                        <div className="card">
                         <img src= {icSuper} alt="IMAGEM" />
                        </div>
                    </div>
                </section>

                <Formulario mostrarTitulo={true }/>

                <Brochure/>
            </div>
        </>
    )
}
