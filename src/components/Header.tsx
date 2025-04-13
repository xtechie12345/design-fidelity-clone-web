
import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Rocket, Package } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center pt-8 pb-4">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-bubblebit-lightPurple to-bubblebit-lightBlue mb-4" />
      <h1 className="text-4xl font-bold text-bubblebit-purple mb-1">BubblebitX</h1>
      <p className="text-gray-400 text-sm mb-6">Trust | Achieve | Lead</p>
      
      <div className="flex justify-center gap-4 w-full max-w-4xl px-4">
        <Link to="/about" className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
          <Info size={18} className="text-black" />
          <span className="font-medium">About us</span>
        </Link>
        <Link to="/services" className={`flex items-center gap-2 px-6 py-3 rounded-full border hover:bg-opacity-90 transition-colors duration-200 ${location.pathname === '/services' ? 'bg-bubblebit-purple text-white border-bubblebit-purple' : 'border-gray-300 hover:bg-gray-50'}`}>
          <Rocket size={18} className={location.pathname === '/services' ? 'text-white' : 'text-black'} />
          <span className="font-medium">Fast service</span>
        </Link>
        <Link to="/products" className={`flex items-center gap-2 px-6 py-3 rounded-full border hover:bg-opacity-90 transition-colors duration-200 ${location.pathname === '/products' ? 'bg-bubblebit-purple text-white border-bubblebit-purple' : 'border-gray-300 hover:bg-gray-50'}`}>
          <Package size={18} className={location.pathname === '/products' ? 'text-white' : 'text-black'} />
          <span className="font-medium">Our products</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
