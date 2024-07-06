'use client';
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import Header from "./components/header";
import Collection from "./components/collection";
import Featured from "./components/featured";
import Link from "next/link";
import { Footer } from "./components/footer";

export default function Home() {

  // const handleAlert = () => {
  //   alert('Alert button clicked!');
  // };

  const handleLog = () => {
    console.log('Log button clicked!');
  };

  // const handleRedirect = () => {
  //   window.location.href = 'https://example.com';
  // };

  return (
    <main className="">
      <Header />

      <div className="flex flex-col justify-center items-center mt-[126px]">
        <h1 className="font-bold text-[64px]"> Unveil Your Natural Radiance</h1>
        <p className="font-normal mt-6 ">Discover the secret to radiant, healthy skin with our exclusive range of skincare solutions.</p>
        <div className="flex flex-row">
          <button className="w-[118px] h-12 gap-2 bg-[#408C2B] mt-[60px] rounded-md text-white"
            type="button">
            <div className="flex flex-row ml-4">
              <p>Explore</p>
              <img className="ml-2" src="/images/a-r.png" alt="" width="auto" />
            </div>
          </button>
        </div>
      </div>

      <section className="bg-[#E4F5E0]">
        <div className="flex flex-row mx-20">
          <img className="mt-[219px] max-w-[500px] h-auto -mb-[80px]" src="/images/woman.svg" alt="" width="100%" height="auto" />
          <div className="ml-32">
            <div className="flex flex-row mt-[100px]">
              <img className="" src="/images/box.svg" alt="" />
              <p className="text-[#40BC2B] ml-6">Our Product</p>
            </div>
            <span>
              <h1 className="font-bold text-[64px] text-[0A0B0A] mt-8">Unlock Your Glow</h1>
              <p>Explore our collection and transform your skincare routine with Sharrie’s Signature
                touch. Your journey to luminous, flawless skin starts here.</p>
            </span>
            <span className="flex flex-row mt-8">
              <img className="" src="/images/mark.svg" alt="" />
              <p className="text-black ml-6">Natural Ingredients: Harnessing the power of nature with
                ethically sourced, pure ingredients.</p>
            </span>
            <span className="flex flex-row mt-8">
              <img className="" src="/images/mark.svg" alt="" />
              <p className="text-black ml-6">Expertly Formulated: Developed by skincare experts to deliver visible, long-lasting results.</p>
            </span>
            <span className="flex flex-row mt-8">
              <img className="" src="/images/mark.svg" alt="" />
              <p className="text-black ml-6">Cruelty-Free: Committed to ethical practices with no animal testing.</p>
            </span>
            <div className="flex flex-row">
              <button className="w-[139px] h-12 gap-2 bg-[#408C2B] mt-[60px] rounded-md text-white"
                type="button">
                <span className="flex flex-row ml-4">
                  <p>Shop Now</p>
                  <img className="ml-2" src="/images/a-r.png" alt="" width="auto" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-10">
        <div>
          <h2 className="mx-[80px] font-normal text-2xl mt-[222px] mb-4">Our Collections</h2>
          <hr />
        </div>
        <div className="mx-[80px] flex flex-row mb-4">
          <Collection
            image="/images/p1.svg"
            title="Cleanse & Prep"
          />
          <Collection
            image="/images/p2.svg"
            title="Moisturize & Protect"
          />
          <Collection
            image="/images/p3.svg"
            title="Treat & Nourish"
          />
          <Collection
            image="/images/p4.svg"
            title="Body Care"
          />
        </div>
        <hr />
      </section>

      <section className="mt-[100px]">
        <div className="mb-[46px]">
          <h2 className="mx-[80px] font-normal text-2xl mb-4">Featured Products</h2>
          <hr />
          <div className="mx-[80px] flex flex-row mb-4">
            <Featured
              image={"/images/f1.svg"}
              title={"Repair Scrub"}
              price={"$19.00"}
              buttonText="Add to cart"
              buttonAction={handleLog} />
            <Featured
              image={"/images/f2.svg"}
              title={"Body Serum"}
              price={"$28.00"}
              buttonText="Add to cart"
              buttonAction={handleLog} />
            <Featured
              image={"/images/f3.svg"}
              title={"3 in 1 Repair kit"}
              price={"$85.00"}
              buttonText="Add to cart"
              buttonAction={handleLog} />
          </div>
          <div className="mx-[80px] flex flex-row mb-4">
            <Featured
              image={"/images/f4.svg"}
              title={"Deep Moisture Body Lotion"}
              price={"$35.00"}
              buttonText="Add to cart"
              buttonAction={handleLog} />
            <Featured
              image={"/images/f5.svg"}
              title={"Bloom serum"}
              price={"$15.00"}
              buttonText="Add to cart"
              buttonAction={handleLog} />
            <Featured
              image={"/images/f6.svg"}
              title={"3 in 1 Repair kit"}
              price={"$20.00"}
              buttonText="Add to cart"
              buttonAction={handleLog} />
          </div>
          <hr />
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center mt-[126px]">
          <h1 className="font-bold text-[64px] break-words text-wrap max-w-[476px] text-center">Get 20% off
            your first order</h1>
          <p className="font-normal mt-6 max-w-[756px] text-2xl text-center">From radiant serums to hydrating moisturizers,
            experience the ultimate in skincare indulgence</p>
          <p className="font-normal mt-12 underline underline-offset-[14px]">Explore our Product</p>
        </div>
      </section>


      <section className="mt-[100px]">
        <div className="mb-[46px]">
          <h2 className="mx-[80px] font-normal text-2xl mb-4">You might like</h2>
          <hr />
          <div className="mx-[80px] flex flex-row mb-4">
            <Featured
              image={"/images/y1.svg"}
              title={"3 in 1 Repair kit"}
              price={"$85.00"}
              buttonText="Add to cart"
              buttonAction={handleLog} />
            <Featured
              image={"/images/y2.svg"}
              title={"Repair Scrub"}
              price={"$19.00"}
              buttonText="Add to cart"
              buttonAction={handleLog} />
            <Featured
              image={"/images/y3.svg"}
              title={"Bloom serum"}
              price={"$28.00"}
              buttonText="Add to cart"
              buttonAction={handleLog} />
          </div>
          <div className="mx-[80px] flex flex-row mb-4">
            <Featured
              image={"/images/y4.svg"}
              title={"Bloom serum"}
              price={"$15.00"}
              buttonText="Add to cart"
              buttonAction={handleLog} />
            <Featured
              image={"/images/y5.svg"}
              title={"Deep moisture Body lotion"}
              price={"$35.00"}
              buttonText="Add to cart"
              buttonAction={handleLog} />
            <Featured
              image={"/images/y6.svg"}
              title={"3 in 1 Repair kit"}
              price={"$20.00"}
              buttonText="Add to cart"
              buttonAction={handleLog} />
          </div>
          <hr />
        </div>
      </section>


      <section className="bg-[#E4F5E0] bg">
        <div className="flex flex-row ml-[80px]">
          <span className="mt-[178px] max-w-[475px]">
            <h1 className="font-bold text-[64px] text-left">Join our online community</h1>
            <p className="font-normal mt-8 ">Stay updated with the latest skincare tips,
              product launches, and exclusive offers</p>
            <Link href={""}><p className="font-normal mt-[42.5px] text-[#40BC2B] underline underline-offset-[14px]">
              Follow Us</p></Link>
          </span>
          <div>
            <span className="flex flex-row">
              <img className="ml-[164px] mr-[44px] mt-[59px]" src="/images/j1.svg" alt="j1" />
              <img src="/images/j2.svg" alt="j2" />
            </span>
            <span className="flex flex-row">
              <img className="ml-[298px] mr-[29px] mt-[76px]" src="/images/j3.svg" alt="j3" />
              <img className="mt-[34px]" src="/images/j4.svg" alt="j4" />
            </span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-[40px] font-medium mt-[100px] ml-[80px] mb-[64px]">In your own words -</h2>
        <div className="flex flex-row">
          <div className="flex flex-row ml-[80px]">
            <img className="max-w-[auto]" src="/images/i1.svg" alt="i1" />
            <span className="ml-5 boreder rounded-sm"></span>
          </div>
        </div>
        <hr className="mx-[120px] mt-12 bg-[#FAFAFA] border-double border-2" />
      </section>
      <Footer />
    </main>
  );
}
