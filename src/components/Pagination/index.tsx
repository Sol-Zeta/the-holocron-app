import React, { FC } from 'react';
import styles from './Pagination.module.scss';
import { Box, Pagination, Stack } from '@mui/material';

interface PaginationProps {
  count: number;
}

const PaginationComponent: FC<PaginationProps> = ({ count }) => {
  if(!count) return;
  return (
    <Box display='flex' justifyContent='center'>
      <Pagination count={count} color="standard" />
    </Box>
  );
};

export default PaginationComponent;
