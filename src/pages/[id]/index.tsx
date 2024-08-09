import { GetServerSideProps } from 'next';
import { FC } from 'react';
import {
  Typography,
  Grid,
  List,
  ListItem,
  Box,
  Link,
  IconButton,
  Button,
} from '@mui/material';
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
import { useRouter } from 'next/router';

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
  const router = useRouter();
  return (
    <CenteredContainer>
      <Typography
        data-testid="DetailTitle"
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
              <Typography paragraph>{homeworld.name}</Typography>
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
      <Button
        data-testid="BackButton"
        variant="contained"
        onClick={() => router.push('/')}
      >
        Back to the Holocron
      </Button>
      <IconButton aria-label="add to favorites" size={'small'}></IconButton>
    </CenteredContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  try {
    const character = await getFullCharacterData(id as string);

    if (!character) {
      // Redirect to the error page if the character is not found
      return {
        redirect: {
          destination: '/_error',
          permanent: false,
        },
      };
    }

    return {
      props: {
        character,
      },
    };
  } catch (error) {
    // Log the error for debugging purposes
    // console.error('Failed to fetch character data:', error);

    // Redirect to the error page if an error occurs during data fetching
    const statusCode = (error as any).statusCode || 500;
    return {
      props: {
        error: {
          statusCode: 101,
        },
      },
    };
  }
};

export default CharacterPage;
