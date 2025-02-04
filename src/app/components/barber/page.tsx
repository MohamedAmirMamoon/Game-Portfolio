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
            <div className="calendly">
                <p>Calendly:</p>


                <p>Book a Haircut!!!</p>


                <div className="book">
                    <iframe 
                        className="calendly-inline-widget"
                        src="https://calendly.com/mamoonmohamad0/30min" 
                        width="700" 
                        height="560" 
                        title="Example Website"
                    />
                </div>
            </div>


            
        </div>
    );
}

