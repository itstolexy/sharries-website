import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-row">
      <div>
        <hr className="bg-[#DFDFDF] mt-[120px]" />
        <div className="flex mt-[100px] mb-[137px] font3">
          <span className="ml-[80px]">
            <p className="font-light text-lg">About Us</p>
            <p className="font-normal text-lg mt-8">Shop</p>
            <p className="font-normal text-lg mt-4">Our Story</p>
            <p className="font-normal text-lg mt-4">Blog</p>
          </span>
          <span className="ml-[234px]">
            <p className="font-light text-lg">Help</p>
            <p className="font-normal text-lg mt-8">
              You can <span className="underline text-[#4EAB35]">email</span>
            </p>
            <p className="font-normal text-lg mt-4">FAQ</p>
            <p className="font-normal text-lg mt-4">Shipping</p>
          </span>
          <span className="ml-[196px]">
            <p className="font-light text-lg">Socials</p>
            <p className="font-normal text-lg mt-8">Instagram</p>
            <p className="font-normal text-lg mt-4">Twitter</p>
            <p className="font-normal text-lg mt-4">Facebook</p>
          </span>
          <span className="ml-[231px] max-w-[280px]">
            <p className="font-light text-lg">Email Sign-up</p>
            <p className="font-normal text-lg mt-8">
              <span className="underline text-[#4EAB35]">Sign Up</span> for
              Sharrie’s signature emails and receive latest news including
              exclusive offers
            </p>
            <p className="font-normal text-lg mt-8">Follow Us</p>
          </span>
        </div>
        <hr className="bg-[#DFDFDF]" />
        <div className="mt-4">
          <span className="flex flex-row">
            <p className="ml-[80px] text-sm font-normal">
              &copy; sharrie’s signature 2020
            </p>
            <span className="flex flex-row ml-auto">
              <p className="text-sm font-normal">Legal & Privacy</p>
              <p className="text-sm font-normal mr-[80px] ml-8">Cookies</p>
            </span>
          </span>
          <h2 className="flex text-[#4EAB35] text-2xl font-normal font1 justify-center mt-6 mb-[58px]">
            Sharrie’s Signature
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
