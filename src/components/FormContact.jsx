import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';
import '../assets/styles/components/FormContact.scss';

const FormContact = () =>{

    const form = useRef();
    const sendEmail = (event) => {
        // event.preventDefault();
    
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
        console.log(event);
    };

    return (
        <div className="form-contact">
            <form onSubmit={sendEmail}>
                <label for="name">Nombre<span>*</span></label>
                <input name="name" type="text" placeholder="Nombre" required/>
                <label for="email">Email<span>*</span></label>
                <input type="text" id="email" placeholder="example@gmail.com" required/>
                <label for="subjet">Asunto<span>*</span></label>
                <input type="text" id="subjet" placeholder="Escribe tu asunto..." required/>
                <label for="message">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
};

export default FormContact;