import { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export type TableColumn<T> = {
  id: string;
  value: string;
  isAction?: boolean;
  render?: (row: T) => React.ReactNode;
};

type TableProps<T extends Record<string, any>> = {
  columns: readonly TableColumn<T>[];
  data: T[];
  rowsPerPage?: number;
};

const MAX_TABLE = 10;

const Table = <T extends Record<string, any>>({
  columns,
  data,
  rowsPerPage = MAX_TABLE,
}: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const colSpan = columns.length;

  return (
    <div className="overflow-x-auto rounded-2xl">
      <table className="min-w-full text-sm m-4">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.id)}
                className="px-4 py-2 border-b font-semibold text-left"
              >
                {col.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={colSpan} className="py-20 text-center text-gray-500">
                <ExclamationTriangleIcon className="mx-auto mb-4 h-16 w-16 text-red-500" />
                Nenhum dado disponível.
              </td>
            </tr>
          ) : (
            currentData.map((row, i) => (
              <tr key={i} className="hover:bg-[var(--bg-surface-hover)] transition-colors">
                {columns.map((col) => (
                  <td key={String(col.id)} className="px-4 py-2 border-b">
                    {col.isAction && col.render
                      ? col.render(row) // INFO: renderiza conteúdo customizado
                      : row[col.id as keyof T]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {data.length > 0 && (
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
      )}
    </div>
  );
};

export default Table;
