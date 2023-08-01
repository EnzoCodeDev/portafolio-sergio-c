import React from 'react';
import './technologies.scss';

//Front
import angular from '../../assets/tecnologies/angular.png';
import electron from '../../assets/tecnologies/electron.png';
import ionic from '../../assets/tecnologies/ionic.png';
import react from '../../assets/tecnologies/react.png';
import redux from '../../assets/tecnologies/redux.png';
import sass from '../../assets/tecnologies/sass.png';

//back
import php from '../../assets/tecnologies/php.png';
import laravel from '../../assets/tecnologies/laravel.png';
import mysql from '../../assets/tecnologies/mysql.png';
import nestjs from '../../assets/tecnologies/nestjs.png';
import nodejs from '../../assets/tecnologies/nodejs.png';
import postgresql from '../../assets/tecnologies/postgresql.png';


export const Technologies = () => {
    let front = [
        {
            img: react,
            title: 'React'
        },
        {
            img: redux,
            title: 'Redux'
        },
        {
            img: ionic,
            title: 'Ionic'
        },
        {
            img: angular,
            title: 'Angular'
        },
        {
            img: sass,
            title: 'Sass'
        },
        {
            img: electron,
            title: 'Electron'
        },
    ];
    let back = [
        {
            img: php,
            title: 'Php'
        },
        {
            img: laravel,
            title: 'Laravel'
        },
        {
            img: mysql,
            title: 'MySQL'
        },
        {
            img: nestjs,
            title: 'NestJS'
        },
        {
            img: nodejs,
            title: 'Node.js'
        },
        {
            img: postgresql,
            title: 'PostgreSQL'
        },
    ];
    return (
        <section id="tegnologies" className="seccion-tegnologies">
            <h2 className='title'>Tecnologías</h2>
            <div className="container-section-tegnologies">
                <div className="divisor">
                    <h2 className="title">Front-end</h2>
                    <hr />
                    <div className='container-card-tegnologies'>
                        {front.map((item, index) => (
                            <div key={index} className='card'>
                                <div className='card__img'>
                                    <img src={item['img']} alt={item['title']} />
                                </div>
                                <div className='card__text'>
                                    <p>{item['title']}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <hr />
                <div className="divisor">
                    <h2 className="title">Back-end</h2>
                    <hr />
                    <div className='container-card-tegnologies'>
                        {back.map((item, index) => (
                            <div key={index} className='card'>
                                <div className='card__img'>
                                    <img src={item['img']} alt={item['title']} />
                                </div>
                                <div className='card__text'>
                                    <p>{item['title']}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}