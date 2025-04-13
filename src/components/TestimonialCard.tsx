
import React from 'react';

interface TestimonialCardProps {
  text: string;
  name: string;
  position: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ text, name, position }) => {
  return (
    <div className="bg-pink-50 rounded-xl p-4 max-w-md">
      <p className="text-gray-700 mb-4">{text}</p>
      <p className="text-purple-700 font-medium">{name}</p>
      <p className="text-gray-500 text-sm">{position}</p>
    </div>
  );
};

export default TestimonialCard;
