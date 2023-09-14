import { usePagination, DOTS } from '../hooks/usePagination';
import useBreakpoint from '../hooks/useBreakPoint';
import { CustomButton, PageButton, PaginationWrapper } from '../style/App.style';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

type Props = {
    currentPage: number;
    totalPages: number;
    onPageChange: (newPage: number) => void;
    goPrev: () => void;
    goNext: () => void;
    siblingCount: number;
  };

export const Pagination = (props: Props) => {
  const {
    currentPage,
    totalPages,
    onPageChange,
    goPrev,
    goNext,
    siblingCount
  } = props;
  const { up } = useBreakpoint();
  const paginationRange = usePagination({
    currentPage,
    siblingCount,
    totalPages
  });

  return (
    <PaginationWrapper>
      <CustomButton
        onClick={goPrev}
        disabled={currentPage === 1}
        startIcon={<ArrowBackIosNewIcon />}
      >
        Previous
      </CustomButton>
      <div className="pageButtonWrapper">
        {paginationRange.map((pageNumber:any) => {
          if (pageNumber === DOTS) {
            return up(601) ? <span key={new Date().getTime() + Math.random()} className="dots">&#8230;</span> : null;
          }
          return (
            up(501)
              ? (
                <PageButton
                  key={new Date().getTime() + Math.random()}
                  disableRipple
                  active={currentPage === pageNumber}
                  onClick={() => onPageChange(pageNumber - 1)}
                >
                  {pageNumber}
                </PageButton>
              )
              : null
          );
        })}
      </div>
      <CustomButton
        onClick={goNext}
        disabled={currentPage === paginationRange[paginationRange.length - 1] || !paginationRange.length}
        endIcon={<ArrowForwardIosIcon />}
      >
        Next
      </CustomButton>
    </PaginationWrapper>

  );
};


