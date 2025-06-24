import { cn } from "@utils/cn"; // функция объединения классов (ниже)
import { Loader2 } from "lucide-react"; // иконка загрузки (можно любую)

export default function Button({
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  className = "",
  fullWidth = false,
  loading = false,
  disabled = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl text-sm font-medium transition-colors focus:outline-none focus:ring-0 focus:ring-offset-1 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#0A8791] cursor-pointer text-white hover:scale-105 duration-200  transition-transform ring-0 ring-offset-1",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",
    gradient:
      "bg-gradient-to-r from-[#0A8791] to-[#00C9D1] text-white text-[10px] sm:text-[18px] ",
    outline: " border-gray-300 text-white focus:ring-gray-400",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        fullWidth ? "w-full h-[25px] sm:h-[58px]" : "px-4 py-2",
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {!loading && icon && iconPosition === "left" && (
        <span className="mr-2">{icon}</span>
      )}
      {children}
      {!loading && icon && iconPosition === "right" && (
        <span className="ml-2">{icon}</span>
      )}
    </button>
  );
}
