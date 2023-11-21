import { useRef } from 'react';
import '../Css/Contacto.css'
import emailjs from '@emailjs/browser'
import { Formulario } from '../Component/Formulario';
import { Comunicate } from '../Component/comunicate';
import { FaTiktok,FaEnvelope,FaFacebook } from "react-icons/fa";


export const Contacto = () => {
    return (
        <>
        <div id="contacto">
            <section id="contacto-sect1">
                <h1>Contáctenos</h1>
                <h2>Completa nuestro formulario y atenderemos todas tus dudas sobre nuestros servicios</h2>
            </section>

            <Formulario mostrarTitulo={false} />

            <section id='contacto-datos'>
                <div className="link-icon">
                    <a href="#"><FaFacebook className='ic-facebook'/></a>
                    <a href="#"><FaTiktok className='ic-tiktok'/></a>
                    <a href="#"><FaEnvelope className='ic-mail'/></a>
                </div>

                <div className="datos2">
                    <h4>V&Csafework</h4>
                    <p>Ca. Eduardo López Romana 3801</p>
                    <p>an Martín de Porres 15202</p>
                </div>
                
                <p><a href="#">Ubicanos aquí</a></p>

                <div className="datos3">
                    <h4>V&Csafework</h4>
                    <p>registro@V&Csafework.com</p>
                    <p><a href="#">989-005-302</a></p>
                </div>
            </section>
            
        </div>
        </>
    )
}
