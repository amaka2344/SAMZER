import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../public/SAMZAR-removebg-preview.png'
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter()
  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeNavBar = () => {
    setIsMenuOpen(false);
  };


  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <nav className="border-gray-200 bg-black top-0 w-full h-[10vh]">
        <div className="flex flex-wrap items-center justify-between mx-auto pb-4">
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src={Logo}
              className=" w-36 mr-3"
              alt="SAMZAR Logo"
            />
          </Link>
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
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
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full z-[1000] bg-black`} id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg">
              <li>
                <Link
                  href="/"
                  value='home'
                  className={`block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 cursor-pointer ${router.pathname === '/' ? 'bg-green-500 text-white' : ''}`}
                  onClick={closeNavBar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  value='aboutUs'
                  className={`block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 cursor-pointer ${router.pathname === '/about' ? 'bg-green-500 text-white' : ''}`}
                  onClick={closeNavBar}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  value='services'
                  className={`block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 cursor-pointer ${router.pathname === '/services' ? 'bg-green-500 text-white' : ''}`}
                  onClick={closeNavBar}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  value='contact'
                  className={`block py-2 pl-3 pr-4 text-gray-600 rounded hover:bg-gray-100 cursor-pointer ${router.pathname === '/contact' ? 'bg-green-500 text-white' : ''}`}
                  onClick={closeNavBar}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
