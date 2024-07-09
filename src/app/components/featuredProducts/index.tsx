'use client'
import React from "react";
import { products } from "@/app/data/productData";
import Featured from "../featured";
import { useRouter } from "next/navigation";

interface FeaturedProductsProps {
  onButtonClick: (name: any) => void;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onButtonClick }) => {
  const router = useRouter()

  const showProductDetails = (name: any) => {
    router.push(`/productdetails/${name}`);
  };

  return (
    <section className="mt-[100px]">
      <div className="mb-[46px]">
        <h2 className="mx-[80px] font-light text-2xl mb-4 font3">Featured Products</h2>
        <hr />
        <div className="mx-[80px] flex flex-row mb-4">
          {products.slice(0, 3).map((product, index) => (
            <Featured
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              buttonText={product.buttonText}
              buttonAction={() => showProductDetails(product.name)}
            />
          ))}
        </div>
        <div className="mx-[80px] flex flex-row mb-4">
          {products.slice(3).map((product, index) => (
            <Featured
              key={index + 3} // to ensure unique keys
              image={product.image}
              title={product.title}
              price={product.price}
              buttonText={product.buttonText}
              buttonAction={() => showProductDetails(product.name)}
            />
          ))}
        </div>
        <hr />
      </div>
    </section>
  );
};

export default FeaturedProducts;
