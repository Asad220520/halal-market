import { useNavigate } from "react-router-dom";

export default function TestLogin() {
  const navigate = useNavigate();

  const loginAs = (role) => {
    const user = {
      id: Date.now(),
      name: `${role.toUpperCase()} User`,
      role,
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/"); // или в профиль, если хочешь: navigate("/profile")
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4 text-center">Быстрый вход</h2>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => loginAs("admin")}
          className="bg-red-500 text-white py-2 rounded"
        >
          Войти как Admin
        </button>
        <button
          onClick={() => loginAs("seller")}
          className="bg-blue-500 text-white py-2 rounded"
        >
          Войти как Seller
        </button>
        <button
          onClick={() => loginAs("client")}
          className="bg-green-500 text-white py-2 rounded"
        >
          Войти как Client
        </button>
      </div>
    </div>
  );
}
