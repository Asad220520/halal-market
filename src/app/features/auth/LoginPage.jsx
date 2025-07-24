import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";
import Button from "@components/ui/Button/Button";
import { login, clearMessages } from "../../features/auth/autSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    dispatch(login(data));
  };

  useEffect(() => {
    dispatch(clearMessages());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user, navigate]);

  return (
    <div className="pt-35 px-10">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Войти в систему
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-400">
            Имя пользователя
          </label>
          <input
            placeholder="Введите имя пользователя"
            type="text"
            className={`w-full px-4 py-2 border rounded focus:outline-none transition ${
              errors.username ? "border-red-500" : "border-gray-300"
            }`}
            {...register("username", {
              required: "Имя пользователя обязательно",
            })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-400">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              placeholder="Введите свою почту"
              type="email"
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              {...register("email", {
                required: "Email обязателен",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Некорректный email",
                },
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <label className="block mb-1 font-medium text-gray-500">Пароль</label>
          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              placeholder="Введите пароль"
              type={showPassword ? "text" : "password"}
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", {
                required: "Пароль обязателен",
                minLength: { value: 5, message: "Минимум 5 символов" },
              })}
            />
          </div>
          <button
            type="button"
            className="absolute top-9 right-3 text-gray-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Ошибка */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Кнопка */}
        <Button
          type="submit"
          variant="primary"
          disabled={!isValid || loading}
          className="w-full"
        >
          {loading ? "Загрузка..." : "Войти"}
        </Button>
      </form>
    </div>
  );
}
