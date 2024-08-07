import { Box, Input, InputAdornment } from '@mui/material';
import { styled } from '@mui/system';

export const SmallIconContainer = styled(InputAdornment)(() => ({
  '& svg': {
    width: 15,
    Height: 15,
  },
}));

export const SearchContainer = styled(Box)(() => ({
  width: '100%',
  maxWidth: 300,
}));

export const StyledInput = styled(Input)(() => ({
  width: '100%',
}));
