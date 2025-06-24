import { ShoppingCart } from "lucide-react";
import Button from "@components/ui/Button";
import Promotion from "./Promotion";
import Categories from "./Categories";
import Product from "./Product";

const Home = () => {
  return (
    <>
    <Promotion/>
    <Categories/>
    <Product/>
      {/* <Button>По умолчанию</Button>

      <Button variant="primary">Primary</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="outline">Outline</Button>

      <Button icon={<ShoppingCart />} iconPosition="left">
        Купить
      </Button>

      <Button icon={<ShoppingCart />} iconPosition="right" fullWidth>
        В корзину
      </Button>

      <Button loading>Загрузка...</Button> */}
    </>
  );
};

export default Home;
