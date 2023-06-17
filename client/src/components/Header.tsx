import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import LoginModal from './LoginModal';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            MycoTech
          </Typography>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <LoginModal />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
