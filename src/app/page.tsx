'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
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
import axios from "axios";

type Products = {
  id: string;
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  image: string;
  price: string;
  buttonText: string;
};

const HomePage = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.timbu.cloud/products?organization_id=4bac8a4c958448978f3ccbf2d3121dcb&reverse_sort=false&page=1&size=10&Appid=E42AAWB7E90GEHL&Apikey=52b373f94b434b65b626eb435f42744e20240712171110602594');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const formattedProducts = data.items.map((product: any) => ({
          id: product.unique_id,
          name: product.name,
          description: product.description,
          url_slug: product.url_slug,
          is_available: product.is_available,
          image: product.image,
          price: product.price,
          buttonText: 'Add to Cart'
        }));
        setProducts(formattedProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  console.log(products)
  const getImageUrl = (imagePath: string): string => {
    return `https://api.timbu.cloud/images/${imagePath}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const router = useRouter();

  const handleButtonClick = (name: string) => {
    router.push(`/productdetails/${name}`);
  };

  return (
    <main className="overflow-hidden">
      <Header cartCount={0} />
      <Hero />
      <Product />
      <Collections />
      <FeaturedProducts products={products} onButtonClick={handleButtonClick} getImage={getImageUrl} />
      <Promotion />
      <MightLike products={products} onButtonClick={handleButtonClick} getImage={getImageUrl} />
      <Community />
      <Reviews />
      <Footer />
    </main>
  );
}

export default HomePage;
