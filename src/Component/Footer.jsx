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
                        Somos una empresa especializada en la gestión integral de 
                        edificios y condominios, ofreciendo servicios expertos en 
                        seguridad, conserjería, limpieza y consultoría inmobiliaria. 
                        Nuestro personal altamente capacitado garantiza calidad en 
                        cada tarea, transformando y optimizando tus espacios. 
                        </p>
            </div>
                <div className="footer-col col2">
                    <h3>ENLACES INTERNOS</h3>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/nosotros">Nosotros</Link></li>
                            <li><Link to="/servicio">Servicios</Link></li>
                            <li><Link to="/contactanos">Contáctanos</Link></li>
                        </ul>
                </div>

                <div className="footer-col">
                    <h3>OTROS SERVICIOS</h3>
                        <ul>
                            <li>Conserjeria</li>
                            <li>Porteria</li>
                            <li>Recepcionistas</li>
                            <li>Auxiliar de Limpieza</li>
                            <li>Vigilancia preventiva</li>
                            <li>Preventor de pérdidas</li>
                            <li>Resguardo Policial</li>
                            <li>Escolta Personal</li>
                        </ul>
                </div>
                <div className="footer-col">
                    <h3>MAPA DE UBICACION</h3>
                        <div className="map-ubicacion">
                            <a href= "https://maps.app.goo.gl/rYdQJubUUERjbDWy9" target="_blank"><img src= {ubic} alt="MAPA" /></a> 
                        </div>
                </div>
         </div>
         <aside className= "Bn-richardi">
            <p>
            v&cSafework © 2023 | Todos los Derechos Reservados, Diseñado por <a href="#"  target="_blank">"Byrtec.com"</a> 
            </p>
         </aside>
       </footer>
    )
}