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
            <button onClick={() => window.open('https://docs.google.com/document/d/1nyd4RCNpDXveD-l6aKNQyvKQi3KfjtLsfLNrc7LmwSQ/edit?tab=t.0', "_blank")}> Resume</button>
        </div>
    );
}

