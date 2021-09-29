import React from "react";
import '../assets/styles/components/ContactLinks.scss'

const ContactLinks = () =>(
    <div className="contact-link">
        <ul>
            <li>
                <a href="https://github.com/Azthery">
                    <img src="https://img.icons8.com/ios-glyphs/60/ffffff/github.png" alt="GitHub"/>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/ignacio-sebastián-sepúlveda-huenulao/">
                    <img src="https://img.icons8.com/ios-glyphs/60/ffffff/linkedin-circled--v1.png" alt="LinkedIn"/>
                </a>
            </li>
        </ul>
    </div>
);

export default ContactLinks;