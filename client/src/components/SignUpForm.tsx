import { useState } from 'react';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

import SignUpInput from './SignUpInput';
import SignUpButton from './SignUpButton';
import SignUpEmails from './SignUpEmails';

export default function SignUpForm(): React.JSX.Element {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subscribedToEmails, setSubscribedToEmails] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        subscribedToEmails,
      }),
    })
      .then(() => {
        setEmail('');
        setPassword('');
        setSubscribedToEmails(false);
        return navigate('/dashboard');
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box component='form' noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
      <SignUpInput inputType='email' value={email} handleChange={setEmail} />
      <SignUpInput
        inputType='password'
        value={password}
        handleChange={setPassword}
      />
      <SignUpEmails
        emailSignUp={subscribedToEmails}
        handleChange={setSubscribedToEmails}
      />
      <SignUpButton />
    </Box>
  );
}
