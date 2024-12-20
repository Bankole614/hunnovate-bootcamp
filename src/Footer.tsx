import Logo from './assets/Hunnovate logo.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-black text-white'>
      <div className='container pt-20 pb-5 border-b'>
        <div className='flex flex-col items-center gap-4'>
          <img src={Logo} alt="" className='w-2/3' />
          <div className='text-center'>
            <p className='text-2xl'>Join our Mailing List</p>
            <p>Stay up to date with the latest news, updates, special offers, and more</p>
          </div>
          <form action="">
            <div className='flex '>
              <input type="text" className='py-3 rounded-l-md w-full md:w-[300px] lg:w-[500px] outline-none' />
              <button type='submit' className='bg-gray-800  rounded-r-md px-4'>Subscribe</button>
            </div>
            
          </form>
          <ul className='flex flex-col md:flex-row justify-between gap-4 md:gap-8 lg:gap-20 text-center'>
            <li>Features</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>About Us</li>
            <li>Legal</li>
          </ul>
          
        </div>
      </div>
      <div className='container py-4'>
        <div className='flex flex-col gap-2 items-center'>
          <div className='flex items-center gap-4'>
            <FaFacebookF  className='w-8 h-8 p-1 rounded-full bg-white text-black cursor-pointer' />
            <FaInstagram  className='w-8 h-8 p-1 rounded-full bg-white text-black cursor-pointer' />
            <FaLinkedinIn  className='w-8 h-8 p-1 rounded-full bg-white text-black cursor-pointer' />
          </div>
          <p className='font-light'>Copyright 2024</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default Footer