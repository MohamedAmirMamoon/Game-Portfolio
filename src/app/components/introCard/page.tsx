'use client';
import Image from 'next/image';
import './intro.css'
import CardNav from './cardNav/CardNav';
import Contact from './contact/Contact';
import RouteContent from './routeContent/RouteContent';
import { useState } from 'react';


export default function IntroCard() {

    const [activeSection, setActiveSection] = useState("bio");

    return (

    <div className="intro-page">

        <div className="home-title">
            <p>Dev Portfolio</p>
        </div>

        {/* Desktop: nav column | card | content panel.
            Narrow: card, then nav row, then content panel (DOM order). */}
        <div className="intro-layout">

            <div className="intro-wrapper">
                <div className="myimg">
                    <Image
                        src="/juniorportrait.jpeg"
                        alt="Picture of the author"
                        width={200}
                        height={200}
                        priority
                    />
                </div>

                <div className="name">
                    <h1>Mohamed Amir Mamoon</h1>
                </div>

                <div className="info">
                    <p>USC &apos;26</p>
                    <p> - </p>
                    <p>SDE Intern @ Amazon</p>
                </div>
            </div>

            <div className="cardnavigation">
                <CardNav
                    img="/profileicon.png"
                    title="Bio"
                    w={50}
                    h={50}
                    active={activeSection === "bio"}
                    onSelect={() => setActiveSection("bio")}
                />
                <CardNav
                    img="/star.png"
                    title="Skills"
                    w={50}
                    h={50}
                    active={activeSection === "skills"}
                    onSelect={() => setActiveSection("skills")}
                />
                <CardNav
                    img="/projects.png"
                    title="Projects"
                    w={60}
                    h={50}
                    active={activeSection === "projects"}
                    onSelect={() => setActiveSection("projects")}
                />
                <CardNav
                    img="/notes.png"
                    title="Experience"
                    w={50}
                    h={50}
                    active={activeSection === "resume"}
                    onSelect={() => setActiveSection("resume")}
                />
            </div>

            <div className="content">
                <RouteContent activeSection={activeSection}/>
            </div>

        </div>

        <div className="socials">
            <Contact img="/mail2.png" title="Contact" link="mailto:mohamedamamoon0@gmail.com"/>
            <Contact img="/insta2.png" title="Insta" link="https://www.instagram.com/amir.mamoonn/"/>
            <Contact img="/linkedin2.png" title="LinkedIn" link="https://www.linkedin.com/in/mohamed-mamoon/"/>
            <Contact img="/github2.png" title="Github" link="https://github.com/MohamedAmirMamoon"/>
        </div>

    </div>

    );
}
