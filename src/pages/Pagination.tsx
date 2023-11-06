import React, { useState } from "react";
import CustomPagination from "../Components/CustomPagination";

const Pagination: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1>Page {currentPage}</h1>
      <CustomPagination
        totalItems={100}
        itemsPerPage={10}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Pagination;
