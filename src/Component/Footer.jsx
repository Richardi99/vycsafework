import '../Css/Footer.css'
import logo from '../Img/logosinbg.png';


export const Footer = () => {
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
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Nosotros</a></li>
                            <li><a href="#">Contáctanos</a></li>
                            <li><a href="#">Unete a nosotros</a></li>
                        </ul>
                </div>

                <div className="footer-col">
                    <h3>SERVICIOS GENERALES</h3>
                        <ul>
                            <li>Gasfiteria</li>
                            <li>Reparaciones</li>
                            <li>Mantenimiento de granito</li>
                            <li>Limpieza</li>
                            <li>Mantenimiento sanitario y eléctrico</li>
                            <li>Instalacion de cámaras CCTV</li>
                            <li>Trabajos de Drywall</li>
                            <li>Enchape y otros</li>
                        </ul>
                </div>
                <div className="footer-col">
                    <h3>MAPA DE UBICACION</h3>
                        <div className="map-ubicacion"></div>
                </div>
         </div>
       </footer>
    )
}