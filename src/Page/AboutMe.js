import React from 'react';
import NavbarComponent from '../Components/Navbar';
import AboutMeSection from '../Components/AboutMe/AboutMeSection';
import FooterComponent from '../Components/Footer';

import '../CSS/About.css';

export default function AboutMe () {
    return(
        <section id = "about__page">
            <NavbarComponent />
            <AboutMeSection />
            <FooterComponent />
        </section>
    );
}