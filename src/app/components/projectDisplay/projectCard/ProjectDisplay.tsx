'use client';

import './projcard.css';

/*
 * `img` and `link` are optional so a project can be listed on the timeline
 * before its screenshot / URL exists. When either one is missing the card
 * renders a non-interactive "Coming soon" tile instead of a broken <img> or a
 * dead link. The tile occupies the same aspect-ratio 3 / 2 box as a real
 * screenshot, so card geometry is identical either way.
 */
type ProjectCardProps = {
    title: string;
    w: number;
    h: number;
    img?: string;
    link?: string;
    /* Force the placeholder tile even if an img/link happens to be supplied. */
    comingSoon?: boolean;
};

export default function ProjectCard({ img, title, w, h, link, comingSoon = false }: ProjectCardProps) {
    const isPlaceholder = comingSoon || !img || !link;

    return (
        <div className="project-item">
            <h4 className="project-title-text">{title}</h4>
            {isPlaceholder ? (
                /* No link and no cursor: pointer - nothing here is clickable yet. */
                <div className="image-placeholder" role="img" aria-label={`${title} - screenshot coming soon`}>
                    <span className="image-placeholder-badge">WIP</span>
                    <span className="image-placeholder-text">Coming soon</span>
                </div>
            ) : (
                <a
                    className="image-container"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open the ${title} project in a new tab`}
                >
                    {/* width/height are intrinsic hints only - CSS makes the image fluid. */}
                    <img src={img} alt={`Screenshot of the ${title} project`} width={w} height={h} />
                </a>
            )}
        </div>
    );
}
