'use client';
import React from 'react';

interface PaginationProps {
  total: number;
  page: number;
  pageSize: number;
  pageChangeMethod:(page: number) => void;
}

const visiblePages = (current: number, totalPages: number, max = 7): number[] => {
  const pages: number[] = [];
  if (totalPages <= max) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
    return pages;
  }
  const side = Math.floor((max - 3) / 2);
  let start = Math.max(2, current - side);
  let end = Math.min(totalPages - 1, current + side);

  if (current <= side + 2) { start = 2; end = 2 + (max - 3); }
  if (current >= totalPages - (side + 1)) { start = totalPages - (max - 3); end = totalPages - 1; }

  pages.push(1);
  for (let i = start; i <= end; i++) pages.push(i);
  pages.push(totalPages);
  return pages;
};

const Pagination: React.FC<PaginationProps> = ({ total, page, pageSize, pageChangeMethod }) => {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * pageSize;
  const end = Math.min(total, start + pageSize);
  const pages = visiblePages(current, totalPages);
  
  return (
    <nav className="flex items-center flex-wrap gap-2 py-3">
        <button
          onClick={() => pageChangeMethod(1)}
          disabled={current === 1}
          className="border border-gray-300 rounded-md px-3 py-2 disabled:opacity-50"
        >
          « First
        </button>
        <button
          onClick={() => pageChangeMethod(current - 1)}
          disabled={current === 1}
          className="border border-gray-300 rounded-md px-3 py-2 disabled:opacity-50"
        >
          ‹ Prev
        </button>

      <ul className="flex gap-2">
        {pages.map((p) => (
          <li key={p}>
            <button
              onClick={() => pageChangeMethod(p)}
              className={`border rounded-md px-3 py-2 ${p === current ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-300'}`}
            >
              {p}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={() => pageChangeMethod(current + 1)}
        disabled={current === totalPages}
        className="border border-gray-300 rounded-md px-3 py-2 disabled:opacity-50"
      >
        Next ›
      </button>
              
      <button
        onClick={() => pageChangeMethod(totalPages)}
        disabled={current === totalPages}
        className="border border-gray-300 rounded-md px-3 py-2 disabled:opacity-50"
      >
        Last »
      </button>

      <div className="ml-auto text-gray-500">
        Affichage {start + 1}-{end} sur {total}
      </div>
    </nav>
  );
};



export default Pagination