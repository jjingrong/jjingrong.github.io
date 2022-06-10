import React from 'react';
import logo from './logo.svg';
import './App.css';
import LaptopCodeIcon from './components/LaptopCodeIcon';
import { Box, Typography } from '@mui/material';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <LaptopCodeIcon data-width="144" data-height="144" />
        <Typography variant="h3" component="h1">
          <u>Jing Rong</u> Lim
        </Typography>
        <Box>
          <Typography variant="subtitle1">
            Software Engineer | Technical Co-Founder
          </Typography>
        </Box>
      </div>
    </div>
  );
};

export default App;
