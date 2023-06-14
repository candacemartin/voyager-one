import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        margin: '1rem',
      }}
    >
      <CopyrightIcon />
      <Typography>{currentYear}</Typography>
    </Box>
  );
}
