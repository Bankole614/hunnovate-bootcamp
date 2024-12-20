import Image from './assets/unsplash_FcLyt7lW5wg.png'
import figma from './assets/logo/Figma.png'
import photoshop from './assets/logo/Adobe Photoshop.png'
import python from './assets/logo/Python.png'
import adobeXd from './assets/logo/Adobe Xd.png'
import vscode from './assets/logo/Visual Studio Code.png'


const ourCourses = [
  {
    course: 'Front End Development'
  },
  {
    course: 'Back End Development'
  },
  {
    course: 'Data Analytics'
  },
  {
    course: 'Graphics Design'
  },
  {
    course: 'UI/UX Design'
  },
  {
    course: 'Cyber Security'
  },
]

const Courses = () => {
  return (
    <div className='bg-secondary'>
      <div className='container py-16'>
        <div className='flex flex-col lg:flex-row items-center justify-between xl:gap-10 gap-16'>
          <div className='lg:w-1/2 relative px-4 sm:px-0'>
            <img src={Image} alt="" className=' rounded-lg xl:w-3/4' />
            <img src={figma} alt="" className='absolute sm:-top-12 -top-6 sm:left-3 left-8 sm:w-24 w-16' />
            <img src={photoshop} alt="" className='absolute -top-4 2xl:right-32 xl:right-24 sm:-right-10 -right-2  sm:w-24 w-16' />
            <img src={python} alt="" className='absolute bottom-24 2xl:right-32 xl:right-24 sm:-right-10 -right-2 sm:w-24 w-16' />
            <img src={adobeXd} alt="" className='absolute sm:-bottom-12 -bottom-8 left-48 sm:w-24 w-16' />
            <img src={vscode} alt="" className='absolute bottom-40 sm:-left-10 -left-3 sm:w-24 w-16' />
          </div>
          <div className='lg:w-1/2 w-full flex flex-col gap-4 text-primary'>
            <div className='text-center'>
              <h3 className='font-medium text-3xl mb-2'>Our Courses</h3>
              <p className='text-lg'>What you can learn at hunnovate</p>
            </div>
            <div className='flex flex-col gap-6'>
              {
                ourCourses.map((course, index) => (
                  <div key={index}>
                    <p className='border p-2 text-center border-primary rounded-lg text-lg hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer'>{course.course}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses