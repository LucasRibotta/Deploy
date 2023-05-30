import React from "react";
import styles from './Paginado.module.css';

export default function Pagination({ countryPerPage, allCountries, paginado, currentPage }) {
  const pageCountrys = [];
  const maxVisiblePages = 7; // Cantidad máxima de números de página visibles
  const totalPages = Math.ceil(allCountries / countryPerPage);

  let startPage;
  let endPage;

  if (totalPages <= maxVisiblePages) {
    // Si el total de páginas es menor o igual a la cantidad máxima de páginas visibles,
    // mostramos todas las páginas.
    startPage = 1;
    endPage = totalPages;
  } else {
    // Calculamos el rango de páginas visibles según la página actual.
    const maxVisiblePagesHalf = Math.floor(maxVisiblePages / 2);
    if (currentPage <= maxVisiblePagesHalf) {
      // Si la página actual está cerca del comienzo, mostramos las primeras páginas.
      startPage = 1;
      endPage = maxVisiblePages;
    } else if (currentPage + maxVisiblePagesHalf >= totalPages) {
      // Si la página actual está cerca del final, mostramos las últimas páginas.
      startPage = totalPages - maxVisiblePages + 1;
      endPage = totalPages;
    } else {
      // Si la página actual está en el medio, mostramos las páginas alrededor de la página actual.
      startPage = currentPage - maxVisiblePagesHalf;
      endPage = currentPage + maxVisiblePagesHalf;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageCountrys.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      paginado(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginado(currentPage + 1);
    }
  };

  return (
    <div className={styles["pagination"]}>
      <ul className={styles["paginationList"]}>
        <li>
          <button
            onClick={handlePrev}
            className={`${styles["paginationLink"]} ${styles["paginationPrev"]}`}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>
        {pageCountrys.map((page, index) => (
          <li key={index} className={styles["paginationItem"]}>
            <button
              onClick={() => paginado(page)}
              className={`${styles["paginationLink"]} ${
                page === currentPage ? styles["active"] : ""
              }`}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={handleNext}
            className={`${styles["paginationLink"]} ${styles["nextButton"]}`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}
