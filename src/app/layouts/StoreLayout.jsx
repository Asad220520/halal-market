import { Outlet } from "react-router-dom";

export default function StoreLayout() {
  return (
    <div>
      <header>Store Header</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
