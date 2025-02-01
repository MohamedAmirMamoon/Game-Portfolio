'use client';
import {useRouter} from 'next/navigation'
import Image from 'next/image';
import './cardnav.css'



export default function CardNav({ img , title, w, h }: { img: string; title: string; w: number; h: number; }) {
    

    return (
      
        <>
            <div className='pixel-button' >
                <img src={img} alt="Picture of the author" width={w} height={h} />
                <p>{title}</p>
                
            </div>

            
        </>
      
    );
}