import Button from '@mui/material/Button';

export default function SignUpButton(): React.JSX.Element {
  return (
    <Button sx={{ mt: 1 }} fullWidth type='submit' variant='contained'>
      sign up
    </Button>
  );
}
