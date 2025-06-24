import { ShoppingCart } from "lucide-react";
import Button from "@components/ui/Button";
import Promotion from "./Promotion";
import Categories from "./Categories";
import Product from "./Product";

const Home = () => {
  return (
    <>
      <Promotion />
      <Categories />
      <Product />
      {/* <Button>По умолчанию</Button>

    <div className="space-y-4 p-6">
      home
      <Button>По умолчанию</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button icon={<ShoppingCart />} iconPosition="vniz" variant="outline">
        Outline
      </Button>
      <Button icon={<ShoppingCart />} iconPosition="left">
        Купить
      </Button>
      <Button icon={<ShoppingCart />} iconPosition="right">
        В корзину
      </Button>
      <Button loading>Загрузка...</Button>
   */}
    </>
  );
};

export default Home;
