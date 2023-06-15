import React from 'react';
import Clock from '../../../assets/icons/clock.svg'
import Marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import ContactCard from './ContactCard';

const ContactPage = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            description: 'Open 9:00 am to 5:00 everyday',
            icon: Clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Visit our location',
            description: 'Shalgariya Talbagan Pabna',
            icon: Marker,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'Contact us now',
            description: '+000 123 456789',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
    ]
    return (
        <div className='grid mt-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 text-white ' data-aos="flip-down">
            {
                cardData.map(card => <ContactCard key={card.id}
                    card={card}></ContactCard>)
            }
        </div>
    );
};

export default ContactPage;