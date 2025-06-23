import { useEffect, useState } from "react";
import Router from "./app/router";
import SplashScreen from "@/app/components/ui/SplashScreen";
import "./App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Задержка 2 сек

    return () => clearTimeout(timer);
  }, []);

  return loading ? <SplashScreen /> : <Router />;
}
