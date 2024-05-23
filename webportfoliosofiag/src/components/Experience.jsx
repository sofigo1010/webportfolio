import React, { useState } from 'react';

const experiences = [
  {
    title: 'COO Divino Seas Guatemala',
    date: 'Aug 2021 - now',
    description: 'I oversee sales, manage social media, handle physical points of sale, inventory, and customer service..',
  },
  {
    title: 'Machinery and Expense Management Specialist',
    date: 'May 2022 - Aug 2023',
    description: 'Responsible for monitoring truck movements, calculating daily expenses and driver payments, and verifying daily rental income.',
  },
];

const ExperienceItem = ({ title, date, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border rounded p-6 mb-6 w-full">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-left">{title}</h3>
          <p className="text-sm text-white text-left">{date}</p>
        </div>
        <button
          className="text-white px-2 py-1 rounded hover:scale-110 transition"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && (
        <div className="text-white text-sm mt-4 text-center">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experiencia" className="p-6 flex flex-col items-center">
      <h2 className="text-2xl uppercase mb-6">general work Experience</h2>
      <div className="grid grid-cols-1 w-full md:grid-cols-1 lg:grid-cols-1 gap-6">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            title={experience.title}
            date={experience.date}
            description={experience.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
