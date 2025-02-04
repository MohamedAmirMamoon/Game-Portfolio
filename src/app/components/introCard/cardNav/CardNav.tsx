'use client';
import {useRouter} from 'next/navigation'
import Image from 'next/image';
import './cardnav.css'


interface CardNavProps {
    img: string;
    title: string;
    w: number;
    h: number;
}

export default function CardNav({ img , title, w, h }: CardNavProps) {
    

    return (
      
        <>
            <div className='pixel-button' >
                <img src={img} alt="Picture of the author" width={w} height={h} />
                <p>{title}</p>
                
            </div>

            
        </>
      
    );
}