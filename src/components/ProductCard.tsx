
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="border border-gray-200 rounded-2xl md:rounded-3xl p-5 md:p-8 mb-6 md:mb-8 text-center">
      <div className="flex justify-center mb-3 md:mb-4">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-bubblebit-purple rounded-full"></div>
      </div>
      <h2 className="text-xl md:text-2xl font-semibold text-bubblebit-purple mb-3 md:mb-4">{title}</h2>
      <p className="text-gray-500 text-sm md:text-base mb-5 md:mb-6 max-w-lg mx-auto">{description}</p>
      <a 
        href={buttonLink} 
        className="inline-block bg-bubblebit-lightBlue hover:bg-opacity-80 text-bubblebit-purple px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-medium"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default ProductCard;
