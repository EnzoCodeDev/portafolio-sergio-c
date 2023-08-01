import React from 'react';
import './home.scss';
import { Hero } from '../../components/hero/Hero';
import { Navbar } from '../../components/navbar/Navbar';
import { Header } from '../../components/header/Header';
import { StudiesExperiencia } from '../../components/studiesExperience/StudiesExperiencia';
import { Technologies } from '../../components/Technologies/Technologies';
import { Proyects } from '../../components/proyects/Proyects';
import { Contact } from '../../components/contact/Contact';
import { Footer } from '../../components/footer/Footer';

export const Home = () => {
    return (
        <div className='container-root'>
            <div className='container-root__main'>
                <div className='container-root__main__navbar'>
                    <Navbar />
                </div>
                <div className='container-root__main__home'>
                    <Header />
                    <main>
                        <div className='container-body'>
                            <Hero />
                            <StudiesExperiencia />
                            <Proyects />
                            <Technologies />
                            <Contact />
                            <Footer />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}