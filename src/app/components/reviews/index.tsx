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
      <p className="ml-[80px] font3 font-light text-2xl mt-[100px] mb-8">Customers review</p>
      <h2 className="text-[40px] font-medium ml-[80px] mb-12 font3 text-[#0A0B0A]">In your own words -</h2>
      <div className="flex flex-row ml-[80px]">
        <img className="max-w-[100%]" src="/images/i1.svg" alt="i1" />
        <span className="ml-5 boreder rounded-sm"></span>
        <Swiper
          spaceBetween={5}
          slidesPerView={1.4} // Show a part of the next slide
          className='flex gap-5'
        >
          {review.map((reviews) => (
            <SwiperSlide key={reviews.id} className="w-auto">
              <li className='xl:w-[540px] xl:h-[430px] border-[2px] p-5 rounded-lg w-96 h-[340px]'>
                <p className='xl:text-xl text-right text-lg'>{reviews.date}</p>
                <img src="/images/q1.svg" alt="" className='w-12 h-12' />
                <p className='xl:text-3xl text-[#343434] xl:leading-10 text-xl'>{reviews.reviews}</p>
                <div className='flex justify-end'>
                  <img src="/images/q2.svg" alt="" className='w-12 h-12' />
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
