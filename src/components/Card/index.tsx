import React, { FC } from 'react';
import { Character } from '@/types/index';
import {
  CardContent,
  CardHeader,
  CardMedia,
  Card as CardWrapper,
  IconButton,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { getCharacterId, getDateString } from '@/utils/index';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

interface CardProps {
  data: Character;
}

const Card: FC<CardProps> = ({ data }) => {
  const { name, films, url, created, edited } = data;
  const cardId = getCharacterId(url);
  return (
    <CardWrapper sx={{ maxWidth: 345 }} data-testid="Card" variant="outlined">
      <CardHeader
        action={
          <Link href={`/${cardId}`}>
            <IconButton aria-label="add to favorites" size={'small'}>
              <OpenInNewOutlinedIcon />
            </IconButton>
          </Link>
        }
        title={name}
        subheader={`Created on ${getDateString(created)}`}
        titleTypographyProps={{ color: 'text.title' }}
      />
      <CardMedia
        component="img"
        height="194"
        image={
          'https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg'
        }
        alt={name}
      />
      <CardContent>
        <Typography
          variant="body2"
          color="text.title"
        >{`Last update: ${getDateString(edited)}`}</Typography>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
