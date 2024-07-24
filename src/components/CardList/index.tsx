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
    gap={{ xs: 4, sm: 4, md: 10 }}
  >
    {cards.map((card) => (
      <Card key={card.name} data={card} />
    ))}
  </Grid>
);

export default CardList;
