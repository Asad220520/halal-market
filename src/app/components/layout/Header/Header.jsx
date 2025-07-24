import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "@components/ui/Button/Button";
import SplashScreen from "@components/ui/SplashScreen";
import { ShoppingCart } from "lucide-react";
import ResponsiveIcon from "../../ui/ResponsiveIcon/ResponsiveIcon";
import { useSelector } from "react-redux";
import userLogo from "../../../../assets/images/user.svg";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const authData = useSelector((state) => state.auth.user);

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
            {authData && authData.user ? (
              <img
                onClick={() => navigate("/profile")}
                className="w-12 h-12 rounded-full object-cover cursor-pointer border-2 border-teal-300"
                src={userLogo}
                alt="user avatar"
              />
            ) : (
              <Button variant="primary" onClick={handleLoginClick}>
                Войти
              </Button>
            )}
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
