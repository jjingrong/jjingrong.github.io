import './App.css';

import { Box, Typography } from '@mui/material';
import React from 'react';

import LaptopCodeIcon from './components/LaptopCodeIcon';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <LaptopCodeIcon data-width="144" data-height="144" />
        <Typography variant="h3" component="h1">
          Jing Rong Lim
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="subtitle2">
            Software Engineer | Technical Co-Founder
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default App;
