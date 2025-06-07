import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type TableProps = {
  columns: string[];
  data: Array<Record<string, string | number>>;
  rowsPerPage?: number;
};

const MAX_TABLE = 20

const Table: React.FC<TableProps> = ({ columns, data, rowsPerPage = MAX_TABLE }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="min-w-full text-sm m-4">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-4 py-2 border-b font-semibold text-left">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((row, i) => (
            <tr
              key={i}
              className="hover:bg-[var(--bg-surface-hover)] transition-colors"
            >
              {columns.map((col) => (
                <td key={col} className="px-4 py-2 border-b">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-end mt-4 space-x-2 m-4 items-center">
        <button
            className="p-2 bg-indigo-500 rounded disabled:opacity-50"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
        >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
        </button>

        <span className="px-3 py-1 text-sm font-medium">
            {currentPage} / {totalPages}
        </span>

        <button
            className="p-2 bg-indigo-500 rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
        >
            <ChevronRightIcon className="h-5 w-5 text-white" />
        </button>
        </div>
    </div>
  );
};

export default Table;
