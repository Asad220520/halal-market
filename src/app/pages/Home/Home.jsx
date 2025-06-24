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

>>>>>>> mainPage:src/app/pages/Home/Home.jsx
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
