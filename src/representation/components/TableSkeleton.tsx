import React from 'react';

const TableSkeleton: React.FC<{ columnsCount: number; rowsCount?: number }> = ({ columnsCount, rowsCount = 5 }) => {
  return (
    <div className="overflow-x-auto animate-pulse">
      <table className="min-w-full text-sm m-4">
        <thead>
          <tr>
            {Array.from({ length: columnsCount }).map((_, idx) => (
              <th key={idx} className="px-4 py-2 border-b">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowsCount }).map((_, rowIdx) => (
            <tr key={rowIdx}>
              {Array.from({ length: columnsCount }).map((_, colIdx) => (
                <td key={colIdx} className="px-4 py-2 border-b">
                  <div className="h-4 bg-gray-200 rounded"></div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableSkeleton;
