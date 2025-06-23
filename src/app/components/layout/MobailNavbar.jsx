import { Home, Menu, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const MobileNavbar = () => {
  const { pathname } = useLocation();

  const navItems = [
    { label: "Главный", icon: <Home size={22} />, to: "/" },
    { label: "Меню", icon: <Menu size={22} />, to: "/menu" },
    { label: "Профиль", icon: <User size={22} />, to: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md flex justify-around items-center h-16 md:hidden z-50">
      {navItems.map((item) => (
        <Link
          key={item.to}
          to={item.to}
          className={`flex flex-col items-center text-xs ${
            pathname === item.to ? "text-primary" : "text-gray-500"
          }`}
        >
          {item.icon}
          <span className="text-xs">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default MobileNavbar;
