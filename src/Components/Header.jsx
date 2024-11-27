import React from 'react';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import HomeImage from '../assets/img/home.png';



const Header = () => {
  return (
    <>
       {/* blob-1 */}
      <div className='w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
      </div>

      {/* blob-2 */}
      <div className='w-64 h-64 bg-green-700 rounded-full blur-3xl -z-10 opacity-40 absolute right-0 bottom-0'>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 px-4 sm:px-8 lg:px-16 ">
        {/* Text Content */}
        <div className="w-full space-y-5 lg:w-1/2 mt-16 sm:mt-24 lg:mt-32 ml-16 animate-slide-in group-hover:scale-90 duration-300">
          <h1 className="text-white font-jost font-bold text-3xl sm:text-3xl sm:-ml-8 lg:text-6xl ">
            <span className="text-yellow-400">Plants</span> make a
          </h1>

          <h1 className="text-white font-jost font-bold lg:text-6xl lg:-ml-15 sm:text-4xl sm:-ml-8">
            positive
            <span className="text-yellow-400  lg:text-6xl sm:text-3xl"> Impact</span> on
          </h1>
          <h1 className="text-white font-jost font-bold lg:text-6xl sm:text-3xl sm:-ml-8">
            your environment
          </h1>

          <p className="lg:mt-28 sm:mt-10  text-sm sm:text-base sm:-ml-8  text-gray-300 font-Lobster font-normal">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quidem reiciendis
            cum mollitia, nobis repudiandae. Officia neque ullam, minus odit placeat corporis
            dolores. Natus blanditiis aliquam provident et in eligendi cum quidem!
          </p>

          <div className="flex flex-col sm:flex-row gap-5 sm:mt-10 lg:mt-20 -ml-5">
            <button className="bg-yellow-500 px-6 py-3 rounded  sm:-ml-5 flex font-jost hover:bg-gray-300 w-full sm:w-40 mt-10 lg:-ml-2">
              <span>Shop Now </span>
              <i className='ri-leaf-line'></i>
            </button>
            <button className="ml-0 sm:ml-5 text-white border-2 border-yellow-500 px-5 py-2 rounded-lg w-full sm:w-40 mt-10">
              <span>Know More </span>
              <i className='ri-leaf-line'></i>
            </button>
          </div>

          <p className="lg:-ml-7 sm:ml-5 text-white mt-5 font-sans font-Lobster font-normal">
            "Yes, get 30-days free trial..."
          </p>

          {/* Social Media Icons */ }
          <div className="flex space-x-8 lg:-ml-5 ">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:text-blue-600 lg:mt-10">
              <FaFacebook size={30} />
            </a> 
         
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white-600 hover:text-pink-800 lg:mt-10">
              <FaInstagram size={30} />
            </a>

            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white-800 hover:text-gray-600 lg:mt-10">
              <FaGithub size={30} />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white-700 hover:text-blue-900 lg:mt-10">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div className="relative w-full lg:w-1/2 mt-12 sm:mt-16 sm:w-80 lg:mt-28">
          <img src={HomeImage} alt="home_image" className=" w-full lg:w-2/3 mx-auto object-cover animate-slide-in " />

          {/* Leaf Icon */}
          <div className="absolute top-5 right-20 opacity-30 xl:-top-16 -mr-10 animate-movingY sm:-mt-10 sm:-ml-5">
            <i className="ri-leaf-line text-yellow-500 text-6xl"></i>
          </div>

          {/* Flower Icon */}
          <div className="absolute bottom-0 left-0 opacity-30 xl:bottom-12 animate-rotating">
            <i className="ri-flower-line text-6xl text-yellow-500"></i>
          </div>

          {/* Plant Icon */}
          <div className="hidden absolute top-5 left-5 opacity-30 sm:-mt-10 ml-10 lg:-top-16 -mr-10  lg:block animate-scalingUp">
            <i className="ri-plant-line text-yellow-500 text-6xl"></i>
          </div>
        </div>
      </div>

    </>

  )
}

export default Header;

