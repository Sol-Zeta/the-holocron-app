import React, { FC } from 'react';
import styles from './CardList.module.scss';
import Card from '@/components/Card';

interface CardListProps {
  cards: any[];
}

const CardList: FC<CardListProps> = ({cards}) => (
  <div className={styles.CardList} data-testid="CardList">
    card list
    {JSON.stringify(cards)}
    {cards.map(card => (
      <Card key={card} data={card}/>
    ))}
  </div>
);

export default CardList;
