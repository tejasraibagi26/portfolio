import React from 'react';
import '../../CSS/Contact.css';
import '../../CSS/Animation.css';


export default function Contact () {
    return(
        <div className="contact">
            <h1 className="contact__title">Contact</h1>
            <h3 className="contact__details fade">You can contact me on <a href="mailto: tejasraibagi@gmail.com" className="grad">tejasraibagi@gmail.com</a></h3>
        </div>
    );
}