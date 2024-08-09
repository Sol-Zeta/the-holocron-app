import { Chip, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';

export const CenteredContainer = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const DetailPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 800,
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(3)
}));

export const DetailSection = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(10),
  display: 'flex',
  flexDirection: 'column',
  gap: 3,
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  color: theme.palette.text.primary,
}));
