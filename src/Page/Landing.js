import React from 'react';
import FooterComponent from '../Components/Footer';
import Home from '../Components/MainHome';
import NavbarComponent from '../Components/Navbar';

export default function LandingPage () {
    return(
        <section id="main__page">
            <NavbarComponent />
            <Home />
            <FooterComponent />
        </section>
    );
}