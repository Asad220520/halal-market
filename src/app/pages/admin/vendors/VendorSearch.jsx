import { Search } from "lucide-react";

const VendorSearch = ({ search, setSearch }) => (
  <div className="relative w-full max-w-md">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
      <Search size={18} />
    </div>

    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Поиск"
      className="w-full pl-10 pr-4 py-2 border outline-none border-primary rounded-2xl bg-gray-50"
    />
  </div>
);

export default VendorSearch;
