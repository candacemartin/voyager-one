import Box from '@mui/material/Box';

import SignUpHeader from './SignUpHeader';
import SignUpForm from './SignUpForm';
import SignUpGoogleButton from './SignUpGoogleButton';

export default function SignUpContainer(): React.JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2rem',
      }}
    >
      <SignUpHeader />
      <SignUpForm />
      <SignUpGoogleButton />
    </Box>
  );
}
