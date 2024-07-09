//import { useRouter } from 'next/navigation';
import { products } from '@/app/data/productData';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { usePathname, useSearchParams } from 'next/navigation'

const ProductDetails = () => {
  // const router = useRouter();
  //const { name } = router.query;

  const pathname = usePathname();
  const name = pathname.split('/').pop();
  const product = products.find(p => p.name === name);

  return (
    <div>
      <Header />
      {product ? (
        <div>
          <h1>{product.title}</h1>
          <p>Price: ${product.price}</p>
        </div>
      ) : (
        <p>Product not found</p>
      )}
      <Footer />
    </div>
  );
}

export default ProductDetails;
