import React, { FC } from 'react';
import { Box, Pagination } from '@mui/material';
import { setPage } from '@/store/slices/characters';
import { useDispatch } from 'react-redux';

interface PaginationProps {
  count: number;
  page: string;
}

const PaginationComponent: FC<PaginationProps> = ({ count, page }) => {
  const dispatch = useDispatch();
  const handleChange = (_: React.ChangeEvent<unknown>, newPage: number) => {
    dispatch(setPage(newPage));
  };
  return (
    <Box display="flex" justifyContent="center" data-testid='Pagination'>
      <Pagination
        count={count}
        color="standard"
        page={Number(page) || 1}
        onChange={handleChange}
      />
    </Box>
  );
};

export default PaginationComponent;
