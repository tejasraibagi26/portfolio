import React from 'react';
import Contact from '../Components/Contact/Contact';
import FooterComponent from '../Components/Footer';
import NavbarComponent from '../Components/Navbar';

export default function ContactMe () {
    return(
        <section id="contact__page">
            <NavbarComponent />
            <Contact />
        </section>
    );
}