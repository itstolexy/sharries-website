'use client';
import React from "react";
import Featured from "../featured";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
  image: string;
  title: string;
  price: string;
  buttonText: string;
  description: string;
}

interface FeaturedProductsProps {
  products: Product[];
  onButtonClick: (name: string) => void;
  getImage: (imagePath: string) => string; // Add getImage prop
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products = [], onButtonClick, getImage }) => {
  const router = useRouter();

  const showProductDetails = (name: string) => {
    router.push(`/productdetails/${name}`);
  };

  const showAlert = () => {
    const alertDiv = document.createElement('div');
    alertDiv.innerText = 'Added to cart';
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '20px';
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
    <section id="feat" className="mt-[100px]">
      <div className="mb-[46px]">
        <h2 className="mx-[80px] font-light text-2xl mb-4 font3">Featured Products</h2>
        <hr />
        <div className="mx-[80px] flex flex-row mb-4">
          {products.slice(0, 3).map((product, index) => (
            <Featured
              key={index}
              image={getImage(product.image)}
              title={product.name}
              price={product.price}
              buttonText={product.buttonText}
              buttonAction={showAlert}
              imageAction={() => showProductDetails(product.name)}
              description={product.description}
            />
          ))}
        </div>
        <div className="mx-[80px] flex flex-row mb-4">
          {products.slice(3, 6).map((product, index) => (
            <Featured
              key={index + 3} // to ensure unique keys
              image={getImage(product.image)}
              title={product.name}
              price={product.price}
              buttonText={product.buttonText}
              buttonAction={showAlert}
              imageAction={() => showProductDetails(product.name)}
              description={product.description}
            />
          ))}
        </div>
        <hr />
      </div>
    </section>
  );
};

export default FeaturedProducts;
