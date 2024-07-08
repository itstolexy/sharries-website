/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Header: React.FC = () => {
  return (
    <header>
      <nav className="flex flex-row my-5 mx-[80px] font3">
        <div className="flex flex-row">
          <img className="w-6 h-6" src="/images/nav.svg" alt="nav" />
          <p className="ml-2 text-sm font-normal mt-1">Menu</p>
        </div>
        <div className="lg:flex flex-row ml-[50px] hidden sm:block">
          <img className="w-6 h-6" src="/images/search.svg" alt="search" />
          <p className="ml-2 text-sm font-normal w-[77px] mt-1">Search</p>
        </div>
        <h2 className="flex text-[#4EAB35] lg:text-[32px] sm:text-xl font-normal mx-auto font1 -mt-2">
          Sharrie’s Signature
        </h2>
        <div className="lg:flex flex-row gap-2 max-w-full hidden sm:block">
          <img className="ml-[25px] w-6 h-6" src="/images/phone.svg" alt="phone" />
          <p className="ml-2 text-sm font-normal mt-1">Contact Us</p>
        </div>
        <div className="flex flex-row gap-2">
          <img className="ml-[25px] w-6 h-6" src="/images/cart.svg" alt="cart" />
          <p className="ml-2 text-sm font-normal mt-1 hidden sm:block">Cart</p>
        </div>
        <img className="ml-[50px] h-6 w-6 hidden sm:block" src="/images/profile.svg" alt="profile" />
      </nav>
    </header>
  );
};

export default Header;
