/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Promotion: React.FC = () => {
    return (
        <section>
            <div className="bg-[url('/images/bg2.svg')] bg-cover bg-center lg:h-[80vh] w-full">
                <div className="flex flex-col justify-center items-center lg:mt-[126px] text-white">
                    <h1 className="font-bold lg:text-[64px] text-3xl break-words max-w-[232px] lg:max-w-[476px]
                     text-center lg:mt-[87.5px] mt-10">
                        Get 20% off your first order
                    </h1>
                    <p className="font-normal mt-6 lg:max-w-[756px] lg:text-2xl text-sm max-w-[232px] text-center">
                        From radiant serums to hydrating moisturizers, experience the ultimate in skincare
                        indulgence
                    </p>
                    <p className="font-normal mt-12 underline underline-offset-[14px] lg:text-2xl text-sm mb-10">
                        Explore our Product
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Promotion;
