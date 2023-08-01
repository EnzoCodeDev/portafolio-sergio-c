import React from 'react'
import './navbar.scss';
import { Link } from "react-scroll";
export const Navbar = () => {
    let itemMenu = [{
        name: 'INICIO',
        href: 'header',
    }, {
        name: 'ACERCA DE MI',
        href: 'hero',
    }, {
        name: 'ESTUDIOS Y EXPERIENCIAS',
        href: 'studies-experiencia',
    }, {
        name: 'PROYECTOS',
        href: 'proyect',
    }, {
        name: 'TECNOLOGÍAS',
        href: 'tegnologies',
    }, {
        name: 'CONTACTO',
        href: 'contact',
    }];
    return (
        <div className='container-navbar'>
            <div className='listMenu'>
                <ul>
                    {itemMenu.map((item, index) => (
                        <React.Fragment key={index}>
                            <Link
                                activeClass='active'
                                to={item.href}
                                spy={true}
                                smooth={true}
                                duration={300}
                                offset={-70}
                                className="link"
                            >
                                {item.name}
                            </Link>
                            <hr />
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    )
}
