import React from "react";
import '../assets/styles/components/Projects.scss'

const Projects = ({children}) =>(
    <section className="contain sticky secondary-color" id="projects">
        <main className="projects">
            <h1>Proyectos</h1>
            <ul>
                {children}
            </ul>
        </main>
    </section>
);

export default Projects;