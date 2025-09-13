'use client';

import Image from "next/image";
import './navbar.css';
import { useRouter } from 'next/navigation';



export default function Navbar() {

    const router = useRouter();
    
    

    return (
        <div className="navbar-wrapper">
            <button onClick={() => router.push('/components/introCard')}>Home</button>
            <button onClick={() => router.push('/components/projectDisplay')}>Projects</button>
            <button onClick={() => router.push('/components/barber')}>Barber</button>
            <button onClick={() => window.open('https://drive.google.com/file/d/1TIySa9VNew73qhI_jsrR6mmIBEYCAlM7/view?usp=sharing', "_blank")}> Resume</button>
            <button onClick={() => router.push('/components/me')}> Me</button>
        </div>
    );
}

