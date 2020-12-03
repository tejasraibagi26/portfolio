import React from 'react';
import NavbarComponent from '../Components/Navbar';
import AboutMeSection from '../Components/AboutMe/AboutMeSection';

export default function AboutMe () {
    return(
        <section id = "about__page">
            <NavbarComponent />
            <AboutMeSection />
        </section>
    );
}