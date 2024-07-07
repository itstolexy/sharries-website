/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface CollectionProps {
  image: string;
  title: string;
}

const Collection: React.FC<CollectionProps> = ({ image, title }) => {
  return (
    <div className="mt-10 mr-5">
      <img src={image} alt="Card Image" className="card-image" />
      <div className="mt-6">
        <h4 className="font-normal text-lg text-center font3">{title}</h4>
      </div>
    </div>
  );
};

export default Collection;
