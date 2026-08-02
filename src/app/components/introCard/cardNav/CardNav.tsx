'use client';
import './cardnav.css'


interface CardNavProps {
    img: string;
    title: string;
    /** Intrinsic pixel size of the icon — used as the aspect-ratio hint only.
     *  The rendered size is driven by CSS (`.pixel-button img`) so it can be fluid. */
    w: number;
    h: number;
    active?: boolean;
    onSelect?: () => void;
}

export default function CardNav({ img, title, w, h, active = false, onSelect }: CardNavProps) {

    return (
        <button
            type="button"
            className={`pixel-button${active ? ' is-active' : ''}`}
            onClick={onSelect}
            aria-pressed={active}
        >
            <img src={img} alt="" width={w} height={h} aria-hidden="true" />
            <p>{title}</p>
        </button>
    );
}
