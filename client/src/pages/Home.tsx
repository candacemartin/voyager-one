import Grid from '@mui/material/Grid';

import Header from '../components/Header';
import SignUpContainer from '../components/SignUpContainer';
import Footer from '../components/Footer';

export default function Auth() {
  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item md={5}>
        <SignUpContainer />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
}
