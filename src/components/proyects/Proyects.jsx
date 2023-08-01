import React from 'react';
import './proyects.scss';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Navigation, EffectFade, Pagination, Autoplay } from "swiper";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Proyects = () => {
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
                        {[1, 2, 3, 4, 5, 6].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="container-header">
                                    <img className="container-img-header" src="src/assets/header.jpg" alt="Cover_page" />
                                    <div className="container-text">
                                        <p className='container-text__1' >¡Hola! soy</p>
                                        <p className='container-text__2' >Sergio cano </p>
                                        <p className='container-text__3' >Programador de software</p>
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