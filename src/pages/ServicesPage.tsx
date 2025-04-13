
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6">
      <Header />
      <main className="py-6 md:py-8">
        <h2 className="text-xl md:text-2xl font-bold text-center">Call us on +91 9594965979</h2>
        <p className="text-center text-gray-600 mt-2 mb-6 md:mb-8 text-sm md:text-base">Below are the fantastic services we deliver for people</p>
        
        <ServiceCard 
          title="Hire Consultants"
          bulletPoints={[
            "We provide consultants for Small Scale and Big Scale company",
            "3+ yrs expertise in AI, Data Science, UI/UX, Software Development Blockchain, B2B, Sales, Marketing, Growth Manager",
            "Expert worked in service and product base companies",
            "Certified in various technological concepts."
          ]}
          priceRange="Price range for monthly basis : 20k - 25k"
          note="Before working lets have a meeting to discuss the structure of project/company"
        />
        
        <ServiceCard 
          title="Content Creation"
          bulletPoints={[
            "We provide content creator for small scale companies and just started companies",
            "We will provide expertise in Instagram reels and YouTube shorts to make your product or service more visible to people",
            "We will create a great story for your company that will reach lakh views to audience",
            "Per Instagram reel and YouTube short will cost Rs 500, total 5 reels and 5 shorts will be made for your brand every month"
          ]}
          priceRange="Price range per month : 10k"
          note="Before working lets have a meeting to discuss the position of brand"
        />
        
        <ServiceCard 
          title="College Projects"
          bulletPoints={[
            "We work on hard technical projects related to AR/VR, AI and Blockchain projects and depending upon features we will cost it",
            "We would also like to take incomplete projects if you are stuck with it",
            "Depend on the project we will charge, so don't worry we will get task done.",
            "Also we will provide the full research paper for your project with complete black book ready with all things filled."
          ]}
          priceRange="Price range per project : 10k - 15k"
          note="Before working lets have a meeting to discuss the position of project"
        />
        
        <ServiceCard 
          title="MVP Beta Product Building"
          bulletPoints={[
            "Whether you are just starting out your business idea, we will help you achieve it",
            "Depending upon your idea we will build online presence for getting atleast 1000+ users",
            "We will build it quickly to test it for people",
            "This service is open only for people who are financially strong and are willing to get things smartly done and bring it in front of people"
          ]}
          priceRange="Price range per project : 15k - 30k or 30k - 60k"
          note="Before working lets have a meeting to discuss the idea you want to build"
        />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
