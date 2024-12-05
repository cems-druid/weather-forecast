import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CurrentWeather from './pages/CurrentWeather';
import DailyWeather from './pages/DailyWeather';
import Configuration from './pages/Configuration';
import { Container } from '@mui/material';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'currentWeather':
        return <CurrentWeather />;
      case 'dailyWeather':
        return <DailyWeather />;
      case 'configuration':
        return <Configuration />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div>
      <Navbar onNavClick={setCurrentPage} />
      <Container sx={{ marginTop: 4 }}>
        {renderPage()}
      </Container>
    </div>
  );
};

export default App;
