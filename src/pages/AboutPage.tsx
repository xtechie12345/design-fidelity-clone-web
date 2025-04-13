
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientCard from '../components/ClientCard';
import TestimonialCard from '../components/TestimonialCard';
import { Twitter, Linkedin, Instagram, Calendar } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6">
      <Header />
      <main className="py-6 md:py-8">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6">Call us on +91 9594965979</h2>
        
        <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6">
            <p className="text-gray-700 text-sm md:text-base">
              We are a young, ready to go technical talented team of people, where we take any work passionately. Ping us any time here to make your solutions and businesses stand out and make your <span className="text-purple-600 font-medium">dream exceptional</span>!<br/>
              <span className="text-purple-600 font-medium">(Let's do it)</span>
            </p>
          </div>
          <div className="bg-blue-500 text-white rounded-xl md:rounded-2xl p-4 md:p-6">
            <p className="mb-3 md:mb-4 text-sm md:text-base">Visit us below and we reply asap</p>
            <div className="flex gap-3 md:gap-4 mb-3 md:mb-4">
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center">
                <Twitter size={14} className="text-blue-500" />
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center">
                <Linkedin size={14} className="text-blue-500" />
              </div>
              <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white flex items-center justify-center">
                <Instagram size={14} className="text-blue-500" />
              </div>
            </div>
            <div>
              <button className="bg-white text-blue-500 rounded-lg py-1.5 md:py-2 text-sm md:text-base w-full flex items-center justify-center gap-1 md:gap-2">
                <Calendar size={14} className="md:size-16" />
                <span>Meeting on Calendly</span>
              </button>
              <p className="text-xs mt-1 md:mt-2 text-center text-blue-100">Schedule meeting / drop us a mail at: bubblebitx@gmail.com</p>
            </div>
          </div>
        </div>
        
        {/* Our Clients Section */}
        <div className="mt-8 md:mt-12 text-center">
          <h3 className="inline-block text-lg md:text-xl font-medium mb-4 md:mb-6 relative">
            <span className="bg-pink-100 rounded-full w-4 h-4 md:w-6 md:h-6 absolute -left-6 md:-left-8 top-0"></span>
            Our clients
            <span className="bg-pink-100 rounded-full w-4 h-4 md:w-6 md:h-6 absolute -right-6 md:-right-8 top-0"></span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-500 rounded-full mb-3 md:mb-4"></div>
              <ClientCard name="Innovative Cursor" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full mb-3 md:mb-4"></div>
              <ClientCard name="DigiTrills" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full mb-3 md:mb-4"></div>
              <ClientCard name="Wildradis" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12 max-w-md mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full mb-3 md:mb-4"></div>
              <ClientCard name="Shiven Infotech" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 rounded-full mb-3 md:mb-4"></div>
              <ClientCard name="TechmingleX" />
            </div>
          </div>
        </div>
        
        {/* Technical Work Section */}
        <div className="mt-8 md:mt-12 text-center">
          <h3 className="inline-block text-lg md:text-xl font-medium mb-6 md:mb-8 relative">
            <span className="bg-pink-100 rounded-full w-4 h-4 md:w-6 md:h-6 absolute -left-6 md:-left-8 top-0"></span>
            Technical work
            <span className="bg-pink-100 rounded-full w-4 h-4 md:w-6 md:h-6 absolute -right-6 md:-right-8 top-0"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
            <div>
              <div className="bg-gray-200 rounded-lg w-full h-40 md:h-60"></div>
              <p className="mt-2 text-gray-700 text-sm md:text-base">Farmer crm for data analysis</p>
            </div>
            <div>
              <div className="bg-purple-500 rounded-lg w-full h-40 md:h-60 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="grid grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded"></div>
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-white rounded"></div>
                  </div>
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-500 rounded-full"></div>
                  <p className="mt-3 md:mt-4 text-white text-sm md:text-base">BuilderFi</p>
                </div>
              </div>
              <p className="mt-2 text-gray-700 text-sm md:text-base">Logo design for BuilderFi</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
            <div>
              <div className="bg-gray-200 rounded-lg w-full h-40 md:h-60"></div>
              <p className="mt-2 text-gray-700 text-sm md:text-base">Apps designed for movie, ecommerce and coffee</p>
            </div>
            <div>
              <div className="bg-gray-200 rounded-lg w-full h-40 md:h-60"></div>
              <p className="mt-2 text-gray-700 text-sm md:text-base">Apps designed for startup - QuickBus</p>
            </div>
          </div>
        </div>
        
        {/* Our Techstack Section */}
        <div className="mt-8 md:mt-12 text-center">
          <h3 className="inline-block text-lg md:text-xl font-medium mb-4 md:mb-6 relative">
            <span className="bg-pink-100 rounded-full w-4 h-4 md:w-6 md:h-6 absolute -left-6 md:-left-8 top-0"></span>
            Our techstack
            <span className="bg-pink-100 rounded-full w-4 h-4 md:w-6 md:h-6 absolute -right-6 md:-right-8 top-0"></span>
          </h3>
          
          <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base px-2">We work one various technologies and we have really exceptional team that will work for you, no matter in which condition you are, our team will work onsite, hybrid and even on remote basis.</p>
          <p className="font-medium mb-3 md:mb-4 text-sm md:text-base">Our technical team are experienced in</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8 px-2">
            <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">UI/UX</span>
            <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Artificial Intelligence</span>
            <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Blockchain systems</span>
            <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">CRM ERP Systems</span>
            <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">App and Website Builders</span>
            <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Designing Graphics</span>
            <span className="bg-purple-100 text-purple-700 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">Brand Building for Startups</span>
          </div>
          
          <div className="relative h-32 md:h-40 mb-8 md:mb-12">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs md:max-w-sm">
              <div className="bg-teal-400 rounded-lg px-4 md:px-6 py-2 flex items-center justify-between gap-4 md:gap-8 mb-4">
                <div className="text-center">
                  <p className="font-bold text-white text-sm md:text-base">8.3+</p>
                  <p className="text-xs text-white">Rating</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white text-sm md:text-base">8+</p>
                  <p className="text-xs text-white">Projects</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white text-sm md:text-base">1.2k+</p>
                  <p className="text-xs text-white">LinkedIn followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-8 md:mt-12 text-center">
          <h3 className="inline-block text-lg md:text-xl font-medium mb-6 md:mb-8 relative">
            <span className="bg-pink-100 rounded-full w-4 h-4 md:w-6 md:h-6 absolute -left-6 md:-left-8 top-0"></span>
            Testimonials
            <span className="bg-pink-100 rounded-full w-4 h-4 md:w-6 md:h-6 absolute -right-6 md:-right-8 top-0"></span>
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <TestimonialCard 
              text="Smart people with smart work. Easy to communicate and things got fastly done."
              name="Shawn Almeida"
              position="Co-founder of Inv. Cursor"
            />
            <TestimonialCard 
              text="Best technical team ever found. Our work got better and results were excellent."
              name="Dinesh & Mohit"
              position="Co-founder of Digitrills"
            />
            <TestimonialCard 
              text="Great company to work, got to learn many things and had a great support from everyone."
              name="Prathamesh Aghao"
              position="Ex-employee of BubblebitX"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
