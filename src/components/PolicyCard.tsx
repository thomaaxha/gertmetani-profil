import React from 'react';
import { Link } from 'react-router-dom';

interface PolicyCardProps {
  title: string;
  description: string;
}

const PolicyCard: React.FC<PolicyCardProps> = ({ title, description }) => {
  const slug = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <Link to={`/policies/${slug}`} className="block">
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-800 hover:scale-102 transform">
        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-green-800">{title}</h3>
        <p className="text-sm md:text-base text-gray-700">{description}</p>
        <div className="mt-3 md:mt-4 text-green-700 font-medium">Lexo më shumë →</div>
      </div>
    </Link>
  );
};

export default PolicyCard;