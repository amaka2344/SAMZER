import React, { useState } from 'react';
import Image from 'next/image';
import image3 from '../public/image4.jpeg'
const Services = () => {
  const services = [
    { title: 'Residential Electrical Services', description: ' We offer a comprehensive range of electrical services for homeowners, including electrical installations, repairs, maintenance, lighting solutions, energy-efficient upgrades, and electrical safety inspections.' },
    { title: 'Commercial Electrical Services', description: ' Our commercial electrical services cover a wide spectrum, catering to businesses, offices, retail spaces, and industrial establishments. We specialize in electrical fit-outs, data cabling, emergency lighting, power distribution, and energy management solutions.' },
    { title: 'Electrical Consultation', description: ' Our team of experienced electrical consultants is available to provide expert advice and guidance on electrical projects, code compliance, energy-saving measures, and electrical system design.' },
    { title: 'Renewable Energy Solutions', description: ' Committed to sustainability, SAMZER Electrical offers renewable energy solutions, including solar panel installation and integration, to help clients reduce their carbon footprint and achieve energy independence.' },
    { title: '24/7 Emergency Services', description: ' We understand the urgency of electrical emergencies, and our dedicated team is available around the clock to address any unforeseen issues promptly and efficiently.' },
  ];

  return (
    <div>
      <div className="bg-green-500 my-[100px] text-center w-full my-custom-class">
        <div className='p-20'>
          <h2 className="text-white text-5xl pb-4 font-bold">Services</h2>
        </div>
      </div>
      <div className="container mx-auto p-6 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 md:pr-6">
          <Image src={image3} alt="Service Image" className="max-w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <p className="text-gray-700 mb-4">
          We provide a wide range of services to cater to your needs. Each of our services is designed to ensure the highest level of satisfaction and quality for our clients.
        </p>
          {services.map((service, index) => (
            <ServiceItem key={index} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="group relative bg-transparent p-4 rounded-lg shadow-md transition-all duration-300 mb-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className={`transform transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="text-gray-600 mt-2">
          {description}
        </div>
      )}
    </div>
  );
};

export default Services;
