/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface FeaturedProps {
  image: string;
  title: string;
  price: string;
  buttonText: string;
  buttonAction: () => void;
  imageAction: () => void; 
  description: string; 
}

const Featured: React.FC<FeaturedProps> = ({ image, title, price, buttonText, buttonAction, imageAction, description  }) => {
  return (
    <div className="mt-10 mr-5">
      <img src={image} alt="Card Image" onClick={imageAction} className="card-image" />
      <div className="flex flex-row">
        <div className="mt-6">
          <h3 className="font-light text-lg font3 max-w-[130px]">{title}</h3>
          <p className="font-normal text-lg font4">{price}</p>
        </div>
        <button
          className="font3 border rounded-md border-[#40BC2B] hover:bg-[#408C2B] hover:text-white text-[#40BC2B] w-[195px] h-12 mt-6 ml-auto"
          onClick={buttonAction}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Featured;
