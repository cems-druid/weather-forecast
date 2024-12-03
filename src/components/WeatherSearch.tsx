import React, { useState } from 'react';
import { fetchWeatherByCity } from '../services/weatherService';
import { TextField, Button, Typography, Box, Paper } from '@mui/material';

type WeatherData = {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    weather: { description: string }[];
};

const WeatherSearch: React.FC = () => {
    const [city, setCity] = useState<string>('');
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string>('');

    const handleSearch = async () => {
        try {
            const data = await fetchWeatherByCity(city);
            setWeather(data);
            setError('');
        } catch (err) {
            setWeather(null);
            setError('City not found. Please try again.');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 2,
                p: 4,
            }}
        >
            <Typography variant="h4" component="h2" gutterBottom>
                Weather Forecast Search (Dummy Data)
            </Typography>
            <TextField
                label="Enter city name"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                sx={{ width: '300px' }}
            />
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
            {error && (
                <Typography variant="body1" color="error">
                    {error}
                </Typography>
            )}
            {weather && (
                <Paper
                    elevation={3}
                    sx={{ p: 2, mt: 2, textAlign: 'center', maxWidth: '400px' }}
                >
                    <Typography variant="h5">{weather.name}</Typography>
                    <Typography variant="body1">
                        Temperature: {weather.main.temp}°C
                    </Typography>
                    <Typography variant="body1">
                        Weather: {weather.weather[0].description}
                    </Typography>
                    <Typography variant="body1">Humidity: {weather.main.humidity}%</Typography>
                </Paper>
            )}
        </Box>
    );
};

export default WeatherSearch;
