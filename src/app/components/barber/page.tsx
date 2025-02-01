'use client';

import { useRouter } from 'next/navigation';
import './barber.css';


export default function Barber() {
    const router = useRouter();
    return (
        <div>
            <div className="barber-title">
                <p>💈 Set Up a Haircut Appointment 💈</p>
            </div>
            <div className="calendly" onClick={() => window.open('https://calendly.com/mamoonmohamad0/30min', "_blank") }>
                <p>Calendly:</p>


                <p>Click Anywhere to Book</p>

                <h3>Calendly API coming soon!</h3>
            </div>


            
        </div>
    );
}

