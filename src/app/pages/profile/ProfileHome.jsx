import { LuPencil } from "react-icons/lu";
import userLogo from "../../../assets/images/user.svg";
import Button from "@components/ui/Button/Button";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

function ProfileHome() {
  return (
    <section className="m-[30px_0]">
      <h1 className="m-[30px_0] text-[#0A8791] text-[30px] font-medium">
        Мой профиль
      </h1>
      <div className="flex sm:flex-col flex-row items-center justify-between gap-[20px] shadow-[0px_0px_50px_-7px_rgba(0,_0,_0,_0.1)] p-[20px_20px]">
        <div className="flex items-center gap-5">
          <img
            className="w-[150px] h-[150px] rounded-[50%] object-cover"
            src={userLogo}
            alt="img"
          />
          <div className="flex flex-col gap-7">
            <div className="">
              <h1 className="text-[#0A8791] text-[30px] font-medium">
                Марина Иванова
              </h1>
              <h5 className="text-[#A2A2A2]">Пользователь</h5>
            </div>
            <Link to={"profile/edit"}>
            <Button variant="primary" icon={<LuPencil />}>
              Редактировать профиль
            </Button>
            </Link>
          </div>
        </div>
        <NavLink to={"profile/purchases"} className="border text-[#A2A2A2] gap-3 rounded-[10px] w-[220px] h-[130px] p-[15px_10px]">
          <h1 className="text-[#0A8791] text-[24px] font-medium">
            Мои покупки
          </h1>
          <h2 className="text-[#FE585A] text-[40px] font-medium">0</h2>
        </NavLink>
        <NavLink to={"profile/orders"} className="flex flex-col items-center gap-3 border text-[#A2A2A2] rounded-[10px] w-[350px] h-[130px] p-[15px_10px]">
          <h1 className="text-[#0A8791] text-[24px] font-medium">
            Статус текущих заказов
          </h1>
          <h2 className="text-[#FE585A] text-[40px] font-medium">0</h2>
        </NavLink>
        <NavLink to={"profile/wishlist"} className="flex flex-col items-center gap-3 border text-[#A2A2A2] rounded-[10px] w-[220px] h-[130px] p-[15px_10px]">
          <h1 className="text-[#0A8791] text-[24px] font-medium">
            Сохраненные
          </h1>
          <h2 className="text-[#FE585A] text-[40px] font-medium">
            <FaRegHeart />
          </h2>
        </NavLink>
      </div>
    </section>
  );
}

export default ProfileHome;