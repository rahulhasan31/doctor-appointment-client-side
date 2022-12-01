import React from 'react';
import Banner from './Banner/Banner';
import BannerTwo from './Banner/BannerTwo';
import ContactForm from './Contactform/ContactForm';
import ContactPage from './ContactPage/ContactPage';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import ServicesSection from './ServicesSection/ServicesSection';
import Testimonials from './Testimonials/Testimonials';


const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <ContactPage></ContactPage>
            <ServicesSection></ServicesSection>
            <BannerTwo></BannerTwo>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;