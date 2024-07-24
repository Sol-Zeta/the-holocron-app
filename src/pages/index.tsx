import React, { FC, useEffect, useState } from 'react';
import styles from '@/styles/Home.module.scss';
import CardList from '@/components/CardList';
import { GetServerSideProps } from 'next';
import { getCharactersByPage } from '@/http/services/characters';
import Head from 'next/head';
import { storeWrapper } from '@/store/index';
import {
  getCharacters,
  setCharactersByPage,
  setPage,
} from '@/store/slices/characters';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Home: FC = () => {
  const { charactersPages, total, page } = useSelector(getCharacters);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const setPageParam = (page: string) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };
  const retrieveCharacters = async (page: string) => {
    if (charactersPages[page]) {
      return;
    }
    const data = await getCharactersByPage(page as string);
    dispatch(
      setCharactersByPage({
        characters: data?.results || {},
        total: data?.count,
        previous: data?.previous,
        next: data?.next,
      })
    );
  };
  useEffect(() => {
    setPageParam(page);
    if (isFirstLoad) {
      setIsFirstLoad(false);
      return;
    }
    retrieveCharacters(page);
  }, [page]);

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
        {charactersPages[page] && (
          <CardList cards={charactersPages[page]} page={page} total={total} />
        )}
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps =
  storeWrapper.getServerSideProps((store) => {
    return async ({ query }) => {
      const currentPage = query.page || '1';
      const data = await getCharactersByPage(currentPage as string);
      store.dispatch(setPage(currentPage));
      store.dispatch(
        setCharactersByPage({
          characters: data?.results || {},
          total: data?.count,
          previous: data?.previous,
          next: data?.next,
        })
      );
      return { props: {} };
    };
  });
