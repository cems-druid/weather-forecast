import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './front-end/components/Navbar';
import HomePage from './front-end/pages/HomePage';
import CurrentWeather from './front-end/pages/CurrentWeather';
import DailyWeather from './front-end/pages/DailyWeather';
import Configuration from './front-end/pages/Configuration';
import { Container } from '@mui/material';
import { connectToMongoDb } from './back-end/database/init-mongodb';
import { MongoDBService } from "./front-end/services/dbService";


const App: React.FC = () => {

  //Connect to DB and disconnect when the app is closed
  useEffect(() => {
    MongoDBService.connectToMongoDb();
    return () => {
      MongoDBService.closeMongoDbConnection();
    }
  }, []);


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
