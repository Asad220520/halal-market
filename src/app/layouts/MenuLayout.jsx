import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/ui/Breadcrumbs/Breadcrumbs";

const MenuLayout = () => {
  return (
    <div className="mx-auto sm:py-8  py-4 pb-[100px">
      <Breadcrumbs />
      <Outlet />
    </div>
  );
};

export default MenuLayout;
