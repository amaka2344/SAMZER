import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '../public/electrical services.jpg'

const HeroSection = () => {
    return (
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
                    Get Started
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
    );
};

export default HeroSection;
