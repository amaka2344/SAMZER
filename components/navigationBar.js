import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../public/SAMZAR-removebg-preview.png';
import { useRouter } from 'next/router';
import Image from 'next/image';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  
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
            <Image src={Logo} className=" w-36 mr-4" alt="SAMZAR Logo" />
          </Link>
          <div className="hidden md:block pr-20">
            <ul className="flex font-medium mt-4">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 text-gray-600 hover:text-black hover:bg-gray-100 rounded ${router.pathname === '/' ? 'bg-green-500 text-white' : ''}`}
                  onClick={closeNavBar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 px-3 text-gray-600 hover:text-black hover:bg-gray-100 rounded ${router.pathname === '/about' ? 'bg-green-500 text-white' : ''}`}
                  onClick={closeNavBar}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block py-2 px-3 text-gray-600 hover:text-black hover:bg-gray-100 rounded ${router.pathname === '/services' ? 'bg-green-500 text-white' : ''}`}
                  onClick={closeNavBar}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 px-3 text-gray-600 hover:text-black hover:bg-gray-100 rounded ${router.pathname === '/contact' ? 'bg-green-500 text-white' : ''}`}
                  onClick={closeNavBar}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-hamburger"
            type="button"
            onClick={handleMenuToggle}
            className="md:hidden inline-flex items-center justify-center p-2 w-10 h-10 mr-4 text-sm text-white hover:text-black rounded hover:bg-white focus:outline-none"
            aria-controls="navbar-hamburger"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? 'hidden' : 'block'}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`w-5 h-5 ${isMenuOpen ? 'block' : 'hidden'}`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full z-[1000] bg-black md:hidden`} id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4">
              <li>
                <Link
                  href="/"
                  className={`block py-2 px-3 text-gray-600 hover:text-black hover:bg-gray-100 rounded ${router.pathname === '/' ? 'bg-green-500 text-white' : ''}`}
                  onClick={closeNavBar}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`block py-2 px-3 text-gray-600 hover:text-black hover:bg-gray-100 rounded ${router.pathname === '/about' ? 'bg-green-500 text-white' : ''}`}
                  onClick={closeNavBar}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`block py-2 px-3 text-gray-600 hover:text-black hover:bg-gray-100 rounded ${router.pathname === '/services' ? 'bg-green-500 text-white' : ''}`}
                  onClick={closeNavBar}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`block py-2 px-3 text-gray-600 hover:text-black hover:bg-gray-100 rounded ${router.pathname === '/contact' ? 'bg-green-500 text-white' : ''}`}
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
