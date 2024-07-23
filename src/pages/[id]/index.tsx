import React, { FC } from 'react';
import { GetServerSideProps } from 'next';

interface DetailsProps {
}

const Details: FC<DetailsProps> = () => {
  return (
    <>
      <div data-testid="Detail">
        Details Component
      </div>
    </>
  );
};

export default Details;

export const getServerSideProps: GetServerSideProps<DetailsProps> = async (
  context
) => {
  return {
    props: {},
  };
};
