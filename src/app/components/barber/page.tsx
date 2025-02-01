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
            </div>
            
        </div>
    );
}