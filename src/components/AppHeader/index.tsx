import './index.css';

import { Box, Link, Typography } from '@mui/material';

import Links from '../../Links';
import LaptopCodeIcon from '../LaptopCodeIcon';

const AppHeader = () => {
  return (
    <div className="App-header">
      <LaptopCodeIcon data-width="144" data-height="144" />
      <Typography variant="h3" component="h1">
        Jing Rong Lim
      </Typography>
      <Box sx={{ marginTop: 1 }}>
        <Typography variant="subtitle1">
          Technical Co-Founder @{' '}
          <Link
            href={Links.RATE_WEBSITE}
            color="inherit"
            target="_blank"
            rel="noopener">
            RateS
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default AppHeader;
