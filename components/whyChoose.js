// components/WhyChooseUs.js
import React from 'react';

const WhyChooseUs = () => {
  return (
    <div id='whyChooseUs' className="py-12 mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-500 mb-8">Why Choose SAMZER Electrical</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Team</h3>
            <p className="text-gray-600">
              Our highly skilled and certified electricians are equipped with the expertise to handle diverse electrical projects, ensuring quality workmanship and safety.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cutting-Edge Technology</h3>
            <p className="text-gray-600">
              We stay at the forefront of technological advancements in the electrical industry, enabling us to deliver modern, efficient, and sustainable solutions.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer-Centric Approach</h3>
            <p className="text-gray-600">
              At SAMZER Electrical, customer satisfaction is our priority. We actively listen to our clients' needs, tailor our services accordingly, and maintain open communication throughout the project.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality and Safety</h3>
            <p className="text-gray-600">
              We adhere to stringent quality and safety standards, utilizing high-quality materials and industry best practices to ensure the longevity and reliability of our installations.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Timely Execution</h3>
            <p className="text-gray-600">
              We respect our clients' time and aim to complete projects within agreed-upon timelines, without compromising on the quality of our work.
            </p>
          </li>
          <li className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Engagement</h3>
            <p className="text-gray-600">
              As a responsible corporate citizen, SAMZER Electrical is committed to giving back to the community. We actively participate in local initiatives, support educational programs, and contribute to charitable causes.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
