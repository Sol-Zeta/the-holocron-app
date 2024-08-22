import React, { FC, useEffect, useState } from 'react';
import CardList from '@/components/CardList';
import { GetServerSideProps } from 'next';
import { getCharactersByPage } from '@/http/services/characters';
import Head from 'next/head';
import { storeWrapper } from '@/store/index';
import {
  getCharacters,
  setCharactersByPage,
  setPage,
  getFilteredCharacters,
} from '@/store/slices/characters';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import SearchInput from '@/components/SearchInput';
import { Box } from '@mui/material';
import { Dispatch, UnknownAction } from '@reduxjs/toolkit/react';

const Home: FC = () => {
  const { total, page } = useSelector(getCharacters);
  const charactersToShow = useSelector(getFilteredCharacters);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const setPageParam = (page: string) => {
    if (!page || router.query.page === page) return;
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    });
  };

  const retrieveCharacters = async (
    page: string,
    dispatch: Dispatch<UnknownAction>
  ) => {
    if (charactersToShow) {
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
    retrieveCharacters(page, dispatch);
  }, [page, isFirstLoad]);

  return (
    <>
      <Head>
        <title>The Holocron App</title>
        <meta
          name="description"
          content="Welcome to The Holocron App - Explore all the characters from the Star Wars Saga"
        />
      </Head>
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={4}
      >
        <SearchInput />
        <CardList cards={charactersToShow} page={page} total={total} />
      </Box>
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
          characters: data?.results || null,
          total: data?.count || null,
          previous: data?.previous || null,
          next: data?.next || null,
        })
      );
      return { props: {} };
    };
  });
