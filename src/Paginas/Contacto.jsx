import { useRef } from 'react';
import '../Css/Contacto.css'
import emailjs from '@emailjs/browser'
import { Formulario } from '../Component/Formulario';
import { Comunicate } from '../Component/comunicate';
import { FaTiktok,FaEnvelope,FaFacebook,FaWhatsapp,FaSearchLocation } from "react-icons/fa";


export const Contacto = () => {
    return (
        <>
        <div id="contacto">
            <section id="contacto-sect1">
                <h1>Contáctanos</h1>
                <h2>Completa nuestro formulario y atenderemos todas tus dudas sobre nuestros servicios</h2>
            </section>

            <div className="contacto-fomr">
                <Formulario mostrarTitulo={false} />
                <section id='contacto-datos'>
                    <div className="link-icon">
                        <a href="https://www.facebook.com/profile.php?id=100093411814535" target="_blank" ><FaFacebook className='ic-facebook'/></a>
                        <a href="https://www.tiktok.com/@vycsafework?_t=8hYSiGjgH9J&_r=1" target="_blank" ><FaTiktok className='ic-tiktok'/></a>
                        <a href="mailto:jcossio@V&Csafework.com" target="_blank" ><FaEnvelope className='ic-mail'/></a>
                    </div>

                    <div className="datos2">
                        <h4>V&C SAFE WORK</h4>
                        <p>Ca. Eduardo López Romana 3801</p>
                        <p>San Martín de Porres 15202</p>
                    </div>
                    
                    <a href="https://maps.app.goo.gl/rYdQJubUUERjbDWy9" target="_blank" className='contacto-ubi'><FaSearchLocation className='icUbi'/> UBICANOS AQUÍ </a>

                    <div className="datos3">
                        <h4>Escribenos !!!</h4>
                        <a href="mailto:coordinadoradministrativo@vycsafework.com" target="_blank" >coordinadoradministrativo@V&Csafework.com</a>
                        <a href="https://wa.me/+51989005302" target="_blank" className='what'><FaWhatsapp className='icWhat'/>989-005-302</a>
                    </div>
                </section>

            </div>

            
        </div>
        </>
    )
}
