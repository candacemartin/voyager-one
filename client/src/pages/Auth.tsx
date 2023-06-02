import Container from '@mui/material/Container';

import AuthBar from '../components/AuthBar';
import SignUp from '../components/SignUp';

export default function Auth() {
  return (
    <Container maxWidth='xl'>
      <AuthBar />
      <SignUp />
    </Container>
  );
}
