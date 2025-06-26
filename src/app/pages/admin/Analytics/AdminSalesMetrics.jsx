import React from "react";
import Button from "../../../components/ui/Button/Button";

const AdminSalesMetrics = ({ name, price, procent,variant }) => {
  return (
    <div className="flex justify-between items-end border p-4 shadow-sm border-gray-300 rounded-xl ">
      <div className="">
        <h2 className="text-gray-500">{name}</h2>
        <span className="text-2xl font-bold text-red-400">{price}</span>
      </div>
      <Button className="h-7 items-center" variant={variant}>
        {procent}
      </Button>
    </div>
  );
};

export default AdminSalesMetrics;
