'use client';
import {useRouter} from 'next/navigation'
import Image from 'next/image';
import './contact.css'



export default function Contact({ img , title, w, h, link }: { img: string; title: string; w: number; h: number; link: string }) {
    

    return (
      
        <>
            <div className='contact-button' onClick={() => window.open(link, "_blank")}>
                <img src={img} width={w} height={h} />
                <p>{title}</p>
                
            </div>

            
        </>
      
    );
}