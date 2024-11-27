import React from 'react';
import Plant from '../assets/img/plant-1.png'
import Plant2 from '../assets/img/plant-2.png';
import Leaf from '../assets/img/leaf-3.png';
import Popular from './Popular';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const About = () => {
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

    const slideInFromRight = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 40,
                damping: 25,
                mass: 1,
                delay: 0.3,
            },
        },
    };


    return (
        <>
            <div className='relative overflow-hidden'>
                <div className='absolute -top-8 -right-12 opacity-50'>
                    <img src={Leaf} alt="" className='w-40 md:w-52 xl:w-64' />
                </div>
                <motion.div
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.5,
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.7 }}
                    className='flex flex-col items-center gap-3 text-cnter mb-10 md:mb-20'>
                    <motion.h2
                        variants={fadeIn('up', 0.3)}
                        className='title lg:mt-32 sm:mt-20'>About Us</motion.h2>
                    <motion.p variants={fadeIn('up', 0.5)} className='max-w-2xl'>Follow instruction for more</motion.p>
                </motion.div>

                <div className='container space-y-10 xl:space-y-0'>
                    <div className='flex flex-col items-center lg:flex-row gap-5'>
                        <motion.div
                            className="w-full lg:w-1/2"
                            initial={{ x: -200, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            <img
                                src={Plant}
                                className="w-full sm:-2/3 lg:w-full xl:w-2/3 mx-auto"
                                alt="Plant"
                            />
                        </motion.div>

                        {/* content */}
                        <div className='w-full lg:w-1/2'>
                            <motion.div
                                variants={slideInFromRight}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.5 }}
                                className='space-y-5'>
                                <h3 className='lg:text-3xl'>Make your
                                    <span className='text-yellow-400  lg:text-3xl  sm:text-3xl'>
                                        organic </span><br /> garden</h3>
                                <p className='text-slate-300 font-Lobster'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Vel cum nesciunt illo
                                    incidunt? Cumque voluptatum illum ea quos.
                                    Ipsum dolorum qui, deserunt, animi aperiam
                                    repellendus aliquam doloremque iste, voluptates
                                    labore eveniet assumenda!</p>
                            </motion.div>
                        </div>
                    </div>
                </div>


                <div className='container space-y-10 xl:space-y-0'>
                    <div className='flex flex-col items-center lg:flex-row-reverse gap-5'>
                        <motion.div
                            className="w-full lg:w-1/2"
                            initial={{ x: -200, opacity: 0 }}  
                            whileInView={{ x: 0, opacity: 1 }} 
                            transition={{ duration: 0.8 }} 
                            viewport={{ once: false, amount: 0.2 }} >
                            <img
                                src={Plant2} alt="" className='w-full sm:-2/3 lg:w-full xl:w-2/3  mx-auto' />
                        </motion.div>

                        {/* content */}
                        <div className='w-full lg:w-1/2'>
                            <motion.div
                                variants={slideInFromRight}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: false, amount: 0.5 }}
                                className='space-y-5'>
                                <h3 className='lg:text-3xl'>Come with us
                                    <span className='text-yellow-400  lg:text-3xl  sm:text-3xl'>
                                        grow up </span><br /> your plant</h3>
                                <p className='text-slate-300 font-Lobster'>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Vel cum nesciunt illo
                                    incidunt? Cumque voluptatum illum ea quos.
                                    Ipsum dolorum qui, deserunt, animi aperiam
                                    repellendus aliquam doloremque iste, voluptates
                                    labore eveniet assumenda!</p>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
            <Popular />
        </>
    )
}

export default About;