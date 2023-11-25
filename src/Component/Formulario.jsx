import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

export const Formulario = ({ mostrarTitulo }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_srw8qqf', 'template_jeercv5', form.current, 'gyTb0ybqHn8ZFNqeW')
            .then((result) => {
                console.log(result.text);
                // Limpiar el formulario después de enviar con éxito
                form.current.reset();
                // Mostrar un mensaje de enviado correctamente
                const successMessage = document.createElement('p');
                successMessage.textContent = '¡Mensaje enviado correctamente!';
                successMessage.classList.add('success-message');
                form.current.parentNode.appendChild(successMessage);
                // Eliminar el mensaje después de unos segundos
                setTimeout(() => {
                    successMessage.remove();
                }, 5000); // Elimina el mensaje después de 5 segundos
            })
            .catch((error) => {
                console.log(error.text);
            });
    };

    return (
        <section id='sct5'>
            {mostrarTitulo && <h2>Contáctanos</h2>}
            <div className="formulario">
                <div className="cont-cuadro">
                    <h5>Contáctanos</h5>
                    <p>Tenemos un asesor disponible para atenderte con gusto.</p>
                </div>
                <form ref={form} onSubmit={sendEmail} className="form" action='post'>
                    <h5>Enviamos un mensaje</h5>
                    <div className="nombre">
                        <input type="text" id="name" name="user_name" required />
                        <label htmlFor="name">Nombre:</label>
                    </div>
                    <div className="correo">
                        <input type="email" id="email" name="user_email" required />
                        <label htmlFor="email">Correo electrónico:</label>
                    </div>
                    <div className="txarea">
                        <textarea id="message" name="message" required></textarea>
                        <label htmlFor="message">Mensaje:</label>
                    </div>
                    <div className="btn-enviar">
                        <button type='submit' value='send' className='btn-solicitar sct5-enviar'>Enviar Mensaje</button>
                    </div>
                </form>
            </div>
        </section>
    );
};
