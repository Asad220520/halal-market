import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MobileNavbar from "../components/layout/MobailNavbar";
import SearchBar from "../components/layout/SearchBar/SearchBar";
export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SearchBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <MobileNavbar />
      <Footer />
    </div>
  );
}
