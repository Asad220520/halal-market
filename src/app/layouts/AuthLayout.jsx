import { Link, Outlet } from "react-router-dom";
import ProfileHome from "../pages/profile/ProfileHome";
import { FaAnglesLeft } from "react-icons/fa6";

export default function AuthLayout() {
  return (
    <div className="container">
      <Link to={"/"} className="flex justify-between mt-8 text-xl text-[#0A8791] hover:text-[#0A8791] ">
        <FaAnglesLeft />
      </Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
