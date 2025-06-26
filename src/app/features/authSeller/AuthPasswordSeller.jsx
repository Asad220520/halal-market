import { useForm } from "react-hook-form";
import Button from "@components/ui/Button/Button";
import { Lock } from "lucide-react";

export default function AuthPasswordSeller() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Код подтверждения:", data);
    // Здесь можно вызывать redux dispatch(verifyCode(data));
  };

  return (
    <div className="pt-35 px-10">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <h2 className="text-4xl primary font-bold text-center">
          Открыть магазин
        </h2>
        <p className="text-center text-sm py-6">
          Введите 6-значный код проверки отправленный на ваш номер, в течении 1
          минуты
        </p>

        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-400">
            Введите код из 6 цифр
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              placeholder="______"
              type="text"
              maxLength={6}
              inputMode="numeric"
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition
                ${
                  errors.code
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-primary"
                }`}
              {...register("code", {
                required: "Код обязателен",
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: "Код должен содержать 6 цифр",
                },
              })}
            />
          </div>
          {errors.code && (
            <p className="text-red-500 text-sm mt-1">{errors.code.message}</p>
          )}
        </div>

        <Button
          type="submit"
          variant="primary"
          disabled={!isValid}
          className="w-full mb-4"
        >
          Подтвердить
        </Button>

        <div className="flex gap-1 text-sm text-gray-500">
          <p>Срок кода истек?</p>
          <button
            type="button"
            className="primary hover:underline focus:outline-none"
          >
            Отправить заново
          </button>
        </div>
      </form>
    </div>
  );
}
