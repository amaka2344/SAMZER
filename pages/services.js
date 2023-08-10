import React, { useState } from 'react';
import Image from 'next/image';
import image3 from '../public/image4.jpeg'
import img1 from '../public/img1.jpg'
import img2 from '../public/img2.jpg'
import img3 from '../public/img3.jpg'
import img4 from '../public/evgeniy-alyoshin-2ASQyjafflo-unsplash.jpg'
import img5 from '../public/emmanuel-ikwuegbu-xdS9XEoKBLY-unsplash.jpg'
import img6 from '../public/electrical services.jpg'

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
      <div className="bg-[#22b06c] my-[100px] text-center w-full my-custom-class">
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
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-3xl font-bold title-font text-white lg:w-1/3 lg:mb-0 mb-4">Service Gallery</h1>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block" src={img6} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block" src={img2} />
              </div>
              <div className="md:p-2 p-1 w-full">
                <Image alt="gallery" className="w-full h-full object-cover object-center block" src={img3} />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image alt="gallery" className="w-full h-full object-cover object-center block" src={img4} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block" src={img5} />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image alt="gallery" className="w-full object-cover h-full object-center block" src={img1} />
              </div>
            </div>
          </div>
        </div>
      </section>
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
