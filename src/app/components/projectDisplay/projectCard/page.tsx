'use client';

import { useRouter } from 'next/navigation';
import './projcard.css';


export default function ProjectCard({ img , title, w, h }: { img: string; title: string; w: number; h: number; }) {
    const router = useRouter();
    return (
        <div className="project-item">
            <h4 >{title}</h4>

            <img src={img} alt="Picture of Project" width={w} height={h} />
            
            
        </div>
    );
}