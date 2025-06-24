const VendorFilters = ({ filter, setFilter }) => {
  const filters = [
    { label: "Список продавцов", value: "all" },
    { label: "Зарегистрированные", value: "active" },
    { label: "Заблокированные", value: "blocked" },
  ];

  return (
    <div className="flex gap-2">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={`py-2 mr-4 ${
            filter === f.value
              ? "primary border-b-2"
              : "text-gray-700"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default VendorFilters;
