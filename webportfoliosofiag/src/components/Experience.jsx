import React, { useState } from 'react';

const experiences = [
  {
    title: 'Desarrollador Web',
    date: 'Enero 2020 - Junio 2022',
    description: 'Trabajé en la creación de aplicaciones web utilizando tecnologías modernas como React, Node.js y MongoDB.',
  },
  {
    title: 'Ingeniero de Software',
    date: 'Julio 2022 - Presente',
    description: 'Desarrollé y mantuve sistemas de software de alta calidad en un entorno de equipo ágil, utilizando Java y Spring Boot.',
  },
  {
    title: 'Freelancer',
    date: 'Agosto 2019 - Diciembre 2019',
    description: 'Realicé proyectos independientes para diferentes clientes, centrándome en el desarrollo de aplicaciones web personalizadas.',
  },
];

const ExperienceItem = ({ title, date, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border rounded p-4 mb-4 bg-gray-800">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-300">{date}</p>
        </div>
        <button
          className="text-white px-2 py-1 rounded bg-blue-500"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? '-' : '+'}
        </button>
      </div>
      {isExpanded && (
        <div className="text-gray-300 text-sm mt-4">
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

const Experience = () => {
  return (
    <section id= className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-white">Experiencia</h1>
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={index}
          title={experience.title}
          date={experience.date}
          description={experience.description}
        />
      ))}
    </section>
  );
};

export default Experienc