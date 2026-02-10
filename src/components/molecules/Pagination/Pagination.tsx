"use client";

import styles from "./Pagination.module.scss";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onChange,
}: PaginationProps) {
  const pages = [];

  // Define un rango de páginas visibles
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <nav className={styles.pagination}>
      <button
        onClick={() => onChange(1)}
        disabled={currentPage === 1}
        aria-label="First page"
      >
        «
      </button>

      <button
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ‹ Prev
      </button>

      {start > 1 && <span className={styles.ellipsis}>…</span>}

      {pages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? styles.active : ""}
          onClick={() => onChange(page)}
        >
          {page}
        </button>
      ))}

      {end < totalPages && <span className={styles.ellipsis}>…</span>}

      <button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next ›
      </button>

      <button
        onClick={() => onChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        »
      </button>
    </nav>
  );
}
