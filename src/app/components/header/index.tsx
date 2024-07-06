/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
    return (
        <>
            <header>
                <nav className="flex flex-row mt-12 mb-14 mx-[80px]">
                    <div className="flex flex-row">
                        <img className=""
                            src="/images/nav.svg"
                            alt="nav" />
                        <p className="ml-2 text-sm font-normal mt-3">
                            Menu
                        </p>
                    </div>
                    <div className="flex flex-row ml-[50px]">
                        <img
                            className=""
                            src="/images/search.svg"
                            alt="nav" />
                        <p className="ml-2 text-sm font-normal mt-3 w-[77px]">
                            Search
                        </p>
                    </div>

                    <h2 className="flex text-[#4EAB35] text-[32px] font-normal mx-auto">Sharrie’s Signature</h2>


                    <div className="flex flex-row gap-2 max-w-full">
                        <img className="ml-[25px]" src="/images/phone.svg" alt="phone" />
                        <p className="ml-2 text-sm font-normal mt-3">Contact Us</p>
                    </div>
                    <div className="flex flex-row gap-2">
                        <img className="ml-[25px]" src="/images/cart.svg" alt="cart" />
                        <p className="ml-2 text-sm font-normal mt-3">Cart</p>
                    </div>

                    <img className="ml-[50px]" src="/images/profile.svg" alt="profile" />

                </nav>

            </header>
        </>
    );
};

export default Header;