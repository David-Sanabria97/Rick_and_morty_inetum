"use client";

import { useRouter } from "next/navigation";

interface Props {
  currentPage: number;
  totalPages: number;
  name: string;
}

export default function Pagination({ currentPage, totalPages, name }: Props) {
  const router = useRouter();

  function goToPage(page: number) {
    const params = new URLSearchParams();
    params.set("page", String(page));
    if (name) params.set("name", name);

    router.push(`/?${params.toString()}`);
  }

  return (
    <nav>
      <button
        disabled={currentPage === 1}
        onClick={() => goToPage(currentPage - 1)}
      >
        Anterior
      </button>

      <span>
        Página {currentPage} de {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => goToPage(currentPage + 1)}
      >
        Siguiente
      </button>
    </nav>
  );
}
