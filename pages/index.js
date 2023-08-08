import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '../public/electrical services.jpg'
import image3 from '../public/pexels-emmanuel-ikwuegbu-7861505.jpg'
import image2 from '../public/electricalservice2.jpg';
import { useForm, ValidationError } from '@formspree/react';

const HeroSection = () => {
  const [state, handleSubmit] = useForm("xwkdvadq");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <div id='home' className="py-10 w-full h-[90vh] md:py-20 grid md:grid-cols-2 gap-3 items-center mx-auto px-10">
        <div className="container md:w-[80%] md:mr-4 flex flex-col items-center md:items-start">
          <h1 className="text-5xl md:text-[60px] font-bold text-white mb-6 text-center md:text-left">
            SAMZER Electrical Engineering
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center md:text-left">
            <span className='text-[#8BC75C]'>Providing Electrical Solutions for Your Needs</span>
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 text-center md:text-left">
            Top-notch electrical services for homes and businesses
          </p>
          <Link href="#contact" className="bg-white text-black py-3 px-8 rounded-lg font-medium hover:text-[#8BC75C] hover:bg-white transition-colors duration-300">
            Contact Us
          </Link>
        </div>
        <div className="hidden md:block mt-2">
          <Image
            src={heroImg}
            alt="Hero Image"
            width={600}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Image on the left */}
            <Image
              alt="ecommerce"
              width={400}
              height={400}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={image3}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 justify-center items-center">
              <h1 className="text-gray-500 text-3xl title-font font-medium mb-2">Welcome to SAMZER Electrical</h1>
              <div className='w-[60px] h-[4px] rounded bg-green-300 mb-10'></div>
              {/* About Us Details */}
              <p className="leading-relaxed text-white">
                SAMZER Electrical is a dynamic and innovative electrical services company that was established and registered with the Corporate Affairs Commission (CAC) in 2019. With a passion for excellence and a commitment to customer satisfaction, SAMZER Electrical has rapidly grown to become a trusted provider of electrical solutions, catering to both residential and commercial clients..
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              </div>
            </div>
          </div>
        </div>
      </section>
      
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
    <div id='contact' className="py-12">
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <Image width="100%" height="100%" className="absolute inset-0" alt='contact image' src={image2} />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Chevron drive Lekki Lagos</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                <a className="text-indigo-500 leading-relaxed">info@samzerelectrical.com</a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">08149161525</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <form
              onSubmit={handleSubmit}
              className="md:w-2/3 max-w-lg md:ml-20"
            >
              <h2 className="text-3xl font-semibold text-gray-500 mb-8">Contact Us</h2>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 text-gray-700"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 text-gray-700"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Your message here..."
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-indigo-500 text-gray-700"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-medium hover:bg-green-600 transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default HeroSection;

