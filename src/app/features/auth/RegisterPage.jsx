import { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, User, Mail, Phone, LockKeyhole } from "lucide-react";
import Button from "@components/ui/Button/Button";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Регистрация:", data);
    // Здесь можешь вызвать dispatch(registerUser(data));
  };

  return (
    <div className="pt-35 px-10">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Регистрация</h2>

        {/* ФИО */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-400">Ф.И.О</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Введите  ФИО"
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition ${
                errors.fullName
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary"
              }`}
              {...register("fullName", {
                required: "Ф.И.О обязательно",
                minLength: {
                  value: 3,
                  message: "Минимум 3 символа",
                },
              })}
            />
          </div>
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-400">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Введите свою почту"
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition ${
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

        {/* Телефон */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-400">
            Телефон
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              placeholder="Введите свой номер"
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-primary"
              }`}
              {...register("phone", {
                required: "Телефон обязателен",
                pattern: {
                  value: /^[\d\s()+-]+$/,
                  message: "Некорректный формат телефона",
                },
              })}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        {/* Пароль */}
        <div className="mb-6 relative">
          <label className="block mb-1 font-medium text-gray-400">Пароль</label>
          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Придумайте пароль"
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition ${
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
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}