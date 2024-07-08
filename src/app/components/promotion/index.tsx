/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Promotion: React.FC = () => {
    return (
        <section>
            <div className="bg-[url('/images/bg2.svg')] bg-cover bg-center h-[80vh] w-full">
                <div className="flex flex-col justify-center items-center mt-[126px] text-white">
                    <h1 className="font-bold text-[64px] break-words max-w-[476px] text-center mt-[87.5px]">Get 20% off your first order</h1>
                    <p className="font-normal mt-6 max-w-[756px] text-2xl text-center">From radiant serums to hydrating moisturizers, experience the ultimate in skincare indulgence</p>
                    <p className="font-normal mt-12 underline underline-offset-[14px]">Explore our Product</p>
                </div>
            </div>
        </section>
    );
};
export default Promotion;
