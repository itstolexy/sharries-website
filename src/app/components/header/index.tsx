/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface HeaderProps {
  cartCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount }) => {
  const router = useRouter();

  const navigateToCart = () => {
    router.push("/cartpage");
  };
  
  return (
    <header>
      <nav className="flex flex-row my-5 lg:mx-[80px] mx-10 font3">
        <div className="flex flex-row">
          <img className="w-6 h-6" src="/images/nav.svg" alt="nav" />
          <p className="ml-2 text-sm font-normal mt-1">Menu</p>
        </div>
        <div className="lg:flex flex-row ml-[50px] hidden sm:block">
          <img className="w-6 h-6" src="/images/search.svg" alt="search" />
          <p className="ml-2 text-sm font-normal w-[77px] mt-1">Search</p>
        </div>


        <h2 className="flex text-[#4EAB35] lg:text-[32px] sm:text-xl font-normal mx-auto font1">
          <Link href="/">
            Sharrie’s Signature
          </Link>
        </h2>


        <div className="lg:flex flex-row gap-2 max-w-full hidden sm:block">
          <img className="ml-[25px] w-6 h-6" src="/images/phone.svg" alt="phone" />
          <p className="ml-2 text-sm font-normal mt-1">Contact Us</p>
        </div>
        <div className="flex flex-row gap-2" onClick={navigateToCart} style={{ cursor: 'pointer' }}>
          <img className="ml-[25px] w-6 h-6" src="/images/cart.svg" alt="cart" />
          <p className="ml-2 text-sm font-normal mt-1 hidden sm:block">Cart {cartCount > 0 && <span>({cartCount})</span>}</p>
        </div>
        <img className="ml-[50px] h-6 w-6 hidden sm:block" src="/images/profile.svg" alt="profile" />
      </nav>
    </header>
  );
};

export default Header;
