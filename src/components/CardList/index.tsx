import React, { FC } from 'react';
import Card from '@/components/Card';
import { Character } from '@/types/index';
import { Box, Grid } from '@mui/material';
import Pagination from '../Pagination';

interface CardListProps {
  cards: Character[];
  page: string;
  total: number;
}

const CardList: FC<CardListProps> = ({ cards, page, total }) => (
  <Box data-testid="CardList" flexDirection="column" alignItems="center">
    <Grid
      container
      direction={'row'}
      justifyContent="center"
      gap={{ xs: 4, sm: 4, md: 10 }}
      marginBottom={{ xs: 4, md: 6 }}
    >
      {cards?.map((card) => (
        <Card key={card.name} data={card} />
      ))}
    </Grid>
    {total > 0 ? <Pagination count={Math.ceil(total / 10)} page={page} /> : null}
  </Box>
);

export default CardList;
