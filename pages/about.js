import React from 'react'
import Image from 'next/image'
import image3 from '../public/pexels-emmanuel-ikwuegbu-7861505.jpg'
import Slider from 'react-slick';
import image5 from '../public/image5.jpeg'

const About = () => {
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
            description: 'SAMZER Electrical`s dedication to excellence, innovation, and customer satisfaction has positioned us as a leading electrical services provider. Whether it`s a residential project or a complex commercial installation, we have the knowledge, experience, and passion to meet and exceed our clients electrical needs.',
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
        <div>
            <div className="bg-green-500 my-[100px] text-center w-full my-custom-class">
                <div className='p-20'>
                    <h2 className="text-white text-5xl pb-4 font-bold">About Us</h2>
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
                            <h1 className="text-gray-500 text-3xl title-font font-medium mb-2">About Us</h1>
                            <div className='w-[60px] h-[4px] rounded bg-green-300 mb-10'></div>
                            {/* About Us Details */}
                            <p className="leading-relaxed text-white text-justify">
                                SAMZER Electrical is a dynamic and innovative electrical services company that was established and registered with the Corporate Affairs Commission (CAC) in 2019. With a passion for excellence and a commitment to customer satisfaction, SAMZER Electrical has rapidly grown to become a trusted provider of electrical solutions, catering to both residential and commercial clients..
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                        <Image alt="feature" className="object-cover object-center h-full w-full" src={image5} />
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-500 text-xl title-font font-bold mb-3">Our Vision</h2>
                                <p className="leading-relaxed text-base text-justify">At SAMZER Electrical, our vision is to be the premier electrical services company, renowned for our commitment to excellence, innovation, and sustainable solutions. We aim to reshape the electrical industry by continuously pushing the boundaries of technology, fostering a safe and efficient environment, and empowering our clients to embrace a greener, energy-conscious future.
                                At SAMZER Electrical, our vision statement reflects our ambition to lead the electrical industry while embodying a set of core values that guide us in every endeavor. With integrity, customer-centricity, excellence, innovation, safety, sustainability, and teamwork at our core, we are committed to providing top-tier electrical services that exceed expectations and contribute positively to the communities we serve. As we move forward, we remain dedicated to delivering on our vision and values, forging a path of progress and positive impact in the electrical services sector.</p>
                            </div>
                        </div>
                        <div className="flex flex-col mb-10 lg:items-start items-center">
                            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6" viewBox="0 0 24 24">
                                    <circle cx="6" cy="6" r="3"></circle>
                                    <circle cx="6" cy="18" r="3"></circle>
                                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-500 text-xl title-font font-bold mb-3">Our Mission</h2>
                                <p className="leading-relaxed text-base text-justify">Our mission at SAMZER Electrical is to deliver top-notch electrical services, utilizing cutting-edge technology and industry best practices, while prioritizing safety and sustainability. We strive to exceed our clients' expectations by consistently providing reliable, efficient, and cost-effective solutions that enhance their lives and businesses..</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <h1 className="text-3xl font-semibold  text-gray-500 pl-[100px]" > Core Values</h1>
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
    )
}

export default About