/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { products } from "@/app/data/data";
import Featured from "../featured";

export const MightLike: React.FC = () => {
    return (
        <section className="mt-[100px]">
        <div className="mb-[46px]">
          <h2 className="mx-[80px] font-light text-2xl mb-4 font3">You might like</h2>
          <hr />
          <div className="mx-[80px] flex flex-row mb-4">
            {products.slice(0, 3).map((product, index) => (
              <Featured
                key={index}
                image={product.image}
                title={product.title}
                price={product.price}
                buttonText={product.buttonText}
                buttonAction={product.buttonAction}
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
                buttonAction={product.buttonAction}
              />
            ))}
          </div>
          <hr />
        </div>
      </section>



    );
};

export default MightLike;
