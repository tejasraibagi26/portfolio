import React from 'react';
import '../../CSS/Project.css';
import '../../CSS/Animation.css';

export default function ProjectSection () {

    var proj1 = "Canteen Management App [2020]."
    var proj1_desc = "• Group Leader and Technical Lead for FrontEnd development in Flutter" 
    var proj1_stack = "• Tech Stack: Node.js, Flutter, PostgreSQL."

    var proj2 = "Branch Recommender [2020]."
    var proj2_desc = "• Created a website to recommend the best possible engineering branch based on the user input ." 
    var proj2_stack = "• Tech Stack: Node.js, React.js, Python."

    var proj3 = "Blockchain Certificate Credentialing System [2020]."
    var proj3_desc = "• Web based portals to verify and upload certificates to blockchain networks." 
    var proj3_stack = "• Tech Stack: Node.js, React.js."

    var proj4 = "C.L.A.S.H [2019]."
    var proj4_desc = "• Hypercasual Infinite shooter game." 
    var proj4_stack = "• Tech Stack: Unity."


    return(
        <div className = "project">
            <h1 className="project__title fadeIn">Projects.</h1>
            {/* Project 1 */}
            <h3 className="project__desc__title fadeIn" >{proj1}</h3>
            <h4 className = "project__desc fadeIn" style={{animationDelay: "0.1s"}}>{proj1_desc}</h4>
            <h4 className = "project__stack fadeIn" style={{animationDelay: "0.1s"}}>{proj1_stack}</h4>
            {/* Project 2 */}
            <h3 className="project__desc__title fadeIn" >{proj2}</h3>
            <h4 className = "project__desc fadeIn" style={{animationDelay: "0.1s"}}>{proj2_desc}</h4>
            <h4 className = "project__stack fadeIn" style={{animationDelay: "0.1s"}}>{proj2_stack}</h4>
            {/* Project 3 */}
            <h3 className="project__desc__title fadeIn" >{proj3}</h3>
            <h4 className = "project__desc fadeIn" style={{animationDelay: "0.1s"}}>{proj3_desc}</h4>
            <h4 className = "project__stack fadeIn" style={{animationDelay: "0.1s"}}>{proj3_stack}</h4>
            {/* Project 4 */}
            <h3 className="project__desc__title fadeIn" >{proj4}</h3>
            <h4 className = "project__desc fadeIn" style={{animationDelay: "0.1s"}}>{proj4_desc}</h4>
            <h4 className = "project__stack fadeIn" style={{animationDelay: "0.1s"}}>{proj4_stack}</h4>
        </div>
    );
}