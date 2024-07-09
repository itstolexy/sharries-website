/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

export const Product: React.FC = () => {
    return (
        <section className="bg-[#E4F5E0] lg:py-0 py-10">
            <div className="lg:flex lg:flex-row sm:flex-col lg:mx-20 mx-10">
                    <img className="lg:mt-[219px] lg:max-w-[400px] sm:max-w-24 h-[auto] lg:-mb-[200px]"
                        src="/images/woman.svg"
                        alt=""
                         />
               
                <div className="lg:ml-24 sm:mt-5 mx-auto">
                    <div className="flex flex-row lg:mt-[100px] mt-10">
                        <img
                            src="/images/box.svg"
                            alt="" />
                        <p className="text-[#40BC2B] ml-6 font3 font-light">
                            Our Product
                        </p>
                    </div>
                    <h1 className="font-bold lg:text-[64px] text-3xl text-[#0A0B0A] lg:mt-14 mt-7  font2">
                        Unlock Your Glow
                    </h1>
                    <p className="font3 lg:text-lg text-sm lg:mt-8 mt-4">
                        Explore our collection and transform your skincare routine with Sharrie’s Signature touch.
                        Your journey to luminous, flawless skin starts here.
                    </p>
                    <div className="flex flex-row lg:mt-8 lg:text-lg text-sm mt-4 font3">
                        <img className="w-auto" src="/images/mark.svg" alt="" />
                        <p className="text-black lg:text-lg text-sm ml-6">Natural Ingredients: Harnessing the power of nature with ethically sourced, pure ingredients.</p>
                    </div>
                    <div className="flex flex-row lg:mt-8 lg:text-lg text-sm mt-4 font3">
                        <img src="/images/mark.svg" alt="" />
                        <p className="text-black ml-6">Expertly Formulated: Developed by skincare experts to deliver visible, long-lasting results.</p>
                    </div>
                    <div className="flex flex-row lg:mt-8 lg:text-lg text-sm mt-4 font3">
                        <img src="/images/mark.svg" alt="" />
                        <p className="text-black ml-6">Cruelty-Free: Committed to ethical practices with no animal testing.</p>
                    </div>
                    <div className="lg:mb-7">
                        <Link href="#feat">
                            <button className="lg:w-[139px] w-[90px] h-12 gap-2 bg-[#408C2B] mt-[60px] rounded-md text-white" type="button">
                                <div className="flex flex-row ml-4 font4">
                                    <p className="lg:text-base text-[10px] sm:text-sm">Shop Now</p>
                                    <img className="ml-2 lg:w[auto] w-[14px]" src="/images/a-r.svg" alt="" width="auto" />
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Product;
