/* eslint-disable @next/next/no-img-element */
import React from "react";
import Collection from "../collection";
import { collectionData } from "@/app/data/collectionData";

export const Collections: React.FC = () => {
  return (
    <section className="">
      <div>
        <h2 className="lg:mx-[80px] mx-10 lg:font-normal font-light lg:text-2xl text-base mt-10 lg:mt-[222px] mb-4 font3">Our Collections</h2>
        <hr />
      </div>
      <div className="lg:mx-[80px] mx-10 lg:flex flex-row mb-4 hidden">
        {collectionData.map((collection, index) => (
          <Collection key={index} image={collection.image} title={collection.title} />
        ))}
      </div>
      <hr />
    </section>
  );
};

export default Collections;
