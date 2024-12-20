import { IoBookmark } from "react-icons/io5"
import Testimonials from "./Testimonials"


const learning = [
  {
    icon: <IoBookmark size={24} />,
    title: 'Earn a certificate',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda a nulla recusandae ad expedita in facere? Saepe nulla suscipit cumque!'
  },
  {
    icon: <IoBookmark size={24} />,
    title: 'Get hands-on experience ',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda a nulla recusandae ad expedita in facere? Saepe nulla suscipit cumque!'
  },
  {
    icon: <IoBookmark size={24} />,
    title: 'Learn from the very best',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda a nulla recusandae ad expedita in facere? Saepe nulla suscipit cumque!'
  },
  {
    icon: <IoBookmark size={24} />,
    title: 'Be a part of a fast growing startup',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda a nulla recusandae ad expedita in facere? Saepe nulla suscipit cumque!'
  },
]

const Reason = () => {
  return (
    <div className="min-h-full sm:bg-auto bg-contain bg-right bg-no-repeat" style={{backgroundImage: "url('/src/assets/Shape_1.png'), url('/src/assets/Shape_2.png'), url('/src/assets/Shape_3.png')"}}>
      <div className='container py-16'>
        <div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-14'>
            <div className='flex flex-col gap-4 text-center lg:text-left max-w-xl'>
              <h3 className='font-medium text-3xl mb-2 text-primary'>Why Choose our Bootcamp</h3>
              <p className='text-lg'>Since 2024, Hunnovate has trained over 300 thousand African youths in various skills such as Data Science, Web Development, Product Design, Cyber Security, and Data Analytics.</p>
              <button className="w-full sm:w-fit px-16 py-2 bg-primary text-white rounded-md font-medium  ">
                Get Started
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {
                learning.map((item, index) => (
                  <div key={index} className="border border-primary p-4 rounded-lg">
                    <div className="text-primary">{item.icon}</div>
                    <p className="font-semibold text-primary text-lg">{item.title}</p>
                    <p>{item.description}</p>
                  </div>
                ))
              }
            </div>
          </div>

          <Testimonials />
        </div>
        
      </div>
      
    </div>
  )
}

export default Reason