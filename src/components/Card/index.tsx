import React, { FC } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  data: any;
}

const Card: FC<CardProps> = ({data}) => (
  <div className={styles.Card} data-testid="Card">
    Card Component:
    <p>{data}</p>
  </div>
);

export default Card;
