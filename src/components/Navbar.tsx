import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar: React.FC<{ onNavClick: (page: string) => void }> = ({ onNavClick }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Weather Forecast
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => onNavClick('home')}>
            Home
          </Button>
          <Button color="inherit" onClick={() => onNavClick('currentWeather')}>
            Current Weather
          </Button>
          <Button color="inherit" onClick={() => onNavClick('dailyWeather')}>
            Daily Weather
          </Button>
          <Button color="inherit" onClick={() => onNavClick('configuration')}>
            Configuration
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
