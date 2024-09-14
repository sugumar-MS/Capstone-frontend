// Pagination.jsx
import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex items-center justify-between mt-6">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className={`bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${currentPage === 1 ? "cursor-not-allowed opacity-50" : ""}`}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="text-gray-400">
        Page {currentPage} of {totalPages || 1}
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        className={`bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${currentPage === totalPages || totalPages === 0 ? "cursor-not-allowed opacity-50" : ""}`}
        disabled={currentPage === totalPages || totalPages === 0}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
