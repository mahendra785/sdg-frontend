// pages/ContactUsPage.js
import React from "react";
import ContactUs from "../components/contactus";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between h-[100vh]">
      <Navbar />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default ContactUsPage;
