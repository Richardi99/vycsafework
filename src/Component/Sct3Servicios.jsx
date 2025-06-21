import icConserjeria from '../Img/icons/ic-conserje.png'
import icPorteria from '../Img/icons/ic-portero.png'
import icRecep from '../Img/icons/ic-recep.png'
import icAuxL from '../Img/icons/ic-limpieza.png'
import icVig from '../Img/icons/ic-camara.png'
import icPrevent from '../Img/icons/ic-prevent.png'
import icResguard from '../Img/icons/ic-police.png'
import icEscolta from '../Img/icons/ic-guarda.png'

import icHelioP from '../Img/icons/ic-Helio.png'
import icHelioAlt from '../Img/icons/ic-guarda.png'
import icBalonKit from '../Img/icons/ic-guarda.png'
import icRecarga from '../Img/icons/ic-guarda.png'

import '../Css/Servicios.css'
import '../Css/Container.css'
import '../Css/Cont-mobile.css'

export const Sct3Servicios = () => {
    return (
        <section id="sct3">
                        <h2>Nuestros<span>&nbsp;Servicios</span></h2>
                    <div className="sct3-servicios">
                        <h3>Vigilancia y Seguridad</h3>
                            <div className="sct3-seguridad">

                            <div className="card">
                                <img src= {icVig} alt="IMAGEN" />
                                <h4>Vigilancia y seguridad física</h4>
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
                                <h4>Escolta o seguridad personal</h4>
                                <p>Acompañamiento y protección personalizada.
                                </p>
                            </div>
                    </div>
                        
                            <h3>Administración de Edificios y condominios</h3>

                    <div className="sct3-admin">
                                <div className="card">
                                    <img src= {icConserjeria} alt="IMAGEN" />
                                    <h4>Conserje</h4>
                                    <p>Servicio integral de atención y cuidado para la comunidad.
                                    </p>
                                </div>
                                <div className="card">
                                    <img src= {icPorteria} alt="IMAGEN" />
                                    <h4>Porteros</h4>
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
                                    <h4>Auxiliar de Limpieza</h4>
                                    <p>Mantenimiento impecable y cuidado de espacios.
                                    </p>
                                </div>
                        </div>
                            <h3>Distribución y comercialización de gas helio para diversos sectores</h3>

                    <div className="sct3-admin">
                                <div className="card">
                                    {/* <img src= {icHelioP} alt="IMAGEN" /> */}
                                    <h4>Helio Premium</h4>
                                    <p>Balones de alta pureza para uso profesional y eventos de gran escala. Calidad garantizada y entrega segura.
                                    </p>
                                </div>
                                <div className="card">
                                    {/* <img src= {icPorteria} alt="IMAGEN" /> */}
                                    <h4>Helio alternativo</h4>
                                    <p>  Opciones económicas con niveles de pureza adecuados para globos y usos recreativos. Ideal para eventos personales.
                                    </p>
                                </div>
                                <div className="card">
                                    {/* <img src= {icRecep} alt="IMAGEN" /> */}
                                    <h4>Balones y kit nuevo</h4>
                                    <p>Incluye balón lleno, válvula infladora y boquilla especial. Listo para usar en fiestas, ferias y promociones.
                                    </p>
                                </div>
                                <div className="card">
                                    {/* <img src= {icAuxL} alt="IMAGEN" /> */}
                                    <h4>Recagas</h4>
                                    <p>Servicio rápido de recarga de balones con gas helio certificado. Recojo y entrega a domicilio disponible.
                                    </p>
                                </div>
                        </div>

                        </div>
                </section>
    )
}