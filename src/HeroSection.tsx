import Navbar from './Navbar'
import firstImage from './assets/unsplash_Q_Sei-TqSlc.png'
import secondImage from './assets/unsplash_ZN52ZBFkw4Y.png'
import thirdImage from './assets//unsplash_g1Kr4Ozfoac.png'


const HeroSection = () => {
  return (
    <div className='min-h-full sm:bg-auto bg-contain bg-no-repeat' style={{backgroundImage: "url('/src/assets/Vector 12.png')"}}>
      <div>
        <Navbar />
        <div className='container pt-24 pb-16'>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 space-y-6 flex flex-col items-center lg:items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight text-center lg:text-left">
              Kick-start your tech career <span className='font-normal'> for as low as 10K (10 USD)</span>
            </h1>
            
            <button className="w-full sm:w-fit px-16 py-2 bg-primary text-white rounded-md font-medium  ">
              Get Started
            </button>

            
            <div className="pt-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm">
                    +7
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Join over 300 thousand student to learn tech skills with us.
              </p>
            </div>
          </div>

          
          <div className="lg:w-1/2 grid grid-cols-2  gap-4">
            <div className="">
              <img
                src={firstImage}
                alt="Students learning"
                className="h-80 w-full object-cover rounded-lg"
              />
            </div>
            <div>
              <img
                src={secondImage}
                alt="Student working"
                className="lg:h-60 h-60  md:w-auto  object-cover rounded-lg"
              />
            </div>
            <div className='-mt-20 lg:mr-2 xl:mr-24 md:mr-16 mr-8 place-items-end col-span-2 w-full sm:w-auto'>
              <img
                src={thirdImage}
                alt="Study group"
                className=" lg:h-48  object-cover rounded-lg w-2/3"
              />
            </div>
          </div>
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default HeroSection