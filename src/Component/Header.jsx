import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from '../Img/logosinbg.png';
import '../Css/Header.css';
import menu from '../Img/icmenu.png';
import { Comunicate } from "./comunicate";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

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

    const handleClick = () => {
        if (location.pathname === window.location.pathname) {
            window.scrollTo(0, 0); // Hacer scroll hacia arriba si se hace clic en el enlace actual
            setIsOpen(false); // Cerrar el menú si se hace clic en un enlace interno
        }
    };

    return (
        <>
            <header>
                <nav>
                    <picture>
                        <img src={logo} alt="LOGO"/>
                    </picture>
                    <ol className="link-principal">
                        <Link to="/" onClick={handleClick}>Inicio</Link>
                        <Link to="/nosotros" onClick={handleClick}>Nosotros</Link>
                        <Link to="/servicio" onClick={handleClick}>Servicios</Link>
                        <Link to="/contactanos" onClick={handleClick}>Contáctanos</Link>
                    </ol>

                    <div className="menu-burger">
                        <button onClick={toggleMenu}><img src={menu} alt="MENU" /></button>
                    </div>

                    <ol className={`link-mobile ${isOpen ? 'open' : ''}`}>
                        <Link to="/" onClick={handleClick}>Inicio</Link>
                        <Link to="/nosotros" onClick={handleClick}>Nosotros</Link>
                        <Link to="/servicio" onClick={handleClick}>Servicios</Link>
                        <Link to="/contactanos" onClick={handleClick}>Contáctanos</Link>
                    </ol>
                </nav>
            </header>
        </>
    );
};
