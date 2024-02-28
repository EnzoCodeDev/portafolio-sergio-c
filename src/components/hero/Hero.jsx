import './hero.scss';
import React from 'react'
import me from '../../assets/me.jpg';
import moment from 'moment/moment';
import archivoPDF from '../../assets/Curriculum.pdf';

export const Hero = () => {
  return (
    <section id='hero' className="container-section">
      <div className="container-hero">
        <div className="container-info">
          <h2 className="container-info__title">Permítame presentarme</h2>
          <hr />
          <p className="container-info__presentaction">
            Soy un<strong> {' '}programador Full Stack</strong>🧑 💻, Soy un entusiasta programador con un enfoque proactivo, organizado y altamente responsable. Mi pasión por la programación me ha llevado a desarrollar habilidades en diversas tecnologías y metodologías, lo que mepermite enfrentar desafíos con confianza y creatividad.
          </p>
          <hr />
          <ul className="info-personal">
            <li>
              <span>Nombre :</span> Sergio David  Cano
            </li>
            <li>
              <span>Edad : </span>{moment().diff('2001-01-02', 'years')} {' '} años
            </li>
            <li>
              <span>Contacto :</span> 318 732 4634
            </li>
            <li>
              <span>Correo electrónico:</span> sergio0201david@gmail.com
            </li>
          </ul>
          <div className='container-bottom'>
            <a href={archivoPDF} target="_blank" rel="noopener noreferrer" title="Descargar Curriculum Vitae" className="buttom-view-curriculum">Ver Curriculum</a>
          </div>
        </div>
        <div className="container-photo-me">
          <img src={me} alt="Myphoto" />
        </div>
      </div>
    </section>
  )
}