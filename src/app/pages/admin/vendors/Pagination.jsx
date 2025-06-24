import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center mt-6 gap-2 items-center">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className="cursor-pointer flex gap-x-2 items-center p-2 rounded-full hover:bg-primary disabled:text-gray-500 text-[#0a8791]"
      >
        <FiChevronLeft size={20} />
        Предыдущий
      </button>

      {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded transition ${
            page === currentPage
              ? "bg-primary text-white"
              : "bg-gray-100 text-[#0a8791] hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="cursor-pointer flex gap-x-2 items-center p-2 rounded-full  disabled:text-gray-500 text-[#0a8791]"
      >
        Следующий
        <FiChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
