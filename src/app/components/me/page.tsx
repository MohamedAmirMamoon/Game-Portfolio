'use client';

import { useRouter } from 'next/navigation';
import './mem.css';

export default function Me() {
    const router = useRouter();
    
    const images = [
        "/images/photo1.jpg",
        "/images/photo2.jpg",
        "/images/photo3.jpg",
        "/images/photo4.jpg",
        "/images/photo5.jpg",
        "/images/photo6.jpg",
        "/images/photo7.jpg",
        "/images/photo8.jpg",
    ];

    return (
        <div>
            <div className="me-title">
                <p>Memories</p>
            </div>
            
            <div className="pictures">

                {/* 📌 Collage Image Grid */}
                <div className="image-grid">
                    {images.map((src, index) => (
                        <img key={index} src={src} alt={`Memory ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}