'use client';

import { useRouter } from 'next/navigation';
import './projcard.css';


export default function ProjectCard({ img , title, w, h, link }: { img: string; title: string; w: number; h: number; link: string }) {
    const router = useRouter();
    return (
        <div className="project-item">
            <h4 >{title}</h4>

            <img src={img} alt="Picture of Project" width={w} height={h} />

            <div>
                <button onClick={() => window.open(link, "_blank")}>Learn More</button>

            </div>

            
            
            
        </div>
    );
}