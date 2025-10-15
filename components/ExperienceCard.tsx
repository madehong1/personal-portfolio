import React from 'react';
import { Experience } from '../types';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const { role, company, period, location, description, technologies } = experience;

  return (
    <div className="ml-8 mb-8 relative">
      <div className="absolute -left-[30px] top-1 h-4 w-4 rounded-full bg-blue-500 border-4 border-white"></div>
      <div className="bg-white p-6 rounded-lg border border-gray-200 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:-translate-y-1">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h3 className="text-2xl font-bold text-gray-900">{role}</h3>
                <p className="text-blue-600 font-semibold">{company}</p>
            </div>
            <div className="text-right text-sm text-gray-500 flex-shrink-0 ml-4">
                <p>{period}</p>
                <p>{location}</p>
            </div>
        </div>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;