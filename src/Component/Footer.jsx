import React from 'react';
import '../Css/Footer.css';
import logo from '../Img/logosinbg.png';
import ubic from '../Img/ubicacionMAPA.jpeg';
import { Link, useLocation } from 'react-router-dom';

export const Footer = () => {
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === window.location.pathname) {
            window.scrollTo(0, 0); // Hacer scroll hacia arriba si se hace clic en el enlace actual
        }
    };

    return (
        <footer>
            <div className="footer-columns center">
                <div className="footer-col">
                    <h3>LA EMPRESA</h3>
                    <p>
                    En nuestra empresa, ofrecemos una amplia gama de
                    servicios generales para satisfacer todas sus
                    necesidades de mantenimiento y reparación. Nuestro
                    equipo de profesionales altamente capacitados y
                    experimentados se encarga de brindar soluciones
                    eficientes y de calidad.
                    </p>
                </div>

                <div className="footer-col col2">
                    <h3>ENLACES INTERNOS</h3>
                    <ul>
                        <li><Link to="/" onClick={handleClick}>Inicio</Link></li>
                        <li><Link to="/nosotros" onClick={handleClick}>Nosotros</Link></li>
                        <li><Link to="/servicio" onClick={handleClick}>Servicios</Link></li>
                        <li><Link to="/contactanos" onClick={handleClick}>Contáctanos</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>SERVICIOS GENERALES</h3>
                    <ul>
                        <li>Gasfitería</li>
                        <li>Reparaciones</li>
                        <li>Mantenimineto de granito</li>
                        <li>Limpieza y mantenimiento</li>
                        <li>Mantenimiento sanitario y eléctrico</li>
                        <li>Instalación de Kit de cámaras de seguridad y CCTV</li>
                        <li>Trabajos de Drywall</li>
                        <li>Enchape y otros</li>
                        {/* Otros servicios */}
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>MAPA DE UBICACION</h3>
                    <div className="map-ubicacion">
                        <a href="https://maps.app.goo.gl/rYdQJubUUERjbDWy9" target="_blank">
                            <img src={ubic} alt="MAPA" />
                        </a>
                    </div>
                </div>
            </div>

            <aside className="Bn-richardi">
                <p>
                    v&cSafework © 2023 | Todos los Derechos Reservados, Diseñado por <a href="#" target="_blank">"Byrtec.com"</a>
                </p>
            </aside>
        </footer>
    )
}
