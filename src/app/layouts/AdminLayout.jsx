import { Outlet, NavLink } from "react-router-dom";
import SideBarAdmin from "../pages/admin/SideBarAdmin";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SideBarAdmin />

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}
