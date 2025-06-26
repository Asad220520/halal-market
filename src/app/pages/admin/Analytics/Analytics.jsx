import DateRangePicker from "../../../components/ui/Calendar/DateRangePicker";
import AdminSalesMetrics from "./AdminSalesMetrics";
import Dashboard from "./Progress/Dashboard";

export default function AdminAnalytics() {
  const metrics = [
    {
      name: "Заказы за месяц",
      price: "12.345",
      procent: "+2,5%",
      variant: "green",
    },
    {
      name: "Проданные товары за месяц",
      price: "45.678",
      procent: "+1,5%",
      variant: "green",
    },
    {
      name: "Активные продавцы",
      price: "456",
      procent: "+11%",
      variant: "primary",
    },
    {
      name: "Новые продавцы",
      price: "55",
      procent: "+5,5%",
      variant: "primary",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="py-2 cursor-pointer border-b-2 font-medium primary">
          Отчеты за последний месяц
        </h1>
        <DateRangePicker />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((item, idx) => (
          <AdminSalesMetrics
            key={idx}
            name={item.name}
            price={item.price}
            procent={item.procent}
            variant={item.variant}
          />
        ))}
      </div>
      <Dashboard />
    </div>
  );
}
