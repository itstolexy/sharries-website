'use client';
import React, { useEffect, useState } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import FeaturedProducts from "@/app/components/featuredProducts";
import router from "next/router";
import Community from "../components/community";
import Reviews from "../components/reviews";

const ProductPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const handleButtonClick = (name: string) => {
    router.push(`/productdetails/${name}`);
  };

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
          image: product.photos[0]?.url || 'default.png', // Ensure image field is correctly handled
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

  return (
    <main>
      <Header cartCount={0} />

      <div className="bg-[url('/images/product.png')] bg-cover bg-center lg:h-[50vh] w-full flex items-center justify-center">
        <h1 className="text-black font-semibold font3 text-5xl max-w-[768px] text-center mx-auto">
          Pamper your skin with nature’s finest ingredients
        </h1>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <FeaturedProducts onButtonClick={handleButtonClick} products={products} />
      )}

      <Community />
      <Footer />
      <Reviews />
    </main>
  );
};

export default ProductPage;
