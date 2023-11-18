import imagen1 from '../Img/bgPrincipal.png'
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
                    <h2>Los mejores en Administración de 
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
                    <img src="" alt="" />
                </section>
                <section id="sct4"></section>
            </div>
        </>
    )
}
