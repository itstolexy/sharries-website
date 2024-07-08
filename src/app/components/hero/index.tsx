/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Hero: React.FC = () => {
    return (
        <div className="bg-[url('/images/bg1.svg')] bg-cover bg-center h-[85vh] w-full">
            <div className="flex flex-col justify-center items-center text-white">
                <h1 className="lg:font-bold sm:font-bold lg:text-[64px] sm:text-[22.43px] mt-[126px] font2">Unveil Your Natural Radiance</h1>
                <p className="font-normal mt-6 font3 lg:text-2xl sm:text-xs max-w-[782px] text-center">Discover the secret to radiant, healthy skin with our exclusive range of skincare solutions.</p>
                <div className="flex flex-row">
                    <button className="w-[118px] h-12 gap-2 bg-[#408C2B] mt-[60px] rounded-md text-white" type="button">
                        <div className="flex flex-row ml-4">
                            <p className="font4 text-base sm:text-sm">Explore</p>
                            <img className="ml-2" src="/images/a-r.svg" alt="" width="auto" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
