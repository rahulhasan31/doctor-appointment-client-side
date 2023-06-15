import React from 'react';
import Fluoride from '../../../assets/images/fluoride.png'
import Cavity from '../../../assets/images/cavity.png'
import Teeth from '../../../assets/images/whitening.png'
import ServicesCard from './ServicesCard';
const ServicesSection = () => {
    const cardData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Open 9:00 am to 5:00 everyday',
            icon:Fluoride ,
           
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Shalgariya Talbagan Pabna',
            icon:Cavity ,
           
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: '+000 123 456789',
            icon:Teeth ,
            
        },
    ]
    return (
      
        <div className='mt-16' data-aos="zoom-in-up">
            <div className='text-center'>
                <h3 className='text-primary uppercase font-semibold text-xl'>OUR SERVICES</h3>
                <h2 className='text-3xl font-medium'>Services We Provide</h2>
            </div>
              <div className='grid mt-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 '>
            
            {
                cardData.map(card=> <ServicesCard 
                key={card.id}
                card={card}
                ></ServicesCard>)
            }
        </div>
        </div>
    );
};

export default ServicesSection;