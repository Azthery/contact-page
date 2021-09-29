import React from 'react';
import emailjs from 'emailjs-com';

import {useState} from 'react';

import '../assets/styles/components/FormContact.scss';

const FormContact = () =>{
    const [sent, setSent] = useState({text: '', count: 0});
    const updateSent = () => setSent({ ...sent, text: 'Mensaje enviado', count: sent.count + 1});

    const sendEmail = (event) => {
        event.preventDefault();
        emailjs.sendForm('solicitudcontacto', 'contacto_template', event.target, 'user_4fMERudecJKGLtalWVrKF')
            .then(() => updateSent())
            .catch ((error) =>  console.error(error.text))
        event.target.reset();
    };

    return (
        <div className="form-contact">
            <form onSubmit={sendEmail}>
                <label for="name">Nombre<span>*</span></label>
                <input name="name" type="text" placeholder="Ingresa tu nombre..." required/>

                <label for="email">Email<span>*</span></label>
                <input type="text" name="email" placeholder="example@gmail.com" required/>

                <label for="phone">Telefono o celular</label>
                <input type="text" name="phone" placeholder="+569 1234 5678"/>

                <label for="subjet">Asunto<span>*</span></label>
                <input type="text" name="subjet" placeholder="Escribe tu asunto..." required/>

                <label for="message">Mensaje</label>
                <textarea name="message" name="message" cols="30" rows="10"></textarea>
                
                <h4>
                     {sent.text} 
                     {sent.count > 1 ? <span>x{sent.count}</span> : ''}
                     {sent.text.length > 0 ? <img src="https://img.icons8.com/color-glass/48/ffffff/ok.png"/> : ''}
                </h4>
                <button type="submit" >Enviar</button>
            </form>

        </div>
    )
};

export default FormContact;