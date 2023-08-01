import React from 'react'
import './header.scss';
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export const Header = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="container-header">
                    <div className="container-socials">
                        <ul className="socials-icons">
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100010397472525" rel="noreferrer" target="_blank">
                                    <FaFacebook className="icon" style={{ color: 'rgb(253, 253, 253)' }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/sergiocoder02" rel="noreferrer" target="_blank">
                                    <RiInstagramFill className="icon instagram" style={{ color: 'rgb(253, 253, 253)' }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/sergio-cano-b3392b22a" rel="noreferrer" target="_blank">
                                    <FaLinkedin className="icon" style={{ color: 'rgb(253, 253, 253)' }} />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/sergioDavidCano" rel="noreferrer" target="_blank">
                                    <FaGithub className="icon" style={{ color: 'rgb(253, 253, 253)' }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <img className="container-img-header" src="assets/header.jpg" alt="Cover_page" />
                    <div className="container-text">
                        <p className='container-text__1' >¡Hola! soy</p>
                        <p className='container-text__2' >Sergio cano </p>
                        <p className='container-text__3' >Programador de software</p>
                    </div>
                </div>
            </div>
        </header>
    )
}