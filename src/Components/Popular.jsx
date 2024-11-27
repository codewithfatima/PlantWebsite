import React from 'react'
import Cart from '../assets/img/cart-1.png';
import Card2 from '../assets/img/cart-2.png'
import Card3 from '../assets/img/cart-3.png';
import Card4 from '../assets/img/cart-4.png';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";


const Popular = () => {
  return (
    <div>
      <div className='relative overflow-hidden bg-green-900 pb-20'>
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.5 }}

          className='flex flex-col items-center gap-3 text-center mb-40 md:mb-28'>
          <h2 className='title sm:mt-20 text-yellow-500'>Your Choice Plant</h2>
          <p className='max-w-2xl'>Follow instruction for more</p>
        </motion.div>

        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className='container w-full grid grid-cols-1 gap-x-8 gap-y-36
         md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-12'>

          {/* Card 1 */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            className='popular__card bg-green-950 p-10 pt-24 rounded-md relative'>
            <img src={Cart} alt="" className='w-56 absolute -top-32 left-1/2 transform -translate-x-1/2 duration-500' />
            <p className='italic'>Nephrolepis exaltaa</p>
            <h3>Boston fern</h3>
            <div className='text-yellow-500 text-xs py-3'>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-half-fill'></i>
              <i className='ri-star-line text-gray-400'></i>
              <i className='ri-star-line text-gray-400'></i>
            </div>
            <div className='flex items-center justify-between'>
              <p>$5</p>
              <button className='bg-yellow-400 py-1 px-2 rounded-sm text-xl'>
                <i className='ri-shopping-cart-fill'></i>
              </button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeIn('up', 0.6)} className='popular__card bg-green-950 p-10 pt-24 rounded-md relative'>
            <img src={Card2} className='w-56 absolute -top-32 left-1/2 transform -translate-x-1/2 duration-500' />
            <p className='italic'>Ficus elastics</p>
            <h3>Rubber plant</h3>
            <div className='text-yellow-500 text-xs py-3'>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-half-fill'></i>
              <i className='ri-star-line text-gray-400'></i>
              <i className='ri-star-line text-gray-400'></i>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-xl'>$5</p>
              <button className='bg-yellow-400 py-1 px-2 rounded-sm text-xl'>
                <i className='ri-shopping-cart-fill'></i>
              </button>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeIn('up', 0.9)} className='popular__card bg-green-950 p-10 pt-24 rounded-md relative'>
            <img src={Card3} alt="" className='w-56 absolute -top-32 left-1/2 transform -translate-x-1/2 duration-500' />
            <p className='italic'>Nephrolepis exaltaa</p>
            <h3>Boston fern</h3>
            <div className='text-yellow-500 text-xs py-3'>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-half-fill'></i>
              <i className='ri-star-line text-gray-400'></i>
              <i className='ri-star-line text-gray-400'></i>
            </div>
            <div className='flex items-center justify-between'>
              <p>$5</p>
              <button className='bg-yellow-400 py-1 px-2 rounded-sm text-xl'>
                <i className='ri-shopping-cart-fill'></i>
              </button>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={fadeIn('up', 1)} className='popular__card bg-green-950 p-10 pt-24 rounded-md relative'>
            <img src={Card4} alt="" className='w-56 absolute -top-32 left-1/2 transform -translate-x-1/2 duration-500' />
            <p className='italic'>Nephrolepis exaltaa</p>
            <h3>Boston fern</h3>
            <div className='text-yellow-500 text-xs py-3'>
              <i className='ri-star-fill'></i>
              <i className='ri-star-fill'></i>
              <i className='ri-star-half-fill'></i>
              <i className='ri-star-line text-gray-400'></i>
              <i className='ri-star-line text-gray-400'></i>
            </div>
            <div className='flex items-center justify-between'>
              <p className='text-xl'>$5</p>
              <button className='bg-yellow-400 py-1 px-2 rounded-sm text-xl'>
                <i className='ri-shopping-cart-fill'></i>
              </button>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default Popular;