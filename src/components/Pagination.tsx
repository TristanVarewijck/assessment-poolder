import { Button } from '@/components/ui/button';
import {
  Pagination as PaginationRoot,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
} from '@/components/ui/pagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  if (totalPages <= 1) {
    return (
      <div className="mt-4 flex items-center justify-between">
        <p className="text-sm text-gray-500">
          Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of{' '}
          {totalItems} pools
        </p>
      </div>
    );
  }

  return (
    <div className="mt-4 flex items-center flex-col gap-3 justify-center w-full">
      <p className="text-sm text-gray-500 w-full text-start">
        Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of{' '}
        {totalItems} pools
      </p>

      <PaginationRoot>
        <PaginationContent className="flex-col md:flex-row gap-2 md:gap-1 w-full">
          {/* Previous Button */}
          <PaginationItem className="w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="gap-1 w-full"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
          </PaginationItem>

          {/* Page Numbers - Hidden on small screens */}
          <div className="hidden md:flex items-center gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <PaginationItem key={page}>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onPageChange(page)}
                      className={`min-w-[32px] ${
                        page === currentPage
                          ? 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </Button>
                  </PaginationItem>
                );
              } else if (page === currentPage - 2 || page === currentPage + 2) {
                return (
                  <PaginationItem key={page}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }
              return null;
            })}
          </div>

          {/* Next Button */}
          <PaginationItem className="w-full md:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="gap-1 w-full"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </PaginationItem>
        </PaginationContent>
      </PaginationRoot>
    </div>
  );
};

export default Pagination;
