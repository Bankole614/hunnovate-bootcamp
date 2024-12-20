import { useState } from 'react';
import Logo from './assets/Hunnovate_Symbol.png'

// const navItems = [

//   {
//     id: 1,
//     name: 'Home',
//     path: '/#home'
//   },
//   {
//     id: 2,
//     name: 'About Us',
//     path: '/#About'
//   },
//   {
//     id: 3,
//     name: 'Services',
//     path: '/#Services'
//   },
//   {
//     id: 4,
//     name: 'How it Works',
//     path: '/#How-it-works'
//   },
//   {
//     id: 5,
//     name: 'Contact Us',
//     path: '/#Contact'
//   },
// ]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className=''>
            {/* Navbar Header */}
            <nav className=" fixed top-0 z-50 bg-white/50 backdrop-blur shadow w-full py-3 flex justify-between items-center">
              <div className='container flex justify-between items-center'>
            <img src={Logo} alt="" className='w-10' />
                <button onClick={toggleMenu} className="text-primary lg:hidden">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                {/* <ul className="hidden mx-auto md:flex">
                  {
                    navItems.map((item) => (
                      <li key={item.id}>
                        <a className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium" href={item.path}>{item.name}</a>
                      </li>
                    ))
                  }
                </ul> */}
                
                <div className="hidden lg:flex items-center">
                  <button className="bg-secondary w-24 text-primary py-2 rounded-md text-sm font-medium hover:text-white hover:bg-primary transition-all duration-300">Login</button>
                  <button className="ml-2 border w-24 text-white bg-primary hover:bg-opacity-80 transition-all duration-300 py-2 rounded-md text-sm font-medium">Sign up</button>
                </div>
              </div>
                
            </nav>

            <div
                className={`fixed inset-y-0 left-0 z-50 w-56 bg-white transform ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300  lg:hidden`}>
                <div className="flex justify-end items-center p-3">
                    <button onClick={() => toggleMenu()} className="text-primary">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                </div>

                {/* <ul className="p-4 space-y-4">
                  {
                    navItems.map((item) => (
                      <li key={item.id}>
                        <a className="block text-gray-700 hover:text-green-500 text-lg font-medium" href={item.path} onClick={() => toggleMenu()}>{item.name}</a>
                      </li>
                    ))
                  }
                </ul> */}
                <div className="p-4 flex gap-2 flex-col">
                  <button className="bg-secondary w-24 text-primary py-2 rounded-md text-sm font-medium hover:text-primary hover:bg-primary transition-all duration-300">
                    Log In
                  </button>
                  <button className="border w-24 text-white bg-primary hover:bg-opacity-80 transition-all duration-300 py-2 rounded-md text-sm font-medium">
                    Register
                  </button>
                </div>
                
            </div>

            
            {isOpen && (
                <div onClick={toggleMenu} className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"></div>
            )}
        </div>
    );
};

export default Navbar;