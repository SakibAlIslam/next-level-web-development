import { useRouter } from "next/router";

const ProductCatchAllRoutes = () => {
  const router = useRouter();
  return (
    <h1>
      This Product Catch All Routes Page and the params is: {router.query.slug}
    </h1>
  );
};

export default ProductCatchAllRoutes;
