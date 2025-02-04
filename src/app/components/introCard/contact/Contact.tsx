'use client';

import React from 'react';
import './Contact.css';

const Contact = ({ img, title, w, h, link }: { img: string; title: string; w: number; h: number; link: string }) => {
    return (
        <img 
            src={img} 
            alt={title}
            className="contact-image"
            style={{ 
                width: `${w}px`, 
                height: `${h}px` 
            }}
            onClick={() => window.open(link, "_blank")}
            title={title}
        />
    );
};

export default Contact;