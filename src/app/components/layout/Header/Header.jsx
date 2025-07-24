import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@components/ui/Button/Button";
import SplashScreen from "@components/ui/SplashScreen";
import { ShoppingCart } from "lucide-react";
import ResponsiveIcon from "../../ui/ResponsiveIcon/ResponsiveIcon";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1000);
  };
  const handleSellerClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/authSeller");
    }, 1000);
  };

  if (loading) return <SplashScreen />;

  return (
    <header className="bg-primary hidden md:flex">
      <div className="container">
        <div className=" mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to={"/"} className="text-2xl font-semibold text-white">
            HALAL Industry
          </NavLink>
          <div className="flex gap-6">
            <Button variant="outline" onClick={handleSellerClick}>
              Стать продавцом
            </Button>
            <Button variant="primary" onClick={handleLoginClick}>
              Войти
            </Button>
            <Button
              variant="primary"
              icon={
                <ResponsiveIcon
                  Icon={ShoppingCart}
                  sizeMobile={12}
                  sizeDesktop={18}
                />
              }
              onClick={() => navigate("/cart")}
            ></Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
