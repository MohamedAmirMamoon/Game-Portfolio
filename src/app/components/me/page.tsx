'use client';

import { useEffect, useState } from 'react';
import './mem.css';

/* Raw filenames straight from public/images — encodeURI() below handles the
   ones with spaces and parentheses, so don't hand-escape them here. */
const PHOTOS = [
    'photo1.jpg',
    'photo2.jpg',
    'photo3.jpg',
    'photo4.jpg',
    'photo5.jpg',
    'photo6.jpg',
    'photo7.jpg',
    'photo8.jpg',
    'DSCF7891.jpeg',
    'IMG_0263 copy.JPG',
    'IMG_2636 copy.jpg',
    'IMG_3578 (1).JPG',
    'IMG_4603.jpeg',
    'IMG_5494.jpeg',
    'IMG_6650.JPG',
    'IMG_6678.JPG',
    '61d878ee-4ba1-4a81-8543-3b9ceeca8dde.png',
    'IMG_0298.jpg'
];

const SRCS = PHOTOS.map((name) => encodeURI(`/images/${name}`));

/* Fisher-Yates on a copy — never shuffle the module-level array in place. */
function shuffled<T>(items: readonly T[]): T[] {
    const out = [...items];
    for (let i = out.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [out[i], out[j]] = [out[j], out[i]];
    }
    return out;
}

export default function Me() {
    /* Deliberately NOT shuffled in the initial state: the server and client
       would each pick a different order and React would throw a hydration
       mismatch. Start from the fixed order, then reshuffle once on mount so
       every visit gets a fresh arrangement. */
    const [order, setOrder] = useState(SRCS);

    useEffect(() => {
        setOrder(shuffled(SRCS));
    }, []);

    return (
        <div className="me-page">
            <div className="me-title">
                <p>Memories</p>
            </div>

            <div className="pictures">

                {/* 📌 Collage image grid — order is reshuffled on every visit. */}
                <div className="image-grid">
                    {order.map((src, index) => (
                        <img
                            key={src}
                            src={src}
                            alt={`Memory ${index + 1}`}
                            loading={index < 4 ? 'eager' : 'lazy'}
                            decoding="async"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
