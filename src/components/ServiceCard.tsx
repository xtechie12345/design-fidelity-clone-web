
import React from 'react';

interface ServiceCardProps {
  title: string;
  bulletPoints: string[];
  priceRange: string;
  note: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, bulletPoints, priceRange, note }) => {
  return (
    <div className="border border-gray-200 rounded-3xl p-6 mb-8">
      <h2 className="text-xl font-semibold text-bubblebit-purple text-center mb-6">{title}</h2>
      <ul className="list-disc list-inside mb-6 space-y-4">
        {bulletPoints.map((point, index) => (
          <li key={index} className="text-gray-600">
            {point.includes("will reach") ? (
              <>
                {point.split("will reach")[0]}
                <span className="text-bubblebit-purple font-medium">will reach</span>
                {point.split("will reach")[1]}
              </>
            ) : point.includes("who are financially strong") ? (
              <>
                {point.split("who are financially strong")[0]}
                <span className="text-bubblebit-purple font-medium">who are financially strong</span>
                {point.split("who are financially strong")[1]}
              </>
            ) : (
              point
            )}
          </li>
        ))}
      </ul>
      <p className="text-center font-medium mb-4">{priceRange}</p>
      <div className="flex justify-center mb-4">
        <button className="border border-gray-300 rounded-full px-6 py-2 text-sm hover:bg-gray-50 transition-colors duration-200">
          Schedule meeting
        </button>
      </div>
      <p className="text-xs text-center text-gray-500">{note}</p>
      {title === "MVP Beta Product Building" && (
        <p className="text-center text-red-500 text-sm font-medium mt-4">
          Money back guarantee if the your idea doesn't work
        </p>
      )}
    </div>
  );
};

export default ServiceCard;
