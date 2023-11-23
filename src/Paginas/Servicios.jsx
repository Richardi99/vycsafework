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

            <section id='otros-Servicios'>
                <h3>Comprometidos con el trabajo</h3>
                <div className="galeria-img">
                    <img src= {IMG10} alt="IMG" />
                    <img src= {IMG1} alt="IMG" />
                    <img src= {IMG2} alt="IMG" />
                    <img src= {IMG3} alt="IMG" />
                    <img src= {IMG4} alt="IMG" />
                    <img src= {IMG5} alt="IMG" />
                    <img src= {IMG6} alt="IMG" />
                    <img src= {IMG7} alt="IMG" />
                    <img src= {IMG9} alt="IMG" />
                    <img src= {IMG11} alt="IMG" />
                    
                </div>
            </section>

            <Formulario mostrarTitulo={true }/>
            <Brochure/>
        </div>
    )
}