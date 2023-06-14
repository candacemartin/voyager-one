import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
      id='question-component-wrapper'
      sx={{
        width: '500px',
        border: 1,
        padding: 5,
        borderRadius: 5,
        borderColor: 'black',
      }}
    >
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid item xs={12} sm={6}>
          <Typography color={'white'}>
            <FormLabel>Mushroom Type</FormLabel>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            variant='outlined'
            value={mushroomType}
            onChange={(e) => setMushroomType(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel>Container</FormLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            variant='outlined'
            value={container}
            onChange={(e) => setContainer(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormLabel>Substrate</FormLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            variant='outlined'
            value={substrate}
            onChange={(e) => setSubstrate(e.target.value)}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormLabel>Inoculation Method</FormLabel>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            variant='outlined'
            value={inoculationMethod}
            onChange={(e) => setInoculationMethod(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button
            fullWidth
            type='submit'
            variant='contained'
            onSubmit={(e: React.FormEvent<HTMLButtonElement>) =>
              handleSubmit(e)
            }
          >
            Add New Card
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
