import { MdVerified } from "react-icons/md"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  img: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dolor mollitia rerum voluptas! Earum nemo facere labore provident, voluptatem molestias, officia nihil illum dignissimos, ipsum magni expedita voluptas sequi cum!',
    img: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Kehinde Oluwaseun',
    role: 'Graphics Designer'
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dolor mollitia rerum voluptas! Earum nemo facere labore provident, voluptatem molestias, officia nihil illum dignissimos, ipsum magni expedita voluptas sequi cum!',
    img: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Kehinde Oluwaseun',
    role: 'Data Analyst'
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dolor mollitia rerum voluptas! Earum nemo facere labore provident, voluptatem molestias, officia nihil illum dignissimos, ipsum magni expedita voluptas sequi cum!',
    img: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Kehinde Oluwaseun',
    role: 'UI/UX Designer'
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste dolor mollitia rerum voluptas! Earum nemo facere labore provident, voluptatem molestias, officia nihil illum dignissimos, ipsum magni expedita voluptas sequi cum!',
    img: 'https://randomuser.me/api/portraits/men/2.jpg',
    name: 'Kehinde Oluwaseun',
    role: 'Web Developer'
  },
]

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

const Testimonials = () => {
  return (
    <div>
      <div className='text-center text-primary mb-6'>
        <h3 className='font-medium text-3xl mb-2'>Success Stories</h3>
        <p className='text-lg'>Testimonials of Different Students</p>
      </div>
      <div className="w-full max-w-7xl mx-auto px-4">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-3">
            <div className="bg-white rounded-lg p-6 border border-primary">
              <p className="text-gray-600 text-center mb-6">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.img}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-3">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-gray-800">
                      {testimonial.name}
                    </h3>
                    <MdVerified className="text-primary" />
                  </div>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  )
}

export default Testimonials


// 1. First install required packages:
// npm install react-slick slick-carousel
// or
// yarn add react-slick slick-carousel

// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// interface TestimonialProps {
//   name: string;
//   role: string;
//   content: string;
//   imageUrl: string;
// }

// const TestimonialCarousel: React.FC = () => {
//   const testimonials: TestimonialProps[] = [
//     {
//       name: 'Kehinde Oluwaseun',
//       role: 'Graphics Designer',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna.Ut et massa mi. Aliquam in hendrerit urna.',
//       imageUrl: '/path-to-profile-image.jpg'
//     },
//     {
//       name: 'Kehinde Oluwaseun',
//       role: 'Data Analyst',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna.Ut et massa mi. Aliquam in hendrerit urna.',
//       imageUrl: '/path-to-profile-image.jpg'
//     },
//     {
//       name: 'Kehinde Oluwaseun',
//       role: 'UI/UX Designer',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna.Ut et massa mi. Aliquam in hendrerit urna.',
//       imageUrl: '/path-to-profile-image.jpg'
//     },
//     {
//       name: 'Kehinde Oluwaseun',
//       role: 'Graphics Designer',
//       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Ut et massa mi. Aliquam in hendrerit urna.Ut et massa mi. Aliquam in hendrerit urna.',
//       imageUrl: '/path-to-profile-image.jpg'
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         }
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4">
//       <Slider {...settings}>
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="px-3">
//             <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
//               <p className="text-gray-600 mb-6">
//                 {testimonial.content}
//               </p>
//               <div className="flex items-center">
//                 <img
//                   src={testimonial.imageUrl}
//                   alt={testimonial.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div className="ml-3">
//                   <div className="flex items-center">
//                     <h3 className="font-medium text-gray-800">
//                       {testimonial.name}
//                     </h3>
//                     <svg
//                       className="w-5 h-5 ml-2 text-blue-500"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </div>
//                   <p className="text-gray-600 text-sm">{testimonial.role}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default TestimonialCarousel;

// Add these custom styles to your CSS file:
// `
// .slick-dots {
//   bottom: -40px;
// }

// .slick-dots li button:before {
//   font-size: 10px;
//   color: #4B5563;
// }

// .slick-dots li.slick-active button:before {
//   color: #3B82F6;
// }

// .slick-prev, .slick-next {
//   z-index: 10;
// }

// .slick-prev {
//   left: -25px;
// }

// .slick-next {
//   right: -25px;
// }

// @media (max-width: 640px) {
//   .slick-prev {
//     left: -15px;
//   }
//   .slick-next {
//     right: -15px;
//   }
// }
// `