import { Sct3Servicios } from '../Component/Sct3Servicios'


export const Servicio = () => {
    return (
        <div id="servicios">
            <section id="servicios-sct1" >
                <h1 className='h1nosotros'>Servicios</h1>
            </section>

            <section id='nuestroServicio'>
                <div className="servicio-container">

                    <div className="servicio-texto">
                        <h3>Nuestros <strong>Servicios</strong></h3>
                        <h4>Administración de Edificios y Seguridad</h4>
                            <p>
                            Nuestros servicios destacan por su excelencia y compromiso con 
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

            </section>
        </div>
    )
}