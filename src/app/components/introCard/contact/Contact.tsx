'use client';

import React from 'react';
import './contact.css';

interface ContactProps {
    img: string;
    title: string;
    link: string;
    /** @deprecated Sizing lives in contact.css now so it can be fluid. Accepted
     *  (and ignored) so older call sites still type-check. */
    w?: number;
    h?: number;
}

const Contact = ({ img, title, link }: ContactProps) => {
    const isExternal = /^https?:/i.test(link);

    return (
        <a
            className="contact-link"
            /* Drives the per-network hover colour in contact.css. Derived from
               `title` so call sites don't have to pass a second prop. */
            data-social={title.toLowerCase()}
            href={link}
            title={title}
            aria-label={title}
            {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
            <img src={img} alt="" className="contact-image" aria-hidden="true" />
        </a>
    );
};

export default Contact;
