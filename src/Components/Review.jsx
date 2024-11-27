import React from 'react';
import Leaf from '../assets/img/leaf-4.png';
import Review1 from '../assets/img/review-1.jpg'; 

const Review = () => {
  return (
    <div className="relative overflow-hidden pb-60 ">
      <div className="absolute -top-8 -left-12 opacity-50 ">
        <img src={Leaf} alt="" className="w-40 md:w-52 xl:w-64 " />
      </div>
      <div className="flex flex-col items-center gap-3 text-center mb-40 md:mb-28">
        <h2 className="title sm:mt-20 text-yellow-500">Customer Review</h2>
        <p className="max-w-2xl">Follow instructions for more</p>
      </div>

      {/* Container for the review cards */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-12 ml-24 mr-24">
        {/* Card 1 */}
        <div className="flex flex-col gap-8 bg-green-900 rounded-md p-6 w-full lg:w-1/3">
          <p className="font-Lobster">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa esse nisi veniam rerum aliquam vitae..
          </p>
          <div>
            <img src={Review1} alt="Review 1" className="w-12 h-12 rounded-full" />
          </div>
          <div className="ml-2">
            <p className="text-yellow-500 uppercase">John Doe</p>
            <p>Designer</p>
          </div>
          <i className="ri-double-quotes-r text-4xl ml-auto"></i>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col gap-8 bg-green-900 rounded-md p-6 w-full lg:w-1/3">
          <p className="font-Lobster">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa esse nisi veniam rerum aliquam vitae..
          </p>
          <div>
            <img src={Review1} alt="Review 1" className="w-12 h-12 rounded-full" />
          </div>
          <div className="ml-2">
            <p className="text-yellow-500 uppercase">John Doe</p>
            <p>Designer</p>
          </div>
          <i className="ri-double-quotes-r text-4xl ml-auto"></i>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col gap-8 bg-green-900 rounded-md p-6 w-full lg:w-1/3">
          <p className="font-Lobster">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa esse nisi veniam rerum aliquam vitae..
          </p>
          <div>
            <img src={Review1} alt="Review 1" className="w-12 h-12 rounded-full" />
          </div>
          <div className="ml-2">
            <p className="text-yellow-500 uppercase">John Doe</p>
            <p>Designer</p>
          </div>
          <i className="ri-double-quotes-r text-4xl ml-auto"></i>
        </div>
      </div>
    </div>
  );
};

export default Review;

