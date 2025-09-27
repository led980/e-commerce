import React from "react";
import "./Pagination.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 1 && i <= currentPage + 1)
    ) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return (
    <div className="pagination">
      {/* Previous Button */}
      <button
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-btn"
      >
        &lt;
      </button>

      {/* Page Numbers */}
      {pages.map((page, idx) => (
        <button
          key={idx}
          onClick={() => page !== "..." && onPageChange(page)}
          className={`pagination-page ${
            currentPage === page ? "active" : ""
          }`}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() =>
          currentPage < totalPages && onPageChange(currentPage + 1)
        }
        disabled={currentPage === totalPages}
        className="pagination-btn"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;