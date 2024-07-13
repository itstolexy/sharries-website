/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import router from "next/router";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import MightLike from "../components/mightLike";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  description: string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  image: string;
  price: string;
  buttonText: string;
}

const CartPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
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

  const handleButtonClick = (name: string) => {
    router.push(`/productdetails/${name}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Header cartCount={0} />

      <div className="flex flex-col justify-center items-center mt-[100px]">
        <div>
          <img src="/images/shop.svg" alt="Empty Cart" />
        </div>
        <div className="justify-center">
          <h2 className="font3 font-semibold text-2xl mt-8 text-center">
            Your Cart is empty
          </h2>
          <p className="font3 font-normal text-base text-center max-w-[400px] mt-6">
            Explore our collections today and start your journey towards radiant
            beauty. Your skin will thank you
          </p>
        </div>

        <Link href="/">
          <button className="font3 border rounded-md bg-[#40BC2B] text-white w-[195px] h-12 mt-14">
            Start Shopping
          </button>
        </Link>
      </div>

      <MightLike onButtonClick={handleButtonClick} products={products} />
      <Footer />
    </div>
  );
};

export default CartPage;
