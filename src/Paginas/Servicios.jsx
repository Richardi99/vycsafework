import { Sct3Servicios } from '../Component/Sct3Servicios'
import IMG1 from '../Img/IMG1.jpg'
import IMG2 from '../Img/IMG2.jpg'
import IMG3 from '../Img/IMG3.jpg'
import IMG4 from '../Img/IMG4.jpg'
import IMG5 from '../Img/IMG5.jpg'
import IMG6 from '../Img/IMG6.jpg'
import IMG7 from '../Img/IMG7.jpg'
import IMG8 from '../Img/IMG8.jpg'
import IMG9 from '../Img/IMG9.jpg'
import IMG10 from '../Img/IMG10.jpg'
import IMG11 from '../Img/IMG11.jpg'


import { Formulario } from '../Component/Formulario'
import { Brochure } from '../Component/Brochure'

export const Servicio = () => {


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

    return (
        <div id="servicios">
            <section id="servicios-sct1" >
                <h1 className='h1nosotros'>Servicios</h1>
            </section>

            <section id='nuestroServicio'>
                <div className="servicio-container">

                    <div className="servicio-texto">
                        <h3>Te <strong>Brindamos</strong></h3>
                        
                            <p>
                            Nuestros servicios, los cuales destacan por su excelencia y compromiso con 
                            la satisfacción del cliente. Ofrecemos soluciones innovadoras y
                            personalizadas, respaldadas por un equipo experto y orientado 
                            a brindar resultados superiores. Desde atención al cliente hasta
                            productos de alta calidad, nos esforzamos por superar las 
                            expectativas, asegurando la mejor experiencia en cada 
                            interacción. Tu bienestar es nuestra prioridad, y nuestro 
                            compromiso con la calidad es la piedra angular de todo lo que
                            hacemos.
                            </p>
                    </div>
                </div>
            </section>
            <Sct3Servicios/>

              <h3 className='otrosServiciosTexto'>Otros Servicios generales</h3>

            <section id='servicios-card'>
                <div class="sct-card">
                    <div class="content">
                        <p class="heading">Gasfitería</p>
                        <p class="para">
                        Contamos con expertos en gasfitería que se encargan de
                        solucionar cualquier problema relacionado con las tuberías, grifos,
                        sistemas de agua caliente, entre otros.
                        </p>
                        <button  onClick={handleScrollToSection} className='btn-solicitar'>Más info</button>
                    </div>
                </div>
                <div class="sct-card">
                    <div class="content">
                        <p class="heading">Reparaciones</p>
                        <p class="para">
                        Realizamos todo tipo de reparaciones, desde pequeños
                        arreglos hasta proyectos más complejos. Nuestro equipo está
                        capacitado para abordar cualquier inconveniente que pueda surgir en
                        su propiedad.
                        </p>
                        <button  onClick={handleScrollToSection} className='btn-solicitar'>Más info</button>
                    </div>
                </div>
                <div class="sct-card">
                    <div class="content">
                        <p class="heading">Mantenimiento de granito</p>
                        <p class="para">
                        Ofrecemos servicios de mantenimiento
                        especializados para superficies de granito, incluyendo pulido, sellado y
                        restauración para asegurar su durabilidad y aspecto impecable.

                        </p>
                        <button  onClick={handleScrollToSection} className='btn-solicitar'>Más info</button>
                    </div>
                </div>
                <div class="sct-card">
                    <div class="content">
                        <p class="heading">Limpieza y mantenimiento</p>
                        <p class="para">
                        Conjunto de intervenciones periódicas y
                        soluciones destinadas a mantener unas instalaciones en perfectas
                        condiciones de higiene a lo largo del tiempo.
                        </p>
                        <button  onClick={handleScrollToSection} className='btn-solicitar'>Más info</button>
                    </div>
                </div>
                <div class="sct-card">
                    <div class="content">
                        <p class="heading">Mantenimiento sanitario y eléctrico</p>
                        <p class="para">
                        Brindamos servicios de
                        mantenimiento preventivo y correctivo para sistemas sanitarios y
                        eléctricos, garantizando su funcionamiento óptimo y seguro.

                        </p>
                        <button  onClick={handleScrollToSection} className='btn-solicitar'>Más info</button>
                    </div>
                </div>
                <div class="sct-card">
                    <div class="content">
                        <p class="heading">Instalación de Kit de cámaras de seguridad y CCTV</p>
                        <p class="para">
                        Contamos con
                        expertos en seguridad que pueden instalar y configurar sistemas de
                        cámaras de seguridad y circuito cerrado de televisión (CCTV) para
                        proteger lo que más te importa.
                        </p>
                        <button  onClick={handleScrollToSection} className='btn-solicitar'>Más info</button>
                    </div>
                </div>
                <div class="sct-card">
                    <div class="content">
                        <p class="heading">Trabajos de Drywall</p>
                        <p class="para">
                        Realizamos trabajos de construcción en seco,
                        como instalación de paredes, divisiones y cielos rasos, ofreciendo
                        soluciones prácticas y estéticas
                        </p>
                        <button  onClick={handleScrollToSection} className='btn-solicitar'>Más info</button>
                    </div>
                </div>
                <div class="sct-card">
                    <div class="content">
                        <p class="heading">Enchape y otros</p>
                        <p class="para">
                        También realizamos servicios de enchape de paredes
                        y pisos, así como otros servicios generales según sus necesidades
                        específicas.
                        </p>
                        <button  onClick={handleScrollToSection} className='btn-solicitar'>Más info</button>
                    </div>
                </div>

            </section>


                <h3 className='otrosServiciosTexto'>Comprometidos con el trabajo</h3>
            <section id='otrosServicios'>
                <p>Desde la implementación de soluciones tecnológicas innovadoras hasta la prestación de servicios
                     personalizados, nuestra gama de ofertas está diseñada para
                      ofrecer resultados sobresalientes. Cada proyecto es abordado 
                      con una combinación única de habilidades, creatividad y 
                      conocimientos especializados, asegurando que cada cliente
                       reciba una solución que se adapte perfectamente a sus requisitos.</p>
                <div className="slider position">
                </div>
            </section>

            <Formulario mostrarTitulo={true }/>
            

          

            <Brochure/>

            
        </div>
    )
}