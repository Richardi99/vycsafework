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
import icPdf from '../Img/icons/ic-pdf.png'
import brochure from '../Fies/BROCHURE V&C SAFE WORK S.A.C.-2.pdf'
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser'


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
        const section6 = document.getElementById('sct5');
        if (section6) {
          section6.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const form = useRef();

      /* SECCION PARA ENVIAR CORREOS ---------------------  */

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
                            <h4>Segurdad Privada</h4>
                            <p>Análisis diagnósticos y  recomendaciones para garantizar la eficiencia, 
                                seguridad y rentabilidad</p>
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
                            <p>Análisis diagnósticos y  recomendaciones para garantizar la eficiencia, 
                                seguridad y rentabilidad</p>
                        </div>

                    </div>
                </section>

                <section id="sct3">
                        <h2>Nuestros<span>&nbsp;Servicios</span></h2>
                    <div className="sct3-servicios">
                            <h3>Administracion de Edificios</h3>

                        <div className="sct3-admin">
                                <div className="card">
                                    <img src= {icConserjeria} alt="IMAGEN" />
                                    <h4>Consejeria</h4>
                                    <p>Servicio integral de atención y cuidado para la comunidad.
                                    </p>
                                </div>
                                <div className="card">
                                    <img src= {icPorteria} alt="IMAGEN" />
                                    <h4>Porteria</h4>
                                    <p> Control y gestión eficiente de accesos y salidas.
                                    </p>
                                </div>
                                <div className="card">
                                    <img src= {icRecep} alt="IMAGEN" />
                                    <h4>Recepcionistas</h4>
                                    <p>Recepción cordial y profesional para visitantes y clientes.
                                    </p>
                                </div>
                                <div className="card">
                                    <img src= {icAuxL} alt="IMAGEN" />
                                    <h4>Auxliar de Limpieza</h4>
                                    <p>Mantenimiento impecable y cuidado de espacios.
                                    </p>
                                </div>
                        </div>
                        <h3>Seguridad y vigilancia</h3>
                    <div className="sct3-seguridad">

                            <div className="card">
                                <img src= {icVig} alt="IMAGEN" />
                                <h4>Vigilancia preventiva</h4>
                                <p>Monitoreo constante para evitar situaciones de riesgo.
                                </p>
                            </div>
                            <div className="card">
                                <img src= {icPrevent} alt="IMAGEN" />
                                <h4>Preventor de pérdidas</h4>
                                <p>Estrategias para minimizar riesgos y pérdidas.
                                </p>
                            </div>
                            <div className="card">
                                <img src= {icResguard} alt="IMAGEN" />
                                <h4>Resguardo policial</h4>
                                <p>Protección y seguridad respaldada por expertos.
                                </p>
                            </div>
                            <div className="card">
                                <img src= {icEscolta} alt="IMAGEN" />
                                <h4>Escolta personal</h4>
                                <p>Acompañamiento y protección personalizada.
                                </p>
                            </div>
                    </div>

                        </div>
                </section>

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

                <section id='sct5'>
                    <h2>Contáctanos</h2>
                    <div className="formulario">
                        <div className="cont-cuadro">
                            <h5>Contáctanos</h5>
                            <p>Tenemos un asesor disponlible para atenderte con gusto</p>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className="form" action='post'>
                            <h5>Enviamos un mensaje</h5>
                            <div className="nombre">
                                <input type="text" id="name" name="user_name" required />
                                <label htmlFor="name">Nombre:</label>
                            </div>
                            <div className="correo">
                                <input type="email" id="email" name="user_email" required />
                                <label htmlFor="email">Correo electrónico:</label>
                            </div>
                            <div className="txarea">
                                <textarea id="message" name="message" required></textarea>
                                <label htmlFor="message">Mensaje:</label>
                            </div>
                            <div className="btn-enviar">
                            <button type='submit' value='send' className='btn-solicitar sct5-enviar'>Enviar Mensaje</button>
                            </div>
                        </form>                 

                    </div>
                </section>

                <section id='sct6'>
                    <h6>DESCARGAR FOLLETO CORPORATIVO</h6>
                    <div className="link-folleto">
                        <a href={brochure} download={brochure}><img src= {icPdf} alt="IMG" />
                        BROCHURE 2023
                        </a>
                    </div>
                </section>
            </div>
        </>
    )
}
