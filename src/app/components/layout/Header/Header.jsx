import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@components/ui/Button/Button";
import SplashScreen from "@components/ui/SplashScreen";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/login");
    }, 1500); // задержка 1.5 сек
  };

  if (loading) return <SplashScreen />;

  return (
    <header className="bg-primary hidden md:flex">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold text-white">HALAL Industry</div>
        <div className="flex gap-6">
          <Button variant="outline">Стать продавцом</Button>
          <Button variant="primary" onClick={handleLoginClick}>
            Войти
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
