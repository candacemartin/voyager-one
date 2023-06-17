import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  padding: '25px',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid black',
  boxShadow: 20,
};

export default function LoginModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = () => console.log('button clicked');

  return (
    <>
      <Button color='inherit' onClick={handleOpen}>
        Login
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} component='form' onSubmit={handleSubmit}>
          <Typography variant='h6' component='h2' mb={1} textAlign='center'>
            log in
          </Typography>
          <TextField
            sx={{ mb: 1 }}
            type='email'
            required
            fullWidth
            id='email-login'
            label='email'
            name='email-login'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            sx={{ mb: 1 }}
            type='password'
            required
            fullWidth
            id='password-login'
            label='password'
            name='password-login'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant='contained' fullWidth>
            log in
          </Button>
        </Box>
      </Modal>
    </>
  );
}