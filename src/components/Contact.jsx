import React from "react";
import '../assets/styles/components/Contact.scss'

const Contact = ({children}) =>(
    <section className="contain sticky contact__backgroud" id="contact">
        <main className="contact">
            <h1>Contactame!</h1>
            {children}
        </main>
    </section>
);

export default Contact;