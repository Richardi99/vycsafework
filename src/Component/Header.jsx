import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../Img/logosinbg.png';
import '../Css/Header.css';
import menu from '../Img/icmenu.png';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    useEffect(() => {
        const handler = (event) => {
            if (event.target.closest(".menu-burger")) {
                return; // Ignore clicks inside the menu button
            }
            setIsOpen(false);
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

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
                <h3>Comunícate con nosotros al +51 903287955</h3>
            </div>
        </>
    );
};
