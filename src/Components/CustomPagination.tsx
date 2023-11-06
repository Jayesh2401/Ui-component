import React, { useState, useEffect } from 'react';

interface CustomPaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
}

const CustomPagination: React.FC<CustomPaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxVisiblePages = 10;

  const [startPage, setStartPage] = useState(1);

  useEffect(() => {
    setStartPage(Math.max(1, currentPage - Math.floor(maxVisiblePages / 2)));
  }, [currentPage]);

  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  const range = (start: number, end: number) => {
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const handlePrevClick = () => {
    if (startPage > 1) {
      setStartPage(startPage - 1);
    }
  };

  const handleNextClick = () => {
    if (endPage < totalPages) {
      setStartPage(startPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handlePrevClick}
        disabled={startPage <= 1}
        className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      >
        Prev
      </button>
      {range(startPage, endPage).map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`${
            currentPage === page ? 'bg-purple-500 text-white' : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
          } font-bold py-2 px-4`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNextClick}
        disabled={endPage >= totalPages}
        className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div>
  );
};

export default CustomPagination;
