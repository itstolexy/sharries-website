import Link from "next/link";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex lg:flex-row flex-col">
      <div className="mx-auto">
        <hr className="bg-[#DFDFDF] mt-[50px]" />
        <div className="lg:flex lg:my-10 font3 lg:mx-0 mx-10">
          <span className="">
            <p className="font-light lg:text-lg text-sm lg:mt-0 mt-5">About Us</p>
            <p className="font-normal lg:text-lg text-sm mt-4">Shop</p>
            <p className="font-normal lg:text-lg text-sm mt-2">Our Story</p>
            <p className="font-normal lg:text-lg text-sm mt-2">Blog</p>
          </span>
          <span className="ml-[130px]">
            <p className="font-light lg:text-lg text-sm lg:mt-0 mt-5">Help</p>
            <p className="font-normal lg:text-lg text-sm mt-4">
              You can <span className="underline text-[#4EAB35]">email</span>
            </p>
            <p className="font-normal lg:text-lg text-sm mt-2">FAQ</p>
            <p className="font-normal lg:text-lg text-sm mt-2">Shipping</p>
          </span>
          <span className="ml-[196px]">
            <p className="font-light lg:text-lg text-sm lg:mt-0 mt-5">Socials</p>
            <p className="font-normal lg:text-lg text-sm mt-4">Instagram</p>
            <p className="font-normal lg:text-lg text-sm mt-2">Twitter</p>
            <p className="font-normal lg:text-lg text-sm mt-2">Facebook</p>
          </span>
          <span className="ml-[231px] max-w-[280px]">
            <p className="font-light lg:text-lg text-sm lg:mt-0 mt-5">Email Sign-up</p>
            <p className="font-normal lg:text-lg text-sm mt-4">
              <span className="underline text-[#4EAB35] lg:text-lg text-sm">Sign Up</span> for
              Sharrie’s signature emails and receive latest news including
              exclusive offers
            </p>
            <p className="font-normal lg:text-lg text-sm mt-4">Follow Us</p>
          </span>
        </div>
        <hr className="bg-[#DFDFDF] lg:mt-0 mt-5" />
        <div className="mt-2">
          <span className="flex flex-row">
            <p className="lg:ml-[60px] ml-10 lg:text-sm text-xs font-normal">
              &copy; sharrie’s signature 2020
            </p>
            <span className="flex flex-row lg:ml-auto ml-4">
              <p className="lg:text-sm text-xs font-normal">Legal & Privacy</p>
              <p className="lg:text-sm text-xs font-normal lg:mr-[80px] ml-4">Cookies</p>
            </span>
          </span>
          <h2 className="flex text-[#4EAB35] lg:text-2xl text-sm font-normal font1 justify-center my-6">
          <Link href="/">
            Sharrie’s Signature
          </Link>
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
