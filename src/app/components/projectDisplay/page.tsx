'use client';

import './project.css';
import ProjectCard from './projectCard/ProjectDisplay';

export default function ProjectDisplay() {
    return (
        <div className="project-wrapper">
            <h1 className="project-title">Project Timeline</h1>
            
            <div className="timeline">
                {/* ---------------------------------------------------------------
                    PLACEHOLDERS - TODO: replace with the real details.
                    The three entries below are provisional. For each one still
                    needs: the real date, the live/repo `link`, and a screenshot
                    dropped into public/ wired up as `img`. Until both `img` and
                    `link` are supplied, ProjectCard renders a non-interactive
                    "Coming soon" tile (see projectCard/ProjectDisplay.tsx).
                    Dates must stay in descending order, newest first.
                   --------------------------------------------------------------- */}
                <div className="timeline-item">
                    <div className="timeline-content">
                        {/* PLACEHOLDER date */}
                        <div className="timeline-date">June 2026</div>
                        <ProjectCard
                            img="/poketoken.svg"
                            title="Poke-Token"
                            w={300}
                            h={200}
                            link="https://github.com/MohamedAmirMamoon/poketoken"
                        />
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        {/* PLACEHOLDER date */}
                        <div className="timeline-date">February 2026</div>
                        <ProjectCard
                            title="Mastery"
                            w={300}
                            h={200}
                        />
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        {/* PLACEHOLDER date */}
                        <div className="timeline-date">September 2025</div>
                        <ProjectCard
                            title="World Cup Predictor"
                            w={300}
                            h={200}
                        />
                    </div>
                </div>
                {/* ------------------- end placeholders ------------------- */}

                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">January 2025</div>
                        <ProjectCard 
                            img="/superdayproj.png"
                            title="Superday"
                            w={300}
                            h={200}
                            link="https://superdayprep.com/"
                        />
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">March 2024</div>
                        <ProjectCard 
                            img="/dreamwalkersproj.png"
                            title="Dreamwalkers"
                            w={300}
                            h={200}
                            link="https://dreamwalkers-w1ca.vercel.app/"
                        />
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">October 2023</div>
                        <ProjectCard 
                            img="/masjidrouteproj.png"
                            title="Masjid Route"
                            w={300}
                            h={200}
                            link="https://github.com/MohamedAmirMamoon/MasjidRoute"
                        />
                    </div>
                </div>

                <div className="timeline-item">
                    <div className="timeline-content">
                        <div className="timeline-date">March 2023</div>
                        <ProjectCard 
                            img="/chosnproj.png"
                            title="Chosn Relationships"
                            w={300}
                            h={200}
                            link="https://www.chosn.io/"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}