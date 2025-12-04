import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";

export interface Column<T> {
  key: keyof T | string;
  header: string;
  align?: "left" | "center" | "right";
  render?: (value: any, row: T, index: number) => React.ReactNode;
}

export interface DataTableProps<T> {
  title?: string;
  columns: Column<T>[];
  data: T[];
  emptyMessage?: string;
  onRowClick?: (row: T, index: number) => void;
  className?: string;
  showHeader?: boolean;
  rowsPerPage?: number;
  showPagination?: boolean;
}

const DataTable = <T extends Record<string, any>>({
  title,
  columns,
  data,
  emptyMessage = "No data available",
  onRowClick,
  className = "",
  showHeader = true,
  rowsPerPage = 12,
  showPagination = true,
}: DataTableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  const handlePageChange = (page: number | string) => {
    if (typeof page === 'number' && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className={`bg-white rounded-2xl ${className}`}>
      {title && (
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full">
          {showHeader && (
            <thead>
              <tr className="bg-gradient text-[#1A203C] font-semibold text-sm">
                {columns.map((column, i) => (
                  <th
                    key={column.key as string}
                    className={`px-6 py-4 whitespace-nowrap ${
                      column.align === "center" ? "text-center" : "text-left"
                    } ${i === 0 ? "rounded-tl-xl" : ""} ${
                      i === columns.length - 1 ? "rounded-tr-xl" : ""
                    }`}
                  >
                    {column.header}
                  </th>
                ))}
              </tr>
            </thead>
          )}

          <tbody>
            {currentData.length ? (
              currentData.map((row, rowIndex) => (
                <tr
                  key={startIndex + rowIndex}
                  onClick={() => onRowClick?.(row, startIndex + rowIndex)}
                  className={`text-sm transition ${
                    rowIndex % 2 === 0 ? "bg-white" : "bg-gradient"
                  } hover:bg-[#EBF2FF] cursor-pointer`}
                >
                  {columns.map((column) => (
                    <td
                      key={column.key as string}
                      className={`px-6 py-4 whitespace-nowrap ${
                        column.align === "center"
                          ? "text-center"
                          : "text-left"
                      }`}
                    >
                      {column.render
                        ? column.render(
                            row[column.key],
                            row,
                            startIndex + rowIndex
                          )
                        : row[column.key] ?? "-"}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-8 text-gray-500"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {showPagination && totalPages > 1 && (
        <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 text-sm border-t gap-4">
          <div className="text-gray-600">
            Showing <span className="font-medium">{startIndex + 1}</span>-
            <span className="font-medium">
              {Math.min(startIndex + rowsPerPage, data.length)}
            </span> of{" "}
            <span className="font-medium">{data.length}</span> entries
          </div>

          <div className="flex items-center gap-1">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
              className="p-2 border rounded-md disabled:opacity-40 hover:bg-gray-50"
              title="First Page"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>
            
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="p-2 border rounded-md disabled:opacity-40 hover:bg-gray-50"
              title="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1 mx-2">
              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(page)}
                  disabled={page === '...'}
                  className={`min-w-[32px] h-8 px-2 border rounded-md ${
                    currentPage === page
                      ? "bg-primary text-white border-primary"
                      : page === '...'
                      ? "cursor-default border-transparent"
                      : "hover:bg-primary-gray"
                  }`}
                >
                  {page === '...' ? '...' : page}
                </button>
              ))}
            </div>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-2 border rounded-md disabled:opacity-40 hover:bg-gray-50"
              title="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
              className="p-2 border rounded-md disabled:opacity-40 hover:bg-gray-50"
              title="Last Page"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;