import React from 'react'
import { motion } from 'framer-motion';

const Footer = () => {
    const fadeIn = (direction, duration = 0.5) => {
        return {
            hidden: {
                opacity: 0,
                y: direction === 'up' ? -50 : 50,
            },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 25,
                    delay: duration, // Delay for staggered animations
                },
            },
        };
    };

    return (
        <div>
            <div className='bg-yellow-100  text-green-950 pt-20 pb-10 md:pt-28 relative '>
                <div className='container text-white absolute top-0 left-0 right-0 -translate-y-1/2 mt-12'>
                    <div className='bg-green-950 px-10 pt-5 pb-10 space-y-5 rounded-md'>
                        <h3><span className='text-yellow-500'>Subscribe</span> to our newsletter</h3>


                        <div className='flex flex-col md:flex-row gap-3 md:gap-5 '>
                            <input type="email" placeholder='Enter your email'
                             className='w-full px-5 py-3 text-green-900 rounded-md outline-none ' />
                            <button className='flex items-center gap-1 justify-center bg-green-900 px-5 py-3 rounded-md hover:opacity-80 duration-300 '>
                                <span>Subscribe</span>
                                <i class='ri-send-plane-2-fill'></i>
                            </button>
                        </div>
                    </div>
                </div>


                {/* social icons */}
                <div className='container mt-16 mb-10'>
                    <div className='border-b border-green-500 relative mt-32 '>
                        <div className='absolute top-0 transform -tranlate-y-1/2 left-0 right-0 max-w-36 mx-auto'>
                            <div className=' bg-yellow-100 text-lg text-center space-x-2 -mt-4 '>
                                <i class='ri-facebook-fill hover:text-yellow-500 duration-300 cursor-pointer '></i>
                                <i class='ri-twitter-fill hover:text-yellow-500 duration-300 cursor-pointer text-base'></i>
                                <i class='ri-instagram-fill hover:text-yellow-500 duration-300 cursor-pointer text-base'></i>
                                <i class='ri-linkedin-fill hover:text-yellow-500 duration-300 cursor-pointer text-base'></i>
                            </div>
                        </div>
                    </div>
                </div>


                <motion.div 
                   initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    variants={fadeIn('up', 0.3)} className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                 xl:grid-cols-4  gap-8 text-center md:text-start'>
                    <div>
                        <div className='text-4xl text-green-700 text-center inline-block '>
                            <i class=' ri-leaf-fill' ></i>
                            <p className='font-Lobster text-xl sm:text-2xl'>IndorePlants.</p>
                        </div>
                    </div>


                    <div>
                        <p className='mb-5  text-xl '>
                            <p className='font-bold mb-5'>Quick Links</p>
                            <div className='flex flex-col gap-2 font-jost'>
                                <a href="#">Plants</a>
                                <a href="#">Flowers</a>
                                <a href="#">Gardening</a>
                                <a href="#">Seeds</a>
                                <a href="#">Shipping</a>
                            </div>
                        </p>
                    </div>

                    <div>
                        <p className='mb-8  text-xl'>
                            <p className='font-bold mb-5'>Popular Services</p>
                            <div className='flex flex-col gap-1 '>
                                <a href="#">Tree Planting</a>
                                <a href="#">Grass cutting</a>
                                <a href="#">Weeds Control</a>
                                <a href="#">Project</a>
                            </div>
                        </p>
                    </div>

                    <div>
                        <p className='mb-5  text-xl'>
                            <p className='font-bold mb-5'>Contact Us</p>
                            <div className='flex flex-col gap-1'>
                                <a href='tel+88 033 307 809 6d4' > +88 033 307 809 6d4</a>
                                <a href='mailto:lightcodecamp@gmail.com'>User@gmail.com</a>

                                <br />
                                <p>1234 Tailwind Ave , City</p>
                                <p>Kuwait</p>
                            </div>
                        </p>
                    </div>
                </motion.div>

                {/* copyright */}
                <motion.div  
                variants={fadeIn('up', 0.4)} 
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className="container">
                <p className='text-center mt-10 poacity-50'>Copyright &copy;|by Fatima 2024. All rights reserved.</p>

                </motion.div>




                {/* scroll up  */}
                <a href="#" className='bg-yellow-400 fixed inline-block px-3 py-1 md:py-2 md:px-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300 '>
                    <i class='ri-arrow-up-line'></i>
                </a>





            </div>
        </div>
    )
}

export default Footer;