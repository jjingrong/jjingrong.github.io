import './index.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, IconButton, Typography } from '@mui/material';

import Links from '../../Links';

const AppFooter = () => {
  const LinkedIn = () => (
    <IconButton href={Links.LINKEDIN} target="_blank" rel="noopener">
      <LinkedInIcon fontSize={'large'} />
    </IconButton>
  );

  const Github = () => (
    <IconButton href={Links.GITHUB} target="_blank" rel="noopener">
      <GitHubIcon fontSize={'large'} />
    </IconButton>
  );

  return (
    <div className="App-footer">
      <Container maxWidth="lg">
        <Typography sx={{ paddingBottom: 2 }} variant="h5" component="h2">
          JR's socials
        </Typography>
        <Github />
        <LinkedIn />
      </Container>
    </div>
  );
};

export default AppFooter;
