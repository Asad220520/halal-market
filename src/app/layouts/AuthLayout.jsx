import { Outlet } from "react-router-dom";
import ProfileHome from "../pages/profile/ProfileHome";

export default function AuthLayout() {
  return (<>
    <main>
      <Outlet />
    </main>
  </>
  );
}
