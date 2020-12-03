import React from 'react';
import '../../CSS/About.css';
import '../../CSS/Animation.css';

export default function AboutMeSection () {

    var descTitle = "<Info />"
    var desc = "Tejas has a tenacious character, the will to complete any challenges he faces. He has a strong programming background with knowledge of various programming languages such as JAVA, C#, Python, ReactJs, Flutter and NodeJs. He specializes in Application and Web development and can create stunning websites and app for both Android and iOS."
    var ed = "<Education />"
    var ed1 = "• University of Mumbai [GPA- 7.12] [2017-2021]"
    var ed2 = "• ShubhamRaje Jr College [HSC - 66.77%] [2015-2017]"
    var ed3 = "• Shree Maa Vidyalaya [SSC - 86.6%] [2013-2015]"
    return(
        <div className="about__me">
            <h1 className="about__title fadeIn">About Me.</h1>
            <h3 className="about__desc__title fadeIn" >{descTitle}</h3>
            <h4 className = "about__desc fadeIn" style={{animationDelay: "0.1s"}}>{desc}</h4>
            <h3 className="about__edu__title fadeIn" style={{animationDelay: "0.2s"}}>{ed}</h3>
            <h4 className = "about__edu fadeIn" style={{animationDelay: "0.3s"}}>{ed1}</h4>
            <h4 className = "about__edu2 fadeIn" style={{animationDelay: "0.4s"}}>{ed2}</h4>
            <h4 className = "about__edu3 fadeIn" style={{animationDelay: "0.5s"}}>{ed3}</h4>
        </div>
    );
}