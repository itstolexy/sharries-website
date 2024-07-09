/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from 'react';
import { products } from '@/app/data/productData';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { usePathname, useSearchParams } from 'next/navigation'
import MightLike from '@/app/components/mightLike';
import router from 'next/router';

const ProductDetails = () => {
  // const router = useRouter();
  //const { name } = router.query;
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();
  const name = pathname.split('/').pop();
  const product = products.find(p => p.name === name);

  const [Toggle, setToggle] = useState(false)
  const handleButtonClick = (name: string) => {
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
    <div>
      <Header cartCount={0} />
      {product ? (
        <div className='mx-[80px] mt-[100px] flex flex-row'>
          <img className='' src={product.image} alt="" />

          <div className='ml-[135px] max-w-[auto]'>
            <div className='flex flex-row font3 mb-6'>
              <p className='text-xl font-light'>
                RS34670
              </p>
              <p className='ml-auto text-base text-[#408C23]'>In Stock</p>
            </div>
            <h1 className='font3 font-semibold text-2xl mb-7'>{product.title}</h1>
            <p>{product.description}</p>
            <p className='text-sm text-[#408C23] mt-4'>Made with pure natural ingredients</p>

            <div className="text-[#343434] border-b-[1px] text-sm mb-6 pb-2 mt-4">
              <span className="flex justify-between">
                <p>How to use</p>
                <img src={Toggle ? "/images/a-up.svg" : "/images/a-down.svg"} alt="" onClick={() => setToggle(!Toggle)} className="cursor-pointer" />
              </span>

              {Toggle && <>
                <p className="mb-2">Apply a generous amount to damp skin, massage in circular motions, and rinse thoroughly.</p>
                <p>Use 2-3 times a week for best results.</p>
              </>}

            </div>
            <div className="text-[#343434] flex justify-between border-b-[1px] text-sm">
              <p>Delivery & drop-off</p>
            </div>
            <div className='flex flex-row mt-4'>
              <span>
                <p className='font3 text-sm mt-5'>Sub Total</p>
                <p>{product.price}</p>
              </span>
              <button
                className="font3 border rounded-md border-[#40BC2B] hover:bg-[#408C2B] hover:text-white text-[#40BC2B] w-[195px] h-12 mt-6 ml-auto"
                onClick={showAlert}
              >
                {product.buttonText}
              </button>
            </div>
          </div>

        </div>
      ) : (
        <p>Product not found</p>
      )
      }

      <MightLike onButtonClick={handleButtonClick} />
      <Footer />
    </div >
  );
}

export default ProductDetails;
