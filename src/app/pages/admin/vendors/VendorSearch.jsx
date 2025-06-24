const VendorSearch = ({ search, setSearch }) => (
  <input
    type="text"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Поиск"
    className="w-full md:w-64 px-4 py-2 border outline-none border-primary rounded-2xl bg-gray-50"
  />
);

export default VendorSearch;
