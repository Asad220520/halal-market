import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MobileNavbar from "../components/layout/MobailNavbar";
import ProfileHome from "../pages/profile/ProfileHome";
export default function PrivateLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ProfileHome/>
      <main className="flex-1">
        <Outlet />
      </main>
      <MobileNavbar />
      <Footer />
    </div>
  );
}
