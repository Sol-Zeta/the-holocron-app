import React, { FC } from 'react';
import styles from '@/styles/Home.module.scss';
import CardList from '@/components/CardList';
import { GetServerSideProps } from 'next';

interface HomeProps {
  characters: any[];
}

const Home: FC<HomeProps> = ({ characters }) => {
  console.log({ characters });
  return (
    <div className={styles.Home} data-testid="Home">
      Home Component
      <CardList cards={characters} />
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<any> = async (context) => {
  return {
    props: { characters: ['card 1', 'card 2'] },
  };
};
