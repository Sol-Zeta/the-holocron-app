import React, { FC } from 'react';
import Card from '@/components/Card';
import { Character } from '@/types/index';
import { Grid } from '@mui/material';

interface CardListProps {
  cards: Character[];
}

const CardList: FC<CardListProps> = ({ cards }) => (
  <Grid
    data-testid="CardList"
    container
    direction={'row'}
    justifyContent="center"
    rowSpacing={3}
    gap={10}
    columnSpacing={{ xs: 1, sm: 2, md: 12 }}
  >
    {cards.map((card) => (
      <Card key={card.name} data={card} />
    ))}
  </Grid>
);

export default CardList;
