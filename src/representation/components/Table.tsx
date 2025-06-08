
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
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
};

const Table = <T extends Record<string, any>>({
  columns,
  data,
  currentPage,
  totalPages,
  onNextPage,
  onPrevPage,
}: TableProps<T>) => {
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
            data.map((row, i) => (
              <tr key={i} className="hover:bg-[var(--bg-surface-hover)] transition-colors">
                {columns.map((col) => (
                  <td key={String(col.id)} className="px-4 py-2 border-b">
                    {col.isAction && col.render
                      ? col.render(row)
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
            onClick={onPrevPage}
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </button>

          <span className="px-3 py-1 text-sm font-medium">
            {currentPage} / {totalPages}
          </span>

          <button
            className="p-2 bg-indigo-500 rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
            onClick={onNextPage}
          >
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </button>
        </div>
      )}
    </div>
  );
};


export default Table;
