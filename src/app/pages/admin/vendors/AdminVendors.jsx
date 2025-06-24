import React, { useState } from "react";
import VendorFilters from "../vendors/VendorFilter";
import VendorSearch from "../vendors/VendorSearch";
import VendorTable from "../vendors/VendorTable";
import Pagination from "../vendors/Pagination";

const AdminVendors = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);

  return (
    <div className="pt-20 px-20">
      <h1 className="text-2xl font-semibold text-primary mb-6">Продавцы</h1>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-4">
        <VendorFilters filter={filter} setFilter={setFilter} />
        {filter !== "active" ? (
          <VendorSearch search={search} setSearch={setSearch} />
        ) : (
          <button
            onClick={() =>
              alert("Подтверждение регистрации выбранных продавцов")
            }
            className="px-4 py-2 bg-primary text-white rounded hover:bg-opacity-90"
          >
            Подтвердить регистрацию
          </button>
        )}
      </div>
      <VendorTable search={search} filter={filter} />
      <Pagination currentPage={page} totalPages={3} onPageChange={setPage} />
    </div>
  );
};

export default AdminVendors;
