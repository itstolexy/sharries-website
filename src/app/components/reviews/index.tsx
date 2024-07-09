/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const review = [
  {
    id: 1,
    reviews: 'I’ve been using this RadiantGlow Vitamin C Serum for a few weeks, and my skin has never looked better! It’s brighter, smoother, and more even-toned.',
    name: 'Jane D.',
    date: '01/04/24',
  },
  {
    id: 2,
    reviews: "I’ve been using this RadiantGlow Vitamin C Serum for a few weeks, and my skin has never looked better! It’s brighter, smoother, and more even-toned.",
    name: 'Sarah K.',
    date: '21/07/24',
  },
];

export const Reviews: React.FC = () => {
  return (
    <section className="overflow-hidden">
      <p className="lg:ml-[80px] font3 font-light lg:text-2xl mx-10 text-md lg:mt-[100px] mt-10 mb-8">Customers review</p>
      <h2 className="lg:text-[40px] text-lg font-medium lg:ml-[80px] mx-10 lg:mb-12 mb-6 font3 text-[#0A0B0A]">In your own words -</h2>
      <div className="flex flex-row lg:ml-[80px] ml-10">
        <img className="lg:max-w-[100%] max-w-[160px]" src="/images/i1.svg" alt="i1" />
        <span className="ml-5 boreder rounded-sm"></span>
        <Swiper
          spaceBetween={5}
          slidesPerView={1.4} // Show a part of the next slide
          className='flex gap-5'
        >
          {review.map((reviews) => (
            <SwiperSlide key={reviews.id} className="w-auto">
              <li className='xl:w-[540px] xl:h-[430px] border-[2px] p-5 rounded-lg w-96 lg:h-[340px] h-[190px]'>
                <p className='xl:text-xl text-right text-lg'>{reviews.date}</p>
                <img src="/images/q1.svg" alt="" className='lg:w-12 w-6 lg:h-12 h-6' />
                <p className='xl:text-3xl text-[#343434] xl:leading-10 lg:text-xl text-sm'>{reviews.reviews}</p>
                <div className='flex justify-end'>
                  <img src="/images/q2.svg" alt="" className='lg:w-12 w-6 lg:h-12 h-6' />
                </div>
                <p className='text-xl text-[#5A5A5A]'>-{reviews.name}</p>
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <hr className="mx-[120px] mt-12 bg-[#FAFAFA] border-double border-2" />
    </section>
  );
};

export default Reviews;
