import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";

const Services = () => {


    return (
        <>
            <div className='bg-white text-green-900 py-20 mt-10  '>
                <motion.div
                    variants={fadeIn('up', 0.3)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    className="container w-full grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 animate-slide-in group-hover:scale-90 duration-400"
                >
                    {/* Card 1 */}
                    <motion.div
                        variants={fadeIn('up', 0.3)}
                        className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:translate-y-1 duration-300 space-y-5"
                    >
                        <div className="flex items-center gap-5">
                            <i className="ri-truck-line text-3xl md:text-4xl xl:text-5xl"></i>
                            <p className="md:text-lg font-bold">Fast <br /> Delivery</p>
                        </div>
                        <p className="font-Lobster">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt provident delectus.
                        </p>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={fadeIn('up', 0.5)} // Slight delay for the second card
                        className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:translate-y-1 duration-300 space-y-5"
                    >
                        <div className="flex items-center gap-5">
                            <i className="ri-customer-service-line text-3xl md:text-4xl xl:text-5xl text-green-900"></i>
                            <p className="md:text-lg font-bold lg:font-bold">Great Customer <br /> Services</p>
                        </div>
                        <p className="font-Lobster">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt provident delectus.
                        </p>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        variants={fadeIn('up', 0.7)} // Longer delay for the third card
                        className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:translate-y-1 duration-300 space-y-5"
                    >
                        <div className="flex items-center gap-5">
                            <i className="ri-money-dollar-circle-line text-3xl md:text-4xl xl:text-5xl"></i>
                            <p className="md:text-lg font-bold">Affordable <br /> Price</p>
                        </div>
                        <p className="font-Lobster">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt provident delectus.
                        </p>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div
                        variants={fadeIn('up', 1)} // Even longer delay for the fourth card
                        className="border border-green-900 p-5 cursor-pointer rounded-md hover:shadow-2xl hover:translate-y-1 duration-300 space-y-5"
                    >
                        <div className="flex items-center gap-5">
                            <i className="ri-plant-line text-3xl md:text-4xl xl:text-5xl"></i>
                            <p className="md:text-lg font-bold">Original <br /> Plants</p>
                        </div>
                        <p className="font-Lobster">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt provident delectus.
                        </p>
                    </motion.div>
                </motion.div>


            </div>

        </>
    )
}

export default Services;