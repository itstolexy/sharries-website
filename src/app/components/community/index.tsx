/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export const Community: React.FC = () => {
    return (
        <section className="bg-[#E4F5E0]">
        <div className="flex flex-row ml-[80px]">
          <div className="mt-[178px] max-w-[475px]">
            <h1 className="font-bold text-[64px] text-left font2">Join our online community</h1>
            <p className="font-normal mt-8 font3">Stay updated with the latest skincare tips, product launches, and exclusive offers</p>
            <Link href=""><p className="font-normal font3 text-base mt-[42.5px] text-[#40BC2B] underline underline-offset-[14px]">Follow Us</p></Link>
          </div>

          <div>
            <div className="flex flex-row">
              <img className="ml-[164px] mr-[44px] mt-[59px]" src="/images/j1.svg" alt="j1" />
              <img src="/images/j2.svg" alt="j2" />
            </div>
            <div className="flex flex-row">
              <img className="ml-[298px] mr-[29px] mt-[76px]" src="/images/j3.svg" alt="j3" />
              <img className="mt-[34px]" src="/images/j4.svg" alt="j4" />
            </div>
          </div>
        </div>
      </section>


    );
};

export default Community;