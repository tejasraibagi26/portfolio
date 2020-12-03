import React from 'react';
import NavbarComponent from '../Components/Navbar';
import ProjectSection from '../Components/Projects/ProjectSection';
import FooterComponent from '../Components/Footer.js';

export default function Projects () {
    return(
        <section id = "project__page">
            <NavbarComponent />
            <ProjectSection />
            <FooterComponent />
        </section>
    ); 
}