import React, { FC } from 'react';
import { Character } from '@/types/index';
import {
  CardContent,
  CardHeader,
  Card as CardWrapper,
  IconButton,
  Typography,
} from '@mui/material';
import { getDateString } from '@/utils/index';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

interface CardProps {
  data: Character;
}

const Card: FC<CardProps> = ({ data }) => {
  const { name, gender, id, created, edited } = data;
  return (
    <CardWrapper
      component="a"
      href={`/${id}`}
      sx={{ maxWidth: 345, minWidth: 280 }}
      data-testid="Card"
      variant="outlined"
    >
      <CardHeader
        action={
          <IconButton aria-label="add to favorites" size={'small'}>
            <OpenInNewOutlinedIcon />
          </IconButton>
        }
        title={name}
        subheader={`Gender: ${gender}`}
        titleTypographyProps={{ color: 'text.title' }}
        subheaderTypographyProps={{ textTransform: 'capitalize' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.primary">
          {`Created on ${getDateString(created)}`}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {`Update on ${getDateString(edited)}`}
        </Typography>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
