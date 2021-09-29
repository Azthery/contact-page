import React from 'react';
import '../assets/styles/components/HeaderNav.scss'

const Header = () => (
    <header className="contain" id="home">
        <main className="headernav">
            <div className="headernav__brand">
                <p className="headernav__brand--title"><b>Portafolio</b></p>
                <p className="headernav__brand--subtitle">Ignacio Sepulveda Huenulao</p>
            </div>
            <nav className="headernav__nav">
                <ul>
                    <li>
                        <a href="#presentation">Inicio</a>
                    </li>
                    <li className="line"></li>
                    <li>
                        <a href="#projects">Proyectos</a>
                    </li>
                    <li className="line"></li>
                    <li>
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </nav>
        </main>
    </header>
);

export default Header