import { useForm } from "react-hook-form";
import { Eye, EyeOff, User, Mail, Phone, LockKeyhole } from "lucide-react";
import Button from "@components/ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { register as registerUser, clearMessages } from "./autSlice";
import { useState, useEffect } from "react";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const { loading, error, successMessage } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    // Разбиваем fullName на части и берем первые два слова
    const nameParts = data.fullName.trim().split(/\s+/);
    const first_name = nameParts[0] || "";
    const last_name = nameParts.slice(1).join(" ") || "";

    // Фолбек для username — email до "@"
    const fallbackUsername = data.email.split("@")[0] || "user";

    // Формируем username из имени и фамилии или fallback
    const username =
      first_name && last_name
        ? `${first_name}_${last_name.replace(/\s+/g, "_")}`
        : fallbackUsername;

    // Обрабатываем номер телефона, если он есть
    const phone_number = data.phone_number.startsWith("+")
      ? data.phone_number
      : "+" + data.phone_number.replace(/\D/g, "");
  

    const payload = {
      username,
      first_name,
      last_name,
      email: data.email,
      phone_number,
      password: data.password,
    };

    console.log("🚀 Payload to register:", payload);

    dispatch(registerUser(payload));
  };

  useEffect(() => {
    dispatch(clearMessages());
  }, [dispatch]);

  return (
    <div className="pt-35 px-10">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Регистрация</h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-400">Ф.И.О</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Введите ФИО (например: Иван Иванов)"
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              }`}
              {...register("fullName", {
                required: "Ф.И.О обязательно",
                validate: (value) =>
                  value.trim().split(/\s+/).length >= 2 ||
                  "Укажите имя и фамилию",
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

        {/* Phone */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-400">
            Телефон
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="tel"
              placeholder="+79001234567"
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition ${
                errors.phone_number ? "border-red-500" : "border-gray-300"
              }`}
              {...register("phone_number", {
                required: "Телефон обязателен",
                pattern: {
                  value: /^(\+7|8)\d{10}$/,
                  message: "Некорректный формат номера. Пример: +79001234567",
                },
              })}
            />
          </div>
          {errors.phone_number && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phone_number.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <label className="block mb-1 font-medium text-gray-400">Пароль</label>
          <div className="relative">
            <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Придумайте пароль"
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", {
                required: "Пароль обязателен",
                minLength: { value: 6, message: "Минимум 6 символов" },
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

        {/* Feedback */}
        {error && (
          <p className="text-red-500 text-center text-sm mb-4">{error}</p>
        )}
        {successMessage && (
          <p className="text-green-500 text-center text-sm mb-4">
            {successMessage}
          </p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          variant="primary"
          disabled={!isValid || loading}
          className="w-full"
        >
          {loading ? "Загрузка..." : "Зарегистрироваться"}
        </Button>
      </form>
    </div>
  );
}
