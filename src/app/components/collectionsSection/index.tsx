/* eslint-disable @next/next/no-img-element */
import React from "react";
import Collection from "../collection";

export const Collections: React.FC = () => {
  return (
    <section className="-mt-10">
      <div>
        <h2 className="mx-[80px] font-normal text-2xl mt-[222px] mb-4 font3">Our Collections</h2>
        <hr />
      </div>
      <div className="mx-[80px] flex flex-row mb-4">
        <Collection image="/images/p1.svg" title="Cleanse & Prep" />
        <Collection image="/images/p2.svg" title="Moisturize & Protect" />
        <Collection image="/images/p3.svg" title="Treat & Nourish" />
        <Collection image="/images/p4.svg" title="Body Care" />
      </div>
      <hr />
    </section>
  );
};

export default Collections;
