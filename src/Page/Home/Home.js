import React from "react";
import OurDoctors from "../../NewSections/OurDoctors/OurDoctors";
import OurTeam from "../../NewSections/OurTeam/OurTeam";
import ExtraBanner from "../ExtraBanner";
import Banner from "./Banner/Banner";
import BannerTwo from "./Banner/BannerTwo";
import ContactForm from "./Contactform/ContactForm";
import ContactPage from "./ContactPage/ContactPage";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import ServicesSection from "./ServicesSection/ServicesSection";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div className=" max-w-[1440px] mx-auto">
      <ExtraBanner></ExtraBanner>
      <Banner></Banner>
      <ContactPage></ContactPage>
      <ServicesSection></ServicesSection>
      <OurDoctors></OurDoctors>
      <BannerTwo></BannerTwo>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <OurTeam></OurTeam>
      <ContactForm></ContactForm>
    </div>
  );
};

export default Home;
