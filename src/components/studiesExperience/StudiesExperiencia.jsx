import React from 'react';
import './studiesExperiencia.scss';

export const StudiesExperiencia = () => {
    return (
        <section id="studies-experiencia" className="seccion-studies-experiencia">
            <div className="container-section-studies-experiencia">
                <div className="container">
                    <h2>Estudios</h2>
                    <hr />
                    <font>
                        <h3>One Oracle next education</h3>
                        <span>Marzo 2022 - Noviembre 2022</span>
                    </font>
                    <p>Estuve en el programa de Alura latam, obteniendo certificados, sobre programación y habilidades blandas.</p>
                </div>
                <hr />
                <div className="container">
                    <h2>Experiencias</h2>
                    <hr />
                    <font>
                        <h3>Empresa ADP Solutions, </h3>
                        <span>Septiembre 2021 - Presente</span>
                    </font>
                    <p>Actualmente, me encuentro como desarrollo full Stack Web Developer, en la cual llevo diversos proyectos en todas las áreas tanto como backend, frontend, aplicaciones de escritorio y aplicaciones móviles. </p>
                </div>
            </div>
        </section>
    )
}