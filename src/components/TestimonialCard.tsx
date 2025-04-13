
import React from 'react';

interface TestimonialCardProps {
  text: string;
  name: string;
  position: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, name, position }) => {
  return (
    <div className="bg-pink-50 rounded-lg md:rounded-xl p-3 md:p-4 max-w-md mx-auto">
      <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">{text}</p>
      <p className="text-purple-700 font-medium text-sm md:text-base">{name}</p>
      <p className="text-gray-500 text-xs md:text-sm">{position}</p>
    </div>
  );
};

export default TestimonialCard;
