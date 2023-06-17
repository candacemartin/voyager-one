import { useState } from 'react';
import Box from '@mui/material/Box';

import SignUpInput from './SignUpInput';
import SignUpButton from './SignUpButton';
import SignUpEmails from './SignUpEmails';

export default function SignUpForm(): React.JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailSignUp, setEmailSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('testing');
  };

  return (
    <Box component='form' noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
      <SignUpInput inputType='email' value={email} handleChange={setEmail} />
      <SignUpInput
        inputType='password'
        value={password}
        handleChange={setPassword}
      />
      <SignUpEmails emailSignUp={emailSignUp} handleChange={setEmailSignUp} />
      <SignUpButton />
    </Box>
  );
}
