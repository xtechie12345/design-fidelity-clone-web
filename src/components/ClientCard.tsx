
import React from 'react';

interface ClientCardProps {
  name: string;
}

const ClientCard: React.FC<ClientCardProps> = ({ name }) => {
  return (
    <div className="bg-gray-100 rounded-xl px-6 py-2 inline-block">
      <p className="font-medium">{name}</p>
    </div>
  );
};

export default ClientCard;
