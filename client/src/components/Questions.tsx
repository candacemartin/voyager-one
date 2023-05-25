import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Questions() {
  const [mushroomType, setMushroomType] = useState<string>('');
  const [container, setContainer] = useState<string>('');
  const [substrate, setSubstrate] = useState<string>('');
  const [inoculationMethod, setInoculationMethod] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const card = { mushroomType, container, substrate, inoculationMethod };
    await fetch('/api/user/create', {
      method: 'post',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(card),
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return `inside handle catch ${err}`;
      });
  };

  return (
    <Box
      component='form'
      sx={{ display: 'flex', flexDirection: 'column', width: '500px' }}
    >
      <TextField
        required
        variant='outlined'
        label='Mushroom Type'
        value={mushroomType}
        onChange={(e) => setMushroomType(e.target.value)}
      />
      <TextField
        required
        variant='outlined'
        label='Container'
        value={container}
        onChange={(e) => setContainer(e.target.value)}
      />
      <TextField
        required
        variant='outlined'
        label='Substrate'
        value={substrate}
        onChange={(e) => setSubstrate(e.target.value)}
      />
      <TextField
        required
        variant='outlined'
        label='Inoculation Method'
        value={inoculationMethod}
        onChange={(e) => setInoculationMethod(e.target.value)}
      />
      <Button
        type='submit'
        variant='contained'
        onSubmit={(e: React.FormEvent<HTMLButtonElement>) => handleSubmit(e)}
      >
        Add New Card
      </Button>
    </Box>
  );
}
