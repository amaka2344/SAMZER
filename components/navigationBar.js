import React, { useState } from 'react';
import {Link as ScrollLink} from 'react-scroll'
import Logo from '../public/SAMZAR-removebg-preview.png'
import Image from 'next/image';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeNavBar = () => {
    setIsMenuOpen(false);
  };


  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <nav className="border-gray-200 bg-black top-0 w-full h-[10vh]">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <ScrollLink href="/" className="flex items-center">
            <Image
              src={Logo}
              className=" w-36 mr-3"
              alt="SAMZAR Logo"
            />
          </ScrollLink>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            onClick={handleMenuToggle}
            className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-white hover:text-black rounded hover:bg-white focus:outline-none"
            aria-controls="navbar-hamburger"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? 'hidden' : 'block'}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? 'block' : 'hidden'}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full z-[1000] bg-black`} id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg">
              <li>
              <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100"
                  activeClass="active"
                  onClick={closeNavBar}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
              <ScrollLink
                  to="aboutUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100"
                  activeClass="active"
                  onClick={closeNavBar}
                >
                  About Us
                </ScrollLink>
              </li>
              <li>
              <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100"
                  activeClass="active"
                  onClick={closeNavBar}
                >
                  Services
                </ScrollLink>
              </li>
              <li>
              <ScrollLink
                  to="visionMission"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100"
                  activeClass="active"
                  onClick={closeNavBar}
                >
                  Vision & Mission
                </ScrollLink>
              </li>
            
              <li>
              <ScrollLink
                  to="coreValues"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100"
                  activeClass="active"
                  onClick={closeNavBar}
                >
                  Core Values
                </ScrollLink>
              </li>
              <li>
              <ScrollLink
                  to="whyChooseUs"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100"
                  activeClass="active"
                  onClick={closeNavBar}
                >
                  Why Choose Us
                </ScrollLink>
              </li>
              <li>
              <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100"
                  activeClass="active"
                  onClick={closeNavBar}
                >
                Contact
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
