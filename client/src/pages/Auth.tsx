import Grid from '@mui/material/Grid';

import AuthBar from '../components/AuthBar';
import SignUp from '../components/SignUp';
import Footer from '../components/Footer';

export default function Auth() {
  return (
    <Grid container maxWidth='xl' justifyContent='center'>
      <Grid item xs={12}>
        <AuthBar />
      </Grid>
      <Grid item md={5}>
        <SignUp />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
