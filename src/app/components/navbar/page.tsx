'use client';

import './navbar.css';
import { usePathname } from 'next/navigation';
import { useTransitionRouter } from 'next-view-transitions';

/* Left-to-right order of the nav, used to decide which way pages slide.
   Navigating rightwards slides forward; leftwards slides back. Keep this in
   sync with the button order below, including /components/resume. */
const ORDER = [
    '/components/introCard',
    '/components/projectDisplay',
    '/components/barber',
    '/components/resume',
    '/components/me',
];

export default function Navbar() {
    const router = useTransitionRouter();
    const pathname = usePathname();

    function go(href: string) {
        if (href === pathname) return;

        /* Set the direction on <html> synchronously, BEFORE starting the
           navigation — the CSS in globals.css reads it to pick which pair of
           slide keyframes to run. `/` renders the same page as introCard, so
           treat it as index 0. */
        const from = pathname === '/' ? 0 : ORDER.indexOf(pathname);
        const to = ORDER.indexOf(href);
        const isBack = from !== -1 && to !== -1 && to < from;
        document.documentElement.dataset.nav = isBack ? 'back' : 'forward';

        router.push(href);
    }

    /* <button> gets none of the automatic prefetching <Link> does, so without
       this the incoming page can stall on its RSC fetch and the slide starts
       late. Warming the route on hover/focus keeps the animation smooth. */
    const warm = (href: string) => ({
        onMouseEnter: () => router.prefetch(href),
        onFocus: () => router.prefetch(href),
    });

    return (
        <div className="navbar-wrapper">
            <button type="button" {...warm('/components/introCard')} onClick={() => go('/components/introCard')}>Home</button>
            <button type="button" {...warm('/components/projectDisplay')} onClick={() => go('/components/projectDisplay')}>Projects</button>
            <button type="button" {...warm('/components/barber')} onClick={() => go('/components/barber')}>Barber</button>
            <button type="button" {...warm('/components/resume')} onClick={() => go('/components/resume')}>Resume</button>
            <button type="button" {...warm('/components/me')} onClick={() => go('/components/me')}>Me</button>
        </div>
    );
}
