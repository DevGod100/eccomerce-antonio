import Products from "@/components/Products";
import { FetchProducts } from "../actions/getSrtipeProducts";

const page = async () => {
  const products = await FetchProducts();
  return <Products allProducts={products} />;
};

export default page;