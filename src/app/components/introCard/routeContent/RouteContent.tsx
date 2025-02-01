'use client';
import {useRouter} from 'next/navigation'
import Image from 'next/image';
import './routecontent.css'


interface ActiveSectionProps {
    activeSection: string;
  }

export default function RouteContent({ activeSection }: ActiveSectionProps) {

    
  

    return (
      
    <>
        <div className='content-wrapper'>
            {activeSection === "bio" && (
            <div className="actualcontent">
            <h2>Bio</h2>
            <p>What's up!<br></br> <br></br>My name is Mo and you're currently stalking me!<br></br> <br></br>😆</p>
            </div>
            )}
            {activeSection === "skills" && (
                <div className="actualcontent">
                <h2>Skills</h2>
                <p>React/Next.js, <br></br> Node.js, Python, C++<br></br>Firebase, MongoDB, SQL<br></br>UI/UX - AI/ML</p>
                </div>
            )}
            {activeSection === "projects" && (
                <div className="actualcontent">
                <h2>Projects</h2>
                <p>- Superday<br></br>- Ride Share<br></br>- Dreamwalkers<br></br>- UFC Fight Predictor<br></br>- Chosn Relationships</p>
                </div>
            )}
            {activeSection === "resume" && (
                <div className="actualcontent">
                <h2>Resume</h2>
                <p>SWE @ Tip Top Technologies<br></br> <br></br>Full-stack Engineer Intern @ IBM<br></br> <br></br> Data Science Intern @ County of Marin</p>
                </div>
            )}
            
            
        </div>


           
    </>
      
    );
}