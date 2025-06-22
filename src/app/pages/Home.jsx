import { ShoppingCart } from "lucide-react";
import Button from "@components/ui/Button";

const Home = () => {
  return (
    <div className="space-y-4 p-6">
      <Button>По умолчанию</Button>

      <Button variant="primary">Primary</Button>

      <Button variant="secondary">Secondary</Button>

      <Button variant="outline">Outline</Button>

      <Button icon={<ShoppingCart />} iconPosition="left">
        Купить
      </Button>

      <Button icon={<ShoppingCart />} iconPosition="right" fullWidth>
        В корзину
      </Button>

      <Button loading>Загрузка...</Button>
    </div>
  );
};

export default Home;
