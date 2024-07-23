import React, { FC } from 'react';
import styles from '@/styles/Home.module.scss';
import CardList from '@/components/CardList';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { getCharactersByPage } from '../http/services/characters';
import { SwapiCharactersResponse } from '../types';
import Head from 'next/head';

interface HomeProps {
  characters?: SwapiCharactersResponse;
}

const Home: FC<HomeProps> = ({ characters }) => {
  return (
    <>
      <Head>
        <title>The Holocron App</title>
        <meta
          name="description"
          content="Welcome to The Holocron App - Explore all the characters from the Star Wars Saga"
        />
      </Head>
      <div className={styles.Home} data-testid="Home">
        Home Component
        {characters?.results && <CardList cards={characters.results} />}
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  context
) => {
  const data = await getCharactersByPage();
  if (!data)
    return {
      props: {},
    };
  return {
    props: { characters: data },
  };
};
