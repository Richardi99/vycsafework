import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../Img/logosinbg.png';

import '../Css/Header.css'
import menu from '../Img/icmenu.png'

// Importes y declaración de componente...

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header>
                <nav>
                    <picture>
                        <img src={logo} alt="LOGO"/>
                    </picture>
                    <ol className="link-principal">
                        <Link to="/">Inicio</Link>
                        <Link to="/nosotros">Nosotros</Link>
                        <Link to="/servicio">Servicios</Link>
                        <Link to="/contactanos">Contáctanos</Link>
                    </ol>

                    <div className="menu-burger">
                        <button onClick={toggleMenu}><img src={menu} alt="MENU" /></button>
                    </div>

                    <ol className={`link-mobile ${isOpen ? 'open' : ''}`}>
                        <Link to="/">Inicio</Link>
                        <Link to="/nosotros">Nosotros</Link>
                        <Link to="/servicio">Servicios</Link>
                        <Link to="/contactanos">Contáctanos</Link>
                    </ol>
                </nav>
            </header>
            <div className="bar-contact">
                <h3>Comunicate con nosotros al +51 903287955</h3>
            </div>
        </>
    );
};
