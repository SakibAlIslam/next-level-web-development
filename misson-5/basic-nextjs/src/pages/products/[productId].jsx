import { useRouter } from "next/router";

const ProductDetailsPage = () => {
  const router = useRouter();

  return <h1>This is Product Details Page of product: {router.query.productId}</h1>;
};

export default ProductDetailsPage;
