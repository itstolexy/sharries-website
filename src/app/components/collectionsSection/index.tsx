/* eslint-disable @next/next/no-img-element */
import React from "react";
import Collection from "../collection";
import { collectionData } from "@/app/data/collectionData";

export const Collections: React.FC = () => {
  return (
    <section className="-mt-10">
      <div>
        <h2 className="mx-[80px] font-normal text-2xl mt-[222px] mb-4 font3">Our Collections</h2>
        <hr />
      </div>
      <div className="mx-[80px] flex flex-row mb-4">
        {collectionData.map((collection, index) => (
          <Collection key={index} image={collection.image} title={collection.title} />
        ))}
      </div>
      <hr />
    </section>
  );
};

export default Collections;
