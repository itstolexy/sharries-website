/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Product: React.FC = () => {
    return (
        <section className="bg-[#E4F5E0]">
            <div className="lg:flex lg:flex-row sm:flex-col mx-20">
                <img className="lg:mt-[219px] lg:max-w-[100%] h-auto lg:-mb-[80px]" src="/images/woman.svg" alt="" width="100%" height="auto" />
                <div className="ml-32">
                    <div className="flex flex-row mt-[100px]">
                        <img src="/images/box.svg" alt="" />
                        <p className="text-[#40BC2B] ml-6 font3 font-light">Our Product</p>
                    </div>
                    <h1 className="font-bold text-[64px] text-[#0A0B0A] mt-8 font2">Unlock Your Glow</h1>
                    <p>Explore our collection and transform your skincare routine with Sharrie’s Signature touch. Your journey to luminous, flawless skin starts here.</p>
                    <div className="flex flex-row mt-8 font3">
                        <img src="/images/mark.svg" alt="" />
                        <p className="text-black ml-6">Natural Ingredients: Harnessing the power of nature with ethically sourced, pure ingredients.</p>
                    </div>
                    <div className="flex flex-row mt-8 font3">
                        <img src="/images/mark.svg" alt="" />
                        <p className="text-black ml-6">Expertly Formulated: Developed by skincare experts to deliver visible, long-lasting results.</p>
                    </div>
                    <div className="flex flex-row mt-8 font3">
                        <img src="/images/mark.svg" alt="" />
                        <p className="text-black ml-6">Cruelty-Free: Committed to ethical practices with no animal testing.</p>
                    </div>
                    <button className="w-[139px] h-12 gap-2 bg-[#408C2B] mt-[60px] rounded-md text-white" type="button">
                        <div className="flex flex-row ml-4 font4">
                            <p>Shop Now</p>
                            <img className="ml-2" src="/images/a-r.svg" alt="" width="auto" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Product;
