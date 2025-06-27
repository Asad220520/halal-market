import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs/Breadcrumbs";

const MenuLayout = () => {
  return (
    <div className="mx-auto ">
      <Breadcrumbs/>
      <Outlet />
    </div>
  );
};

export default MenuLayout;
