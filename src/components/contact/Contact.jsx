import './contact.scss';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleInput = (value, index) => {
        setFormState({
            ...formState,
            [index]: value.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState['email'] && formState['email'].length === 0) {
            toast.warning("Falta el email!", {
                position: "bottom-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        if (formState['name'] && formState['name'].length === 0) {
            toast.warning("Falta el nombre!", {
                position: "bottom-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }


        if (formState['message'] && formState['message'].length === 0) {
            toast.warning("Falta el mensaje!", {
                position: "bottom-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }

        emailjs.sendForm('service_2316mss', 'template_o38t54i', e.target, 'pemNiMbrzoP2sS9IH')
            .then((res) => {
                console.log(res);
                toast.success("Se ha enviado el email correctamente!", {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                console.log(res);
            }).catch((error) => {
                console.log(error);
                toast.error("Hubo un error al enviar el email!", {
                    position: "bottom-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            });
    }
    return (
        <section id="contact" className="section-contact">
            <div className="container">
                <h2>Contáctame</h2>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='container-contact-form'>
                        <label>Tu nombre y apellido: </label>
                        <input onChange={(e) => handleInput(e, 'name')} type="text" name="name" placeholder="Aquí tu nombre y apellido" />
                        <label>Tu Correo electrónico: </label>
                        <input onChange={(e) => handleInput(e, 'email')} type="text" name="email" placeholder="Aquí va tu email" />
                        <label>Mensaje: </label>
                        <textarea onChange={(e) => handleInput(e, 'message')} name="message" cols="30" rows="10" placeholder="Aquí va tu mensaje"></textarea>
                        <button disabled="" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </section>
    )
}