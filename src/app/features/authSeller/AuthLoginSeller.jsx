import { useForm } from "react-hook-form";
import Button from "@components/ui/Button/Button";
import { Phone } from "lucide-react"; // Изменил иконку с Mail на Phone

export default function AuthLoginSeller() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    console.log("Логин:", data);
    // Здесь можно вызывать redux dispatch(login(data));
  };

  return (
    <div className="pt-35 px-10">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <h2 className="text-4xl primary font-bold text-center">
          Открыть магазин
        </h2>
        <p className="text-center text-sm py-6">
          Введите номер телефона, чтобы войти или зарегистрироваться
        </p>
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-400">
            Телефон
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              placeholder="Введите номер телефона"
              type="tel"
              className={`w-full pl-10 px-4 py-2 border rounded focus:outline-none transition
                ${
                  errors.phone
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-primary"
                }`}
              {...register("phone", {
                required: "Номер телефона обязателен",
                pattern: {
                  value: /^\+?[0-9\s\-\(\)]+$/,
                  message: "Некорректный номер телефона",
                },
                minLength: {
                  value: 10,
                  message: "Номер слишком короткий",
                },
              })}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>
        <Button
          type="submit"
          variant="primary"
          disabled={!isValid}
          className="w-full"
        >
          Получить код
        </Button>
      </form>
    </div>
  );
}
