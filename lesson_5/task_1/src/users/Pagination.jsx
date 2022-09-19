import React from 'react'

const Pagination = ({
  goPrev,
  goNext,
  totalItems,
  itemsPerPage,
  currentPage,
}) => {
  

  const isPrevPageAvialable = currentPage > 1;
  const isNextPageAvialable = totalItems / itemsPerPage > currentPage;

  return (
    <div className="pagination">
      <button onClick={goPrev} className="btn" disabled={!isPrevPageAvialable}>
        {isPrevPageAvialable && "←"}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button onClick={goNext} className="btn" disabled={!isNextPageAvialable}>
        {isNextPageAvialable && "→"}
      </button>
    </div>
  );
};

export default Pagination;