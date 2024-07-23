import React, { FC } from 'react';
import styles from './CardList.module.scss';
import Card from '@/components/Card';
import { Character } from '@/types/index';

interface CardListProps {
  cards: Character[];
}

const CardList: FC<CardListProps> = ({cards}) => (
  <div className={styles.CardList} data-testid="CardList">
    {cards.map(card => (
      <Card key={card.name} data={card}/>
    ))}
  </div>
);

export default CardList;
