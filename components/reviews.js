import React from 'react';


const reviews = [
  {
    name: 'John Bolanle',
    rating: 5,
    review:
      'I recently hired Samzer Electrical for a wiring project in my home, and I couldn\'t be happier with the results. Their team was not only professional but also incredibly efficient. They completed the job ahead of schedule and ensured everything was working perfectly. I highly recommend their services!',
    image: '/7.jpeg', 
  },
  {
    name: 'Sarah Micheal',
    rating: 4,
    review:
      'Samzer Electrical provided exceptional service when I needed help with an electrical issue at my business. Their technicians were prompt, knowledgeable, and courteous. They quickly diagnosed the problem and had it fixed in no time. I appreciate their reliability and expertise.',
    image: '/8.jpeg',
  },
  {
    name: 'Chike Willams',
    rating: 5,
    review:
      'I had the pleasure of working with Samzer Electrical for a lighting installation project. From start to finish, they demonstrated a high level of professionalism. The team\'s attention to detail and commitment to quality are truly commendable. I\'m thrilled with the new lighting in my home!',
    image: '/9.jpeg', 
  },
  {
    name: 'David Adenike',
    rating: 5,
    review:
      'Samzer Electrical Engineering is the go-to choice for any electrical work. They rewired my entire office space, and the results were outstanding. Their team\'s expertise and dedication to safety impressed me. Plus, they completed the project within budget. I couldn\'t be more satisfied.',
    image: '/6.jpeg',
  },
];

const ReviewCarousel = () => {
  return (
    <div className=" py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-8">Customer Reviews</h2>
        <div className="flex flex-col sm:flex-row overflow-x-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-gray-600 rounded-lg p-6 shadow-md mb-4 mx-4 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="mb-4">
                <img
                  src={review.image}
                  alt={`Profile of ${review.name}`}
                  className="rounded-full w-16 h-16 mx-auto"
                />
              </div>
              <h3 className="text-lg font-semibold text-center">{review.name}</h3>
              <div className="text-yellow-400 text-center">
                {Array.from({ length: review.rating }, (_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 inline-block text-yellow-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm mt-4">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
