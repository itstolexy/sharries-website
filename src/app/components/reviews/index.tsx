/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Reviews: React.FC = () => {
    return (
        <section>
        <p className="ml-[80px] font3 font-light text-2xl mt-[100px] mb-8">Customers review</p>
        <h2 className="text-[40px] font-medium ml-[80px] mb-12 font3">In your own words -</h2>
        <div className="flex flex-row ml-[80px]">
          <img className="max-w-[auto]" src="/images/i1.svg" alt="i1" />
          <span className="ml-5 boreder rounded-sm"></span>
        </div>
        <hr className="mx-[120px] mt-12 bg-[#FAFAFA] border-double border-2" />
      </section>
    );
};

export default Reviews;
