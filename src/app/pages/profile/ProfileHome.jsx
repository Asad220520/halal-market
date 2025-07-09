import { LuPencil } from "react-icons/lu";
import userLogo from "../../../assets/images/user.svg";
import Button from "@components/ui/Button/Button";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function ProfileHome() {
  return (
    <section className="container px-4 m-auto my-[30px]">
      <h1 className="m-[30px_0] text-[#0A8791] text-[30px] font-medium">
        Мой профиль
      </h1>

      <div className="flex flex-col sm:flex-row sm:row gap-6 shadow-[0px_0px_50px_-7px_rgba(0,0,0,0.1)] p-5 rounded-[10px]">
        {/* Profile Info */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <img
            className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] rounded-full object-cover"
            src={userLogo}
            alt="User Avatar"
          />
          <div className="flex flex-col gap-4 text-center sm:text-left w-full sm:w-[390px]">
            <div>
              <h1 className="text-[#0A8791] text-[24px] sm:text-[26px] font-medium">
                Марина Иванова
              </h1>
              <h5 className="text-[#A2A2A2] text-[14px]">Пользователь</h5>
            </div>
            <Button variant="primary" icon={<LuPencil />} fullWidth={false}>
              Редактировать профиль
            </Button>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-4">
          <NavLink
            to="purchases"
            className="flex flex-col items-center justify-between border text-[#A2A2A2] rounded-[10px] w-full sm:w-[190px] h-[130px] p-[15px_10px]"
          >
            <h1 className="text-[#0A8791] text-[20px] font-medium">
              Мои покупки
            </h1>
            <h2 className="text-[#FE585A] text-[36px] font-medium">0</h2>
          </NavLink>

          <NavLink
            to="orders"
            className="flex flex-col items-center justify-between border text-[#A2A2A2] rounded-[10px] w-full sm:w-[350px] h-[130px] p-[15px_10px]"
          >
            <h1 className="text-[#0A8791] text-[20px] font-medium text-center sm:text-left">
              Статус текущих заказов
            </h1>
            <h2 className="text-[#FE585A] text-[36px] font-medium text-center sm:text-left">
              0
            </h2>
          </NavLink>

          <NavLink
            to="wishlist"
            className="flex flex-col justify-between items-center border text-[#A2A2A2] rounded-[10px] w-full sm:w-[190px] h-[130px] p-[15px_10px]"
          >
            <h1 className="text-[#0A8791] text-[20px] font-medium">
              Сохраненные
            </h1>
            <h2 className="text-[#FE585A] text-[36px] font-medium">
              <FaRegHeart />
            </h2>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default ProfileHome;
