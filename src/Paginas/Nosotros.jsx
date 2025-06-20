import { Brochure } from '../Component/Brochure'
import '../Css/Nosotros.css'

export const Nosotros = () => {
    return ( 
        <div id="nosotros">
            <section id="nosotros-sect1">
                <h1 className='h1nosotros'>Nosotros</h1>
                <h2 className='h2nosotros'>Trabajamos para hacerte la vida mas segura</h2>
            </section>
            <section id='somos'>
                <div className="somos-container">
                    <div className="imagen"></div>

                    <div className="somos-texto">
                        <h3>Somos <strong>V&C SAFE WORK</strong></h3>
                        <h4>Administración de Edificios y Seguridad</h4>
                            <p>
                            Somos una empresa peruana especializada en vigilancia y seguridad, administración integral de edificios y condominios, venta y distribución de gas helio. Para brindar cada uno de nuestros servicios contamos con personal altamente capacitado, entrenado y calificado.
                            </p>
                    </div>
                </div>
            </section>

            <section id='valorSocial'>
                <div className="card1">
                    <h4 className='fraseSocial'>CALIDAD Y CONTINUO VALOR SOCIAL</h4>
                    <p>Buscamos dar siempre el mejor servicio a nuestros clientes.</p>
                </div>

                <div className="card2">
                    <h4>Visión</h4>
                        <p>
                            Ser una corporación líder en el rubro de seguridad y vigilancia, Administración de 
                            Edificios, destacándonos por ofrecer una gestión innovadora, profesional e integral 
                            de excelencia. A su vez, generar un valor agregado al cliente, haciendo la diferencia 
                            más allá de sus expectativas y logrando establecer relaciones a largo plazo.
                        </p>
                </div>
                
                
                <div className="card4">
                    <h4>Valores</h4>
                        <p>
                           <li>Respeto</li>
                           <li>Honestidad</li>
                           <li>Integridad</li>
                           <li>Confidencialidad</li>
                           <li>Sentido de pertenencia</li>
                           <li>Lealtad</li>
                           <li>Diligencia</li>
                           <li>Transaparencia</li>
                           <li>Equidad</li>
                        </p>
                </div>

                <div className="card3">
                    <h4>Misión</h4>
                        <p>
                            Garantizar la prevención, seguridad, protección y administración de los bienes de nuestros
                            clientes, brindándoles nuestros servicios personalizados, empleando soluciones integrales
                            con implementación de tecnología innovadora, adaptándonos a las necesidades y exigencias
                            requeridas. Logrando así, generar tranquilidad y confianza con el cuidado de sus 
                            empresas.
                        </p>
                </div>
            </section>

            <Brochure/>

        </div>
    )
}
