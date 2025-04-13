
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ClientCard from '../components/ClientCard';
import TestimonialCard from '../components/TestimonialCard';
import { Twitter, Linkedin, Instagram, Calendar } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Header />
      <main className="py-8">
        <h2 className="text-2xl font-bold text-center">Call us on +91 9594965979</h2>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 rounded-2xl p-6">
            <p className="text-gray-700">
              We are a young, ready to go technical talented team of people, where we take any work passionately. Ping us any time here to make your solutions and businesses stand out and make your <span className="text-purple-600 font-medium">dream exceptional</span>!<br/>
              <span className="text-purple-600 font-medium">(Let's do it)</span>
            </p>
          </div>
          <div className="bg-blue-500 text-white rounded-2xl p-6">
            <p className="mb-4">Visit us below and we reply asap</p>
            <div className="flex gap-4 mb-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Twitter size={16} className="text-blue-500" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Linkedin size={16} className="text-blue-500" />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Instagram size={16} className="text-blue-500" />
              </div>
            </div>
            <div>
              <button className="bg-white text-blue-500 rounded-lg py-2 w-full flex items-center justify-center gap-2">
                <Calendar size={16} />
                <span>Meeting on Calendly</span>
              </button>
              <p className="text-xs mt-2 text-center text-blue-100">Schedule meeting / drop us a mail at: bubblebitx@gmail.com</p>
            </div>
          </div>
        </div>
        
        {/* Our Clients Section */}
        <div className="mt-12 text-center">
          <h3 className="inline-block text-xl font-medium mb-6 relative">
            <span className="bg-pink-100 rounded-full w-6 h-6 absolute -left-8 top-0"></span>
            Our clients
            <span className="bg-pink-100 rounded-full w-6 h-6 absolute -right-8 top-0"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full mb-4"></div>
              <ClientCard name="Innovative Cursor" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
              <ClientCard name="DigiTrills" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
              <ClientCard name="Wildradis" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
              <ClientCard name="Shiven Infotech" />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mb-4"></div>
              <ClientCard name="TechmingleX" />
            </div>
          </div>
        </div>
        
        {/* Technical Work Section */}
        <div className="mt-12 text-center">
          <h3 className="inline-block text-xl font-medium mb-8 relative">
            <span className="bg-pink-100 rounded-full w-6 h-6 absolute -left-8 top-0"></span>
            Technical work
            <span className="bg-pink-100 rounded-full w-6 h-6 absolute -right-8 top-0"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="bg-gray-200 rounded-lg w-full h-60"></div>
              <p className="mt-2 text-gray-700">Farmer crm for data analysis</p>
            </div>
            <div>
              <div className="bg-purple-500 rounded-lg w-full h-60 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="w-12 h-12 bg-white rounded"></div>
                    <div className="w-12 h-12 bg-white rounded"></div>
                  </div>
                  <div className="w-12 h-12 bg-yellow-500 rounded-full"></div>
                  <p className="mt-4 text-white">BuilderFi</p>
                </div>
              </div>
              <p className="mt-2 text-gray-700">Logo design for BuilderFi</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div>
              <div className="bg-gray-200 rounded-lg w-full h-60"></div>
              <p className="mt-2 text-gray-700">Apps designed for movie, ecommerce and coffee</p>
            </div>
            <div>
              <div className="bg-gray-200 rounded-lg w-full h-60"></div>
              <p className="mt-2 text-gray-700">Apps designed for startup - QuickBus</p>
            </div>
          </div>
        </div>
        
        {/* Our Techstack Section */}
        <div className="mt-12 text-center">
          <h3 className="inline-block text-xl font-medium mb-6 relative">
            <span className="bg-pink-100 rounded-full w-6 h-6 absolute -left-8 top-0"></span>
            Our techstack
            <span className="bg-pink-100 rounded-full w-6 h-6 absolute -right-8 top-0"></span>
          </h3>
          
          <p className="text-gray-600 mb-4">We work one various technologies and we have really exceptional team that will work for you, no matter in which condition you are, our team will work onsite, hybrid and even on remote basis.</p>
          <p className="font-medium mb-4">Our technical team are experienced in</p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">UI/UX</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Artificial Intelligence</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Blockchain systems</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">CRM ERP Systems</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">App and Website Builders</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Designing Graphics</span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Brand Building for Startups and Small Companies</span>
          </div>
          
          <div className="relative h-40 mb-12">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
              <div className="bg-teal-400 rounded-lg px-6 py-2 flex items-center justify-between gap-8 mb-4">
                <div className="text-center">
                  <p className="font-bold text-white">8.3+</p>
                  <p className="text-xs text-white">Rating</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white">8+</p>
                  <p className="text-xs text-white">Projects</p>
                </div>
                <div className="text-center">
                  <p className="font-bold text-white">1.2k+</p>
                  <p className="text-xs text-white">LinkedIn followers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-12 text-center">
          <h3 className="inline-block text-xl font-medium mb-8 relative">
            <span className="bg-pink-100 rounded-full w-6 h-6 absolute -left-8 top-0"></span>
            Testimonials
            <span className="bg-pink-100 rounded-full w-6 h-6 absolute -right-8 top-0"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
