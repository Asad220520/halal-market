import { useForm } from "react-hook-form";
import { Mail } from "lucide-react";
import Button from "@components/ui/Button/Button";

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Восстановление пароля:", data);
    // Здесь можно вызвать dispatch(forgotPassword(data.email));
  };

  return (
    <div className="pt-35 px-10">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Восстановление пароля!
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-400">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              placeholder="Введите вашу почту"
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

        {/* Подтверждение */}
        <p className="text-sm text-gray-500 mb-4">
          На указанную электронную почту придёт письмо с ссылкой по
          восстановлению пароля
        </p>

        {/* Кнопка */}
        <Button
          type="submit"
          variant="primary"
          disabled={!isValid}
          className="w-full"
        >
          Отправить
        </Button>
      </form>
    </div>
  );
}
