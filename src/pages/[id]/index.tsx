import { GetServerSideProps } from 'next';
import { FC } from 'react';
import { Typography, Grid, List, ListItem, Box } from '@mui/material';
import { CharacterFullData, CharacterSubobject } from '@/types/index';
import { getFullCharacterData } from '@/http/services/characters';
import { MEASUREMENT_UNIT } from '@/types/enums';
import {
  CenteredContainer,
  DetailPaper,
  DetailSection,
  StyledChip,
} from '@/styles/Details.module';
import { formatAttribute } from '@/utils/index';

interface CharacterPageProps {
  character: CharacterFullData;
}

const CharacterPage: FC<CharacterPageProps> = ({ character }) => {
  const {
    name,
    created,
    edited,
    films,
    vehicles,
    starships,
    homeworld,
    species,
    url,
    ...restData
  } = character || {};
  const listData = {
    films,
    vehicles,
    starships,
    species,
  };
  return (
    <CenteredContainer>
      <Typography
        fontSize={{ xs: 24, md: 32 }}
        variant="h3"
        margin="0 0 10px 0"
        color="text.accent"
      >
        {name}
      </Typography>
      <DetailPaper>
        <Grid container spacing={3}>
          <DetailSection item xs={12} md={6}>
            {Object.keys(restData).map((dataKey) => (
              <Box key={dataKey}>
                <Typography variant="h6">
                  {`${formatAttribute(dataKey)}`}
                </Typography>
                <Typography paragraph>{`${(restData as any)[dataKey]} ${
                  MEASUREMENT_UNIT[dataKey] || ''
                }`}</Typography>
              </Box>
            ))}
            <Box>
              <Typography variant="h6">Homeworld</Typography>
              <Typography paragraph>{character.homeworld.name}</Typography>
            </Box>
          </DetailSection>
          <DetailSection item xs={12} md={6}>
            {Object.keys(listData).map((dataKey) => (
              <Box key={dataKey}>
                {(listData as any)[dataKey].length ? (
                  <Typography variant="h6">
                    {`${formatAttribute(dataKey)}`}
                  </Typography>
                ) : null}
                <List style={{ textAlign: 'center' }}>
                  {(listData as any)[dataKey].map(
                    (data: CharacterSubobject, index: number) => (
                      <ListItem
                        key={index}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                        }}
                      >
                        <StyledChip
                          label={data.name || data.title}
                          variant="outlined"
                        />
                      </ListItem>
                    )
                  )}
                </List>
              </Box>
            ))}
          </DetailSection>
        </Grid>
      </DetailPaper>
    </CenteredContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const character = await getFullCharacterData(id as string);
  return {
    props: {
      character,
    },
  };
};

export default CharacterPage;
