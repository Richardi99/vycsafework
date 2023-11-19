import imagen1 from '../Img/bgPrincipal.png'
import icConserjeria from '../Img/icons/ic-conserje.png'
import icPorteria from '../Img/icons/ic-portero.png'
import icRecep from '../Img/icons/ic-recep.png'
import icAuxL from '../Img/icons/ic-limpieza.png'
import icVig from '../Img/icons/ic-camara.png'
import icPrevent from '../Img/icons/ic-prevent.png'
import icResguard from '../Img/icons/ic-police.png'
import icEscolta from '../Img/icons/ic-guarda.png'

import '../Css/Container.css'
import lgCondOrange from '../Img/icCondOrange.png'
import lgPolOrange from '../Img/icPolOrange.png'
import lgCleanOrange from '../Img/icCleanOrange.png'
import lgCondBlue from '../Img/icCodBlue.png'
import lgPolBlue from '../Img/icPolBlue.png'
import lgCleanBlue from '../Img/icCleanBlue.png'
import React, { useState } from "react"

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

    return (
        <>
            <div id="inicio">
                <section id="sct1">
                    <div className='container-img'>
                        <img src= {imagen1} alt="IMAGEN1" />
                    </div>
                    <div className="sct1texto">
                        <h1>Administración de Edificios y Seguridad</h1>
                        <p>
                        Ofrecemos una amplia gama de servicios generales para 
                        satisfacer todas sus necesidades de mantenimiento y reparación
                        </p>
                        <button className='btn-solicitar'>Solicitar información</button>
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
                <section id="sct4"></section>
            </div>
        </>
    )
}
