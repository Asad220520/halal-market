import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserProfile } from "../../features/auth/autSlice";
import userLogo from "../../../assets/images/user.svg";
import Button from "@components/ui/Button/Button";
import { LuPencil } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function ProfileHome() {
  const dispatch = useDispatch();
  const authData = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    if (authData && !authData.user?.first_name) {
      dispatch(fetchUserProfile());
    }
  }, [authData, dispatch]);

  if (loading)
    return <p className="text-center py-10 text-gray-500">Загрузка...</p>;
  if (!authData)
    return (
      <p className="text-center py-10 text-gray-500">
        Пожалуйста, войдите в систему
      </p>
    );

  const profileUser = authData.user || {};

  const fullName =
    profileUser.first_name && profileUser.last_name
      ? `${profileUser.first_name} ${profileUser.last_name}`
      : profileUser.username || "Пользователь";

  return (
    <section className="container  mx-auto my-10 px-4">
      <h1 className="mb-8 text-4xl font-semibold text-teal-700">Мой профиль</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white shadow-lg rounded-lg p-8">
        {/* Аватар и имя */}
        <div className="flex items-center gap-6 md:gap-8 flex-shrink-0">
          <img
            className="w-36 h-36 rounded-full object-cover border-4 border-teal-300"
            src={userLogo}
            alt="user avatar"
          />
          <div>
            <h2 className="text-3xl font-semibold text-teal-700">{fullName}</h2>
            <p className="text-gray-500 text-sm mt-1">Пользователь</p>
            <Link to={"profile/edit"}>
              <Button variant="primary" icon={<LuPencil />} className="mt-4">
                Редактировать профиль
              </Button>
            </Link>
          </div>
        </div>

        {/* Блоки с навигацией */}
        <div className="flex justify-between gap-5">
          <NavLink
            to={"profile/purchases"}
            className="flex flex-col justify-center items-center border border-gray-300 rounded-lg w-56 h-40 hover:shadow-md transition-shadow"
          >
            <h3 className="text-teal-700 text-xl font-medium mb-2">
              Мои покупки
            </h3>
            <span className="text-red-500 text-5xl font-bold">0</span>
          </NavLink>
          <NavLink
            to={"profile/orders"}
            className="flex flex-col justify-center items-center border border-gray-300 rounded-lg w-56 h-40 hover:shadow-md transition-shadow"
          >
            <h3 className="text-teal-700 text-xl font-medium mb-2">
              Статус текущих заказов
            </h3>
            <span className="text-red-500 text-5xl font-bold">0</span>
          </NavLink>
          <NavLink
            to={"profile/wishlist"}
            className="flex flex-col justify-center items-center border border-gray-300 rounded-lg w-56 h-40 hover:shadow-md transition-shadow"
          >
            <h3 className="text-teal-700 text-xl font-medium mb-2">
              Сохранённые
            </h3>
            <FaRegHeart className="text-red-500 text-5xl" />
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default ProfileHome;
