'use client';
import './routecontent.css'


interface ActiveSectionProps {
    activeSection: string;
}

export default function RouteContent({ activeSection }: ActiveSectionProps) {

    return (
        <div className='content-wrapper'>
            {activeSection === "bio" && (
                <div className="actualcontent">
                    <h2>Bio</h2>
                    <p>What&apos;s up!<br /><br />My name is Amir and you&apos;re currently stalking me!<br /><br />😆</p>
                </div>
            )}
            {activeSection === "skills" && (
                <div className="actualcontent">
                    <h2>Skills</h2>
                    <p>Cooking food<br />Footy<br />Hoops<br />Fragrances<br />Trip planning<br />Travel</p>
                </div>
            )}
            {activeSection === "projects" && (
                <div className="actualcontent">
                    <h2>Projects - access in nav</h2>
                    <p>- Superday<br />- Ride Share<br />- Dreamwalkers<br />- UFC Fight Predictor<br />- Chosn Relationships</p>
                </div>
            )}
            {activeSection === "resume" && (
                <div className="actualcontent">
                    <h2>Experience</h2>
                    <p>SDE @ Amazon<br /><br />SWE Intern @ Ticketmaster<br /><br />SWE @ County of Marin</p>
                </div>
            )}
        </div>
    );
}
