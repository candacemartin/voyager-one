import Button from '@mui/material/Button';

export default function SignUpGoogleButton(): React.JSX.Element {
  return (
    <Button
      disabled={true}
      variant='contained'
      color={'secondary'}
      fullWidth
      sx={{ marginTop: 1 }}
    >
      sign up with google
    </Button>
  );
}
