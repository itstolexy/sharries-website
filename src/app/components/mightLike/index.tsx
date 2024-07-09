"use client"
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { products } from "@/app/data/productData";
import Product from "../featured";
import { useRouter } from "next/navigation";

interface MightLikeProps {
  onButtonClick: (name: any) => void;
}

const ProductLike: React.FC<MightLikeProps> = ({ }) => {
  const router = useRouter();

  const showProductDetails = (name: any) => {
    router.push(`/productdetails/${name}`);
  };

  const showAlert = () => {
    const alertDiv = document.createElement('div');
    alertDiv.innerText = 'Added to cart';
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '20px'; // Adjusted top position
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translateX(-50%)';
    alertDiv.style.backgroundColor = '#40BC2B';
    alertDiv.style.color = 'white';
    alertDiv.style.padding = '10px 20px';
    alertDiv.style.borderRadius = '5px';
    alertDiv.style.zIndex = '1000';
    document.body.appendChild(alertDiv);

    setTimeout(() => {
      document.body.removeChild(alertDiv);
    }, 1000);
  };

  return (
    <section className="mt-[100px]">
      <div className="mb-[46px]">
        <h2 className="mx-[80px] font-light text-2xl mb-4 font3">You might like</h2>
        <hr />
        <div className="mx-[80px] flex flex-row mb-4">
          {products.slice(7, 10).map((products, index) => (
            <Product
              key={index}
              image={products.image}
              title={products.title}
              price={products.price}
              buttonAction={showAlert}
              imageAction={() => showProductDetails(products.name)} //
              buttonText={products.buttonText}
              description={""} />
          ))}
        </div>
        <div className="mx-[80px] flex flex-row mb-4">
          {products.slice(9, 12).map((products, index) => (
            <Product
              key={index + 3} // to ensure unique keys
              image={products.image}
              title={products.title}
              price={products.price}
              buttonAction={showAlert}
              imageAction={() => showProductDetails(products.name)}
              buttonText={products.buttonText}
              description={""} />
          ))}
        </div>
        <hr />
      </div>
    </section>


  );
};

export default ProductLike;
