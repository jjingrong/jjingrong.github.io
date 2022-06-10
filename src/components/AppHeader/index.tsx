import { Box, Typography } from '@mui/material';

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
          Software Engineer. Technical Co-Founder
        </Typography>
      </Box>
    </div>
  );
};

export default AppHeader;
