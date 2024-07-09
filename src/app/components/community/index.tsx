/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export const Community: React.FC = () => {
    return (
        <section className="bg-[#E4F5E0]">
        <div className="lg:flex flex-row lg:ml-[80px] mx-10 lg:py-0 py-10">

        <div className="ml-auto lg:hidden -mt-10">
            <div className="flex flex-row justify-end">
              <img className="max-w-[101px]" src="/images/j1.svg" alt="j1" />
              <img className="max-w-[146px] ml-3" src="/images/j2.svg" alt="j2" />
            </div>
            <div className="flex flex-row mt-3 justify-end mb-10">
              <img className="max-w-[80px]" src="/images/j3.svg" alt="j3" />
              <img className="max-w-[139px]" src="/images/j4.svg" alt="j4" />
            </div>
          </div>
          
          <div className="lg:mt-[178px] lg:max-w-[475px]">
            <h1 className="font-bold lg:text-[64px] text-3xl text-left font2">Join our online community</h1>
            <p className="font-normal lg:mt-8 mt-4 font3 lg:text-xl text-sm">Stay updated with the latest skincare tips, product launches, and exclusive offers</p>
            <Link href=""><p className="font-normal font3 text-base mt-5 lg:mt-[42.5px] text-[#40BC2B] underline underline-offset-[14px]">Follow Us</p></Link>
          </div>

          <div className="ml-auto hidden lg:block">
            <div className="flex flex-row">
              <img className="ml-[80px] mr-[22px] mt-[59px] max-w-[100%]" src="/images/j1.svg" alt="j1" />
              <img className="max-w-[100%] h-auto" src="/images/j2.svg" alt="j2" />
            </div>
            <div className="flex flex-row">
              <img className="ml-[150px] mr-[29px] mt-[76px] max-w-[100%] h-auto" src="/images/j3.svg" alt="j3" />
              <img className="mt-[34px] max-w-[100%] h-auto" src="/images/j4.svg" alt="j4" />
            </div>
          </div>
        </div>
      </section>


    );
};

export default Community;
