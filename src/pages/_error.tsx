// pages/_error.tsx
import { FC } from 'react';
import { Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';

const ERROR_MESSAGE =
  'The knowledge you seek is hidden in another galaxy. Please try again or use the Force to guide you back.';

const ErrorPage: FC = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Typography fontSize="1.8em" color="text.accent" mb={2}>
        vaj rampu&apos;DI&apos; vay&apos;
      </Typography>
      <Typography fontSize="1.2em" mb={6}>
        / something went wrong /
      </Typography>
      <Typography variant="body1" paragraph maxWidth={300} mb={6}>
        {ERROR_MESSAGE}
      </Typography>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => router.push('/')}
        >
          Back to the Holocron
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorPage;
