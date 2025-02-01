'use client';
import {useRouter} from 'next/navigation'
import Image from 'next/image';
import './intro.css'
import CardNav from './cardNav/CardNav';
import Contact from './contact/Contact';
import RouteContent from './routeContent/RouteContent';
import { useState } from 'react';




export default function IntroCard() {

    const router = useRouter();

    const [activeSection, setActiveSection] = useState("bio");
  

    return (
      
    <>
        <div className='intro-wrapper'>
            <div className="myimg">
                <Image
                    src="/portrait.jpeg"
                    alt="Picture of the author"
                    width={200}
                    height={200}
                    style={{
                        borderRadius: "50%", // Ensures it's round
                        objectFit: "cover",  // Makes sure image fills the circle
                    }}
                />
                
            </div>
            
            <div className="name">
                <h1>Mohamed Amir Mamoon</h1>   
            </div>

            <div className="info" >
                <p>Student at USC</p>
                <p> - </p>
                <p>SWE Intern @ Mindwave AI</p>
                <p>Prev @ IBM</p>
            </div>
        </div>

        <div className='cardnavigation'>
            <div onClick={() => setActiveSection("bio")} >
                <CardNav img="/profileicon.png" title="Bio" w={50} h={50} />
            </div>
            <div onClick={() => setActiveSection("skills")} >
                <CardNav img="/star.png" title="Skills" w={50} h={50} />
            </div>
            <div onClick={() => setActiveSection("projects")} >
                <CardNav img="/projects.png" title="Projects" w={60} h={50} />
            </div>
            <div onClick={() => setActiveSection("resume")} >
                <CardNav img="/notes.png" title="Experience" w={50} h={50} />
            </div>
        </div>
            
            
            
            

        <div className="socials">
            <Contact img="/envelope.png" title="Contact" w={70} h={50} link="mailto:mohamedamamoon0@gmail.com"/>
            <Contact img="/insta.png" title="Insta" w={50} h={50} link="https://www.instagram.com/amir.mamoonn/"/>
            <Contact img="/linkedin.png" title="LinkedIn" w={50} h={50} link="https://www.linkedin.com/in/mohamed-mamoon/"/>
            <Contact img="/github.png" title="Github" w={50} h={50} link="https://github.com/MohamedAmirMamoon"/>
        </div>

        <div className="content">
            <RouteContent activeSection={activeSection}/>

        </div>

        <div className="home-title">
            <p>Dev Porfolio</p>
        </div>

        <div className="homebottom-title">
            <p>LavaLab - I had to get in the Lab 😭 🔥 🔥 🔥</p>
        </div>


        


           
    </>
      
    );
}