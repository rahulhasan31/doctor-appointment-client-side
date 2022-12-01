import React from 'react';

const ContactCard = ({card}) => {
    const {name, description,icon , bgClass}=card
    return (
        <div>
            <div className={`card md:card-side bg-base-100 shadow-xl ${bgClass}`}>
                <figure><img className='p-4' src={icon} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactCard;