import React from 'react';
import '../assets/styles/components/Presentation.scss';

const Presentation = () => (
    <section className="contain sticky" id="presentation">
        <main className="presentation">
            <div className="presentation__personaldata">

                <h1>Hola! un gusto</h1>
                <img src="https://img.icons8.com/officel/80/000000/person-male.png" alt="icon"/>
                <h1>Mi nombre es Ignacio</h1> 
                <h2>Soy desarrollador Full Stack</h2>
                <p>
                    Actualmente estoy aumentado mis conocimientos a través de cursos y desarrollo 
                    de proyectos personales de aplicaciones web, a las cuales me encanta darle un 
                    diseño y interfaces claras amigables para el usuario, acompañado con un codigo 
                    prodigio.
                </p>
            </div>
            <div className="presentation__data">
                <div className="presentation__data--curriculum">
                    <a href="https://firebasestorage.googleapis.com/v0/b/contact-page-5f867.appspot.com/o/Ignacio%20Sepulveda%20-%20curriculunm.pdf?alt=media&token=fcbd4430-4733-4aff-8b56-a0732b50c347">
                        <h1 className="name">Curriculum</h1>
                        <h1 className="link">Descargar</h1>
                    </a>
                </div>
                <div className="presentation__data--repository">
                    <a href="https://github.com/Azthery?tab=repositories" target="_blank">
                        <h1 className="name">Repositorio</h1>
                        <h1 className="link">Ir a la web</h1>
                    </a>
                </div>
            </div>
        </main>
    </section>
);

export default Presentation;