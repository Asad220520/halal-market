import { ShoppingCart } from "lucide-react";
import Button from "@components/ui/Button";
import Promotion from "./Promotion";
import Categories from "./Categories";
import Product from "./Product";

const Home = () => {
  return (
    <div className="sm:py-8  py-4 pb-[100px]">
      <Promotion />
      <Categories />
      <Product />
    </div>
  );
};

export default Home;
