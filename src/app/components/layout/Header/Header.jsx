import Button from "@components/ui/Button/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold text-white">HALAL Industry</div>

        <div className="flex gap-6">
          <Button variant="outline">Стать продавцом</Button>
          <Link to={"/login"}>
            <Button variant="primary">Войти</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
