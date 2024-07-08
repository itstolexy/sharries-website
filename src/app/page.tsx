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

export default function Home() {

  // const handleAlert = () => {
  //   alert('Alert button clicked!');
  // };


  // const handleRedirect = () => {
  //   window.location.href = 'https://example.com';
  // };

  const handleLog = () => {
    console.log('Log button clicked!');
  };

  return (
    <main>
      <Header />
      <Hero />
      <Product />
      <Collections />
      <FeaturedProducts />
      < Promotion />
      <MightLike />
      <Community />
      <Reviews />
      <Footer />
    </main >
  );
}
