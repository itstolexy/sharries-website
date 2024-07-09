/* eslint-disable @next/next/no-img-element */
"use client"
import router from 'next/router';

import Header from "@/app/components/header"
import Footer from '@/app/components/footer';
import MightLike from '../components/mightLike';
import Link from 'next/link';

const CartPage = () => {

    const handleButtonClick = (name: string) => {
        router.push(`/productdetails/${name}`);
    };

    return (
        <div>
            <Header cartCount={0} />



            <div className='flex flex-col justify-center items-center mt-[100px]'>
                <div>
                    <img src="/images/shop.svg" alt="" />
                </div>
                <div className='justify-center'>
                    <h2 className='font3 font-semibold text-2xl mt-8 text-center'>Your Cart is empty</h2>
                    <p className='font3 font-normal text-base text-center max-w-[400px] mt-6'>
                        Explore our collections today and start your journey towards radiant beauty. Your skin will thank you
                    </p>
                </div>

                    <Link href="/">
                    <button
                        className="font3 border rounded-md bg-[#40BC2B] text-white w-[195px] h-12 mt-14"
                    >
                        Start Shopping
                    </button>
                    </Link>

            </div>







            <MightLike onButtonClick={handleButtonClick} />
            <Footer />
        </div>
    );
};

export default CartPage; 