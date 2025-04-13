
import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, buttonText, buttonLink }) => {
  return (
    <div className="border border-gray-200 rounded-3xl p-8 mb-8 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-12 h-12 bg-bubblebit-purple rounded-full"></div>
      </div>
      <h2 className="text-2xl font-semibold text-bubblebit-purple mb-4">{title}</h2>
      <p className="text-gray-500 mb-6 max-w-lg mx-auto">{description}</p>
      <a 
        href={buttonLink} 
        className="inline-block bg-bubblebit-lightBlue hover:bg-opacity-80 text-bubblebit-purple px-8 py-3 rounded-full font-medium"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default ProductCard;
