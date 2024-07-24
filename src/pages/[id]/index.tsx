// pages/character.tsx

import { GetServerSideProps } from 'next';
import { FC } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  Chip,
  List,
  ListItem,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import { Character } from '@/types/index';

// Styled components
const CenteredContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

const DetailPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 800,
  width: '100%',
  textAlign: 'center',
  margin: theme.spacing(3, 0),
}));

const DetailSection = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const StyledLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

interface CharacterPageProps {
  character: Character;
}

const formatAttribute = (attribute: string) => {
  const withSpaces = attribute.replace(/_/g, ' ');
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
};

const MEASUREMENT_UNIT: { [key: string]: string } = {
  height: 'cm',
  mass: 'cm',
};

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
  } = character;
  return (
    <CenteredContainer>
      <Typography fontSize={{ xs: 24, md: 32 }} variant="h3" margin={0}>
        {name}
      </Typography>
      <DetailPaper>
        <Grid container spacing={3}>
          <DetailSection
            item
            xs={12}
            md={6}
            display={'flex'}
            flexDirection={'column'}
            gap={3}
          >
            {Object.keys(restData).map((dataKey) => (
              <Box key={dataKey}>
                <Typography variant="h6">
                  {`${formatAttribute(dataKey)}:`}
                </Typography>
                <Typography variant="body1">{`${(restData as any)[dataKey]} ${
                  MEASUREMENT_UNIT[dataKey] || ''
                }`}</Typography>
              </Box>
            ))}
          </DetailSection>
          <DetailSection item xs={12} md={6}>
            <Typography variant="h6">Homeworld:</Typography>
            <Typography variant="body1">
              <StyledLink
                href={character.homeworld}
                target="_blank"
                rel="noopener noreferrer"
              >
                {character.homeworld}
              </StyledLink>
            </Typography>
            <Typography variant="h6">Films:</Typography>
            <List>
              {character.films.map((film: string, index: number) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      <StyledLink
                        href={film}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {film}
                      </StyledLink>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6">Vehicles:</Typography>
            <List>
              {character.vehicles.map((vehicle: string, index: number) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      <StyledLink
                        href={vehicle}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {vehicle}
                      </StyledLink>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Typography variant="h6">Starships:</Typography>
            <List>
              {character.starships.map((starship: string, index: number) => (
                <ListItem key={index}>
                  <ListItemText
                    primary={
                      <StyledLink
                        href={starship}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {starship}
                      </StyledLink>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </DetailSection>
        </Grid>
      </DetailPaper>
    </CenteredContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`https://swapi.trileuco.com/api/people/${id}`);
  const character = await res.json();

  return {
    props: {
      character,
    },
  };
};

export default CharacterPage;
