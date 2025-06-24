// src/components/SplashScreen.jsx
import logo from "../../assets/icons/LOGO.svg";
export default function SplashScreen() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-primary">
      <img src={logo} alt="Логотип" className="w-48 h-48 animate-pulse" />
    </div>
  );
}
