import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import Button from "@components/ui/Button/Button";
import { Mail, LockKeyhole } from "lucide-react";

import { Link } from "react-router-dom";
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Логин:", data);
    // Здесь можно вызывать redux dispatch(login(data));
  };

  return (
    <div className="pt-35 px-10">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Войти в систему
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-400">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              placeholder="Введите свою почту"
              type="email"
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition
            ${
              errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-primary"
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

        {/* Пароль */}
        <div className="mb-4 relative">
          <label className="block mb-1 font-medium text-gray-500">Пароль</label>
          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            
            <input
              placeholder="Введите свой пароль"
              type={showPassword ? "text" : "password"}
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition
            ${
              errors.password
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-primary"
            }`}
              {...register("password", {
                required: "Пароль обязателен",
                minLength: {
                  value: 6,
                  message: "Минимум 6 символов",
                },
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

        {/* Кнопка */}
        <Button
          type="submit"
          variant="primary"
          disabled={!isValid}
          className="w-full"
        >
          Войти
        </Button>

        {/* Ссылки снизу */}
        <div className="flex justify-between mt-4 text-sm text-primary">
          <Link to={"/forgot-password"} className="hover:underline">
            Забыли пароль?
          </Link>
          <Link to={"/register"} className="hover:underline">
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </div>
  );
}
