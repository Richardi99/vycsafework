import '../Css/Nosotros.css'

export const Nosotros = () => {
    return (
        <div id="nosotros">
            <section id="nosotros-sect1">
                <h1>Nosotros</h1>
                <h2>Trabajamos para hacerte la vida mas segura</h2>
            </section>
            <section id='somos'>
                <div className="somos-container">
                    <div className="imagen"></div>

                    <div className="somos-texto">
                        <h3>Somos <strong>V&Csafework</strong></h3>
                        <h4>Administración de Edificios y Seguridad</h4>
                            <p>
                            Somos una empresa peruana especializada en la administración integral de 
                            edificios, condominios y vigilancia preventiva. Para brindar servicios de
                            conserjes, porteros, recepcionistas, controladores , auxiliares de 
                            limpieza, vigilancia, resguardo policial y protección personal; 
                            contamos con pedo, entrenado y calificado para prestar 
                            nuestros servicios de calidad. Además, ofrecemos asesoría y gestión en 
                            seguridad, auditorías de edificios. También proporcionamos consultoría
                            en administración de edificios, construcción e inmobiliaria .
                            </p>
                    </div>
                </div>
            </section>

            <section id='valorSocial'>
                <div className="card1">
                    <h4 className='fraseSocial'>CALIDAD Y CONTINUO VALOR SOCIAL</h4>
                    <p>Buscamos dar siempre el mejor servicio a nuestros clientes</p>
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
                           <li>Transparencia</li>
                           <li>Honestidad</li>
                           <li>LibertadCoherencia como valor empresarial</li>
                           <li>Puntualidad en los procesos</li>
                           <li>Excelencia</li>
                           <li>Adaptabilidad</li>
                           <li>Diligencia</li>
                        </p>
                </div>

                <div className="card3">
                    <h4>Misión</h4>
                        <p>
                            Garantizar la prevención, seguridad, protección y administración de los bienes de nuestros
                            clientes, brindándoles nuestros servicios personalizados, empleando soluciones integrales
                            con implementación de tecnología innovadora, adaptándonos a las necesidades y exigencias
                            requeridas. Logrando así, generar tranquilidad y confianza con el cuidado de sus 
                            empresas
                        </p>
                </div>
            </section>
        </div>
    )
}
