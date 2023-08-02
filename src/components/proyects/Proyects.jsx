import React from 'react';
import './proyects.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";

import headerImg from '../../assets/header.jpg';

import imgMajos from '../../assets/proyects/majos.png';

import archivoPDF from '../../assets/Curriculum.pdf';

export const Proyects = () => {
    let proyects = [{
        url: 'https://sergiodavidcano.github.io/majo-s-store-react/',
        img: imgMajos,
        name: "Majo's",
        descripcion: 'Tienda oficial de majos',
    }, {
        url: 'https://sergiodavidcano.github.io/portafolio-sergio-c/',
        img: headerImg,
        name: "Portafolio Sergio Cano",
        descripcion: 'Mi portafolio de presentación personal',
    }];
    return (
        <section id="proyect" className="seccion-proyect">
            <div className='container-swiper'>
                <div className="container">
                    <h2>Proyectos</h2>
                    <Swiper
                        effect={"fade"}
                        rewind={true}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Navigation, EffectFade, Pagination]}
                        className="mySwiper"
                    >
                        {proyects.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="container-header">
                                    <img className="container-img-header" src={item['img']} alt="Cover_page" />
                                    <div className="container-text">
                                        <p className='container-text__2' style={{ backgroundColor: 'transparent' }} >{item['name']}</p>
                                        <p className='container-text__1' style={{ backgroundColor: 'transparent' }} >{item['descripcion']} </p>
                                        <a href={item['url']} target="_blank" rel="noopener noreferrer" title={item['name']}><p className='container-text__1' >Ver </p></a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}