import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

// function Copyright(props: any) {
//   return (
//     <Typography
//       variant='body2'
//       color='text.secondary'
//       align='center'
//       {...props}
//     >
//       {'copyright © '}
//       <Link color='inherit' href='https://mui.com/'>
//         your website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// function GoogleAuth(props: any) {
//   return (
//     <div>
//       <a href="/auth/google">Login with Google</a>
//     </div>
//   )
// }

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpToEmails, setSignUpToEmails] = useState(false);

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
  };

  const handleSignUpToEmails = () => setSignUpToEmails(!signUpToEmails);

  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        sign up
      </Typography>
      <Box component='form' noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id='email'
              label='email address'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name='password'
              label='password'
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete='new-password'
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              onClick={() => handleSignUpToEmails()}
              control={<Checkbox value='allowExtraEmails' color='primary' />}
              label='click here if you want to receive inspiration, marketing promotions and updates via email :)'
            />
          </Grid>
        </Grid>
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleSubmit(e)
          }
        >
          sign up
        </Button>
      </Box>
    </Box>
  );
}
