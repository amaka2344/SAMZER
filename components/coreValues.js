import React from 'react';
import Slider from 'react-slick';

const CoreValues = () => {
    // Core values data
    const coreValuesData = [
        {
            id: 1,
            title: 'Integrity',
            description: 'Integrity lies at the heart of SAMZER Electrical. We believe in conducting our business with the utmost honesty, transparency, and ethical standards. Our clients can trust us to deliver on our promises, ensuring fair dealings and maintaining the highest level of professionalism in all our interactions.',
        },
        {
            id: 2,
            title: 'Customer-Centric Approach',
            description: 'We prioritize our customers needs and concerns above all else. Listening to their requirements and understanding their unique challenges allows us to tailor our services to provide personalized solutions. Our goal is to build strong, long-lasting relationships with our clients, based on mutual respect and open communication.'
        },
        {
            id: 3,
            title: 'Excellence in Craftsmanship',
            description: 'SAMZER Electrical takes pride in the quality of our workmanship. Our team of skilled electricians is dedicated to delivering exceptional results, whether it`s a small repair or a large-scale electrical project. We strive for perfection in every detail, ensuring that each task is completed to the highest standards.',
        },
        {
            id: 4,
            title: 'Innovation',
            description: 'We embrace innovation as the driving force behind our success. SAMZER Electrical actively seeks out cutting-edge technologies and industry best practices to deliver modern and efficient solutions. By staying ahead of industry trends, we can provide our clients with the most up-to-date and sustainable electrical services.',
        },
        {
            id: 5,
            title: 'Safety First',
            description: 'The safety of our clients, employees, and the communities we serve is non-negotiable. We adhere to strict safety protocols and best practices, fostering a culture of safety throughout our organization. By prioritizing safety, we create a secure environment for our team and clients alike.',
        },
        {
            id: 6,
            title: 'Sustainability',
            description: 'Committed to environmental responsibility, SAMZER Electrical strives to promote sustainable practices in all aspects of our business. Through energy-efficient solutions and the integration of renewable energy technologies, we aim to contribute to a greener and more sustainable future for our planet.',
        },
        {
            id: 7,
            title: 'Teamwork and Empowerment',
            description: 'We believe that the key to success lies in the strength of our team. SAMZER Electrical fosters a collaborative and inclusive work environment, encouraging creativity and innovation from every team member. We empower our employees to excel in their roles and provide opportunities for growth and personal development.SAMZER Electrical`s dedication to excellence, innovation, and customer satisfaction has positioned us as a leading electrical services provider. Whether it`s a residential project or a complex commercial installation, we have the knowledge, experience, and passion to meet and exceed our clients electrical needs. Trust SAMZER Electrical for all your Electrical solutions, and experience the difference quality and professionalism can make.',
            author: 'Alper Kamu',
        },
        // Add more core values here...
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // Breakpoint for smaller screens
                settings: {
                    slidesToShow: 1, // Display one core value at a time for smaller screens
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div id='coreValues'>
            <h1 className="text-3xl font-semibold  text-gray-500"> Core Values</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <Slider {...settings}>
                        {coreValuesData.map((coreValue) => (
                            <div key={coreValue.id} className="h-full flex items-start">
                                <div className="flex-grow pl-6">
                                    <h2 className="tracking-widest text-xs title-font font-bold text-green-500 mb-1">CORE VALUE {coreValue.id}</h2>
                                    <h1 className="title-font text-xl font-medium text-gray-500 mb-3">{coreValue.title}</h1>
                                    <p className="leading-relaxed mb-5 text-white text-justify">{coreValue.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </div>
    );
};

export default CoreValues;
