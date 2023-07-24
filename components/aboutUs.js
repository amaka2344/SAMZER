import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import image3 from '../public/pexels-emmanuel-ikwuegbu-7861505.jpg'

const AboutUs = () => {
    return (
        <div id='aboutUs'>
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
                            <p className="leading-relaxed text-white">
                                SAMZER Electrical is a dynamic and innovative electrical services company that was established and registered with the Corporate Affairs Commission (CAC) in 2019. With a passion for excellence and a commitment to customer satisfaction, SAMZER Electrical has rapidly grown to become a trusted provider of electrical solutions, catering to both residential and commercial clients..
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs