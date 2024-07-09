'use client';
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Product from "./components/product";
import Collections from "./components/collectionsSection";
import Promotion from "./components/promotion";
import FeaturedProducts from "./components/featuredProducts";
import MightLike from "./components/mightLike";
import Community from "./components/community";
import Reviews from "./components/reviews";
import { useRouter } from "next/navigation";


const HomePage = () => {

  // const handleAlert = () => {
  //   alert('Alert button clicked!');
  // };


  // const handleRedirect = () => {
  //   window.location.href = 'https://example.com';
  // };

  // const handleLog = () => {
  //   console.log('Log button clicked!');
  // };

  const router = useRouter();

  const handleButtonClick = (name: string) => {
    router.push(`/productdetails/${name}`);
  };

  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Product />
      <Collections />
      <FeaturedProducts onButtonClick={handleButtonClick} />
      <Promotion />
      <MightLike />
      <Community />
      <Reviews />
      <Footer />
    </main >
  );
}

export default HomePage;