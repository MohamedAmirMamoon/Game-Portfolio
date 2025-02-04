'use client';

import { useRouter } from 'next/navigation';
import './project.css';
import ProjectCard from './projectCard/ProjectDisplay';

export default function ProjectDisplay() {
    const router = useRouter();
    
    return (
        <div className="project-wrapper">
            <h1 className="project-title">Project Timeline</h1>
            
            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">January 2025</div>
                        <ProjectCard 
                            img="/superdayproj.png"
                            title="Superday"
                            w={300}
                            h={200}
                            link="https://superdayprep.com/"
                        />
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">March 2024</div>
                        <ProjectCard 
                            img="/dreamwalkersproj.png"
                            title="Dreamwalkers"
                            w={300}
                            h={200}
                            link="https://github.com/MohamedAmirMamoon/Dreamwalkers"
                        />
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">October 2023</div>
                        <ProjectCard 
                            img="/masjidrouteproj.png"
                            title="Masjid Route"
                            w={300}
                            h={200}
                            link="https://github.com/MohamedAmirMamoon/MasjidRoute"
                        />
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">March 2023</div>
                        <ProjectCard 
                            img="/chosnproj.png"
                            title="Chosn Relationships"
                            w={300}
                            h={200}
                            link="https://www.chosn.io/"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}