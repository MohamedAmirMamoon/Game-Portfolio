'use client';

import { useRouter } from 'next/navigation';
import './project.css';
import ProjectCard from './projectCard/page';


export default function ProjectDisplay() {
    const router = useRouter();
    return (
        <>
            <div className="project-wrapper">
                <div className="project-card">
                    <p>Project Highlights</p>
                </div>

                <div card-container>
                    <ProjectCard img="/superdayproj.png" title="Superday" w={300} h={200} link="https://superdayprep.com/"/>
                    <ProjectCard img="/dreamwalkersproj.png" title="Dreamwalkers" w={300} h={200} link="https://github.com/MohamedAmirMamoon/Dreamwalkers"/>

                </div>
            

            </div>
            

            


        
        </>
        
    );
}