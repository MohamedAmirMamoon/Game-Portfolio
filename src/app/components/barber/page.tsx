'use client';

import './barber.css';

export default function Barber() {
    return (
        <div className="barber-page">
            <div className="barber-title">
                <p>💈 Set Up a Haircut Appointment 💈</p>
            </div>

            <div className="calendly">
                <div className="book">
                    <iframe
                        className="calendly-inline-widget"
                        src="https://calendly.com/mamoonmohamad0/30min"
                        title="Book a haircut appointment with Mo on Calendly"
                    />
                </div>
            </div>
        </div>
    );
}
