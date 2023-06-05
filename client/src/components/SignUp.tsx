import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
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
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, signUpToEmails }),
      });
      if (!response.ok) {
        throw new Error('Error signing up. Please try again.');
      }
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogleAuth = () => {
    console.log('google auth');
  };

  const handleSignUpToEmails = () => setSignUpToEmails(!signUpToEmails);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '2rem',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component='h1' variant='h5'>
        sign up
      </Typography>
      <Box component='form' noValidate sx={{ mt: 3 }}>
        <TextField
          sx={{ mb: 1 }}
          type='email'
          required
          fullWidth
          id='email'
          label='email address'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='email'
        />
        <TextField
          required
          fullWidth
          sx={{ mb: 1 }}
          name='password'
          label='password'
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='new-password'
        />
        <FormControlLabel
          sx={{ mb: 1 }}
          onClick={() => handleSignUpToEmails()}
          control={<Checkbox value='allowExtraEmails' color='primary' />}
          label='click here if you want to receive inspiration, marketing promotions and updates via email :)'
        />
        <Button
          sx={{ mt: 1 }}
          fullWidth
          type='submit'
          variant='contained'
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
            handleSubmit(e)
          }
        >
          sign up
        </Button>
        <Button
          fullWidth
          variant='contained'
          sx={{
            mt: 0.5,
            backgroundColor: '#0F9D58',
            ':hover': { backgroundColor: '#DB4437' },
          }}
          onClick={() => handleGoogleAuth()}
        >
          Sign Up with Google
        </Button>
      </Box>
    </Box>
  );
}
