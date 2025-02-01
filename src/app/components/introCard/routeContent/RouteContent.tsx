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
            <p>What's up jit, my name is Mo and you're currently stalking me! 😆</p>
            </div>
            )}
            {activeSection === "skills" && (
                <div className="actualcontent">
                <h2>Skills</h2>
                <p>React/Next.js, Node.js, Python, Firebase, C++, UI/UX, Node.js, Python, AI/ML.</p>
                </div>
            )}
            {activeSection === "projects" && (
                <div className="actualcontent">
                <h2>Projects</h2>
                <p>Superday, Ride Share, Dreamwalkers, Momentum, and more!</p>
                </div>
            )}
            {activeSection === "resume" && (
                <div className="actualcontent">
                <h2>Resume</h2>
                <p>Software Engineer Intern @ Tip Top Technologies, SWE Intern @ Mindwave AI.</p>
                </div>
            )}
            
            
        </div>


           
    </>
      
    );
}