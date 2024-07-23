import React, { FC } from 'react';
import styles from './Card.module.scss';
import { Character } from '@/types/index';

interface CardProps {
  data: Character;
}

const Card: FC<CardProps> = ({data}) => (
  <div className={styles.Card} data-testid="Card">
    Card Component:
    <p>{data.name}</p>
  </div>
);

export default Card;
