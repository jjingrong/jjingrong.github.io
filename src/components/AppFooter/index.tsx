import './index.css';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Container, Grid, IconButton } from '@mui/material';
import { useMemo } from 'react';

import Links from '../../Links';

const AppFooter = () => {
  const LinkedIn = () => (
    <IconButton href={Links.LINKEDIN} target="_blank">
      <LinkedInIcon fontSize={'large'} />
    </IconButton>
  );

  const Github = () => (
    <IconButton href={Links.GITHUB} target="_blank">
      <GitHubIcon fontSize={'large'} />
    </IconButton>
  );

  return (
    <div className="App-footer">
      <Container maxWidth="lg">
        <Github />
        <LinkedIn />
      </Container>
    </div>
  );
};

export default AppFooter;
