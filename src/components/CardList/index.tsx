import React, { FC } from 'react';
import Card from '@/components/Card';
import { Character } from '@/types/index';
import { Box, Grid } from '@mui/material';
import Pagination from '../Pagination';

interface CardListProps {
  cards: Character[];
}

const CardList: FC<CardListProps> = ({ cards }) => (
  <Box data-testid="CardList" flexDirection="column" alignItems="center">
    <Grid
      container
      direction={'row'}
      justifyContent="center"
      gap={{ xs: 4, sm: 4, md: 10 }}
      marginBottom={{ xs: 4, md: 6 }}
    >
      {cards.map((card) => (
        <Card key={card.name} data={card} />
      ))}
    </Grid>
    <Pagination count={10} />
  </Box>
);

export default CardList;
