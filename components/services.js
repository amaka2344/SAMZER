// pages/services.js
import React from 'react';

const Services = () => {
    return (
        <div id='services' className=" container mx-auto p-6 mb-8">
            <h1 className="text-3xl font-semibold mb-6 text-gray-500">Our Services</h1>
            <div className=" grid md:grid-cols-3 gap-4 md:gap-10">
                <div className="py-16 p-4 rounded-lg shadow-md">
                    <h2 className="text-[16px] font-semibold mb-2 text-green-500">Residential Electrical Services</h2>
                    <p className="text-gray-600">
                        We offer a comprehensive range of electrical services for homeowners, including electrical installations, repairs, maintenance, lighting solutions, energy-efficient upgrades, and electrical safety inspections.
                    </p>
                </div>
                <div className="py-16 p-4 rounded-lg shadow-md">
                    <h2 className="text-[16px] font-semibold mb-2 text-green-500">Commercial Electrical Services</h2>
                    <p className="text-gray-600">
                        Our commercial electrical services cover a wide spectrum, catering to businesses, offices, retail spaces, and industrial establishments. We specialize in electrical fit-outs, data cabling, emergency lighting, power distribution, and energy management solutions.
                    </p>
                </div>
                <div className="py-16  p-4 rounded-lg shadow-md">
                    <h2 className="text-[16px] font-semibold mb-2 text-green-500">Electrical Consultation</h2>
                    <p className="text-gray-600">
                        Our team of experienced electrical consultants is available to provide expert advice and guidance on electrical projects, code compliance, energy-saving measures, and electrical system design.
                    </p>
                </div>
                {/* Add more services here */}
                <div className="py-16 p-4 rounded-lg shadow-md">
                    <h2 className="text-[16px] font-semibold mb-2 text-green-500">Renewable Energy Solutions</h2>
                    <p className="text-gray-600">
                        Committed to sustainability, SAMZER Electrical offers renewable energy solutions, including solar panel installation and integration, to help clients reduce their carbon footprint and achieve energy independence.          </p>
                </div>
                <div className="py-16  p-4 rounded-lg shadow-md">
                    <h2 className="text-[16px] font-semibold mb-2 text-green-500">24/7 Emergency Services</h2>
                    <p className="text-gray-600">
                        We understand the urgency of electrical emergencies, and our dedicated team is available around the clock to address any unforeseen issues promptly and efficiently.          </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
