import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Paper,
  Button,
  CircularProgress,
} from '@mui/material';
import { Line } from 'react-chartjs-2';
import { getSelections, updateSelections } from '../services/selectionStorage';
import dataJson from '../data/data.json'; // Assuming data.json is in the src/data folder
import ExampleChart from '../components/ExampleChart';

const cities = ['Munich', 'Berlin', 'Tokyo', 'Sydney', 'New York'];

const CurrentWeather: React.FC = () => {
  const initialSelections = getSelections();

  const [startDate, setStartDate] = useState<string>(initialSelections.startDate);
  const [endDate, setEndDate] = useState<string>(initialSelections.endDate);
  const [isTestChecked, setIsTestChecked] = useState<boolean>(initialSelections.isTestChecked);
  const [selectedCity, setSelectedCity] = useState<string>(initialSelections.selectedCity);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<any[]>([]);

  useEffect(() => {
    updateSelections({ startDate });
  }, [startDate]);

  useEffect(() => {
    updateSelections({ endDate });
  }, [endDate]);

  useEffect(() => {
    updateSelections({ isTestChecked });
  }, [isTestChecked]);

  useEffect(() => {
    updateSelections({ selectedCity });
  }, [selectedCity]);

  const handleFetchData = () => {
    setIsLoading(true);
    setTimeout(() => {
      const filtered = dataJson.filter(
        (entry) =>
          entry.name === selectedCity &&
          new Date(entry.time.$date) >= new Date(startDate) &&
          new Date(entry.time.$date) <= new Date(endDate)
      );
      setFilteredData(filtered);
      setIsLoading(false);
    }, 1000);
  };

  const chartData = {
    labels: filteredData.map((data) => new Date(data.time.$date).toLocaleString()),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: filteredData.map((data) => data.temperature2m),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
    ],
  };

  const chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'timeseries',
        time: {
          unit: 'hour',
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {/* First Row: Date Selection */}
        <Grid item xs={12}>
          <Typography variant="h6">Select Time Period</Typography>
          <Box sx={{ display: 'flex', gap: 2, marginTop: 1 }}>
            <TextField
              label="Start Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <TextField
              label="End Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </Box>
        </Grid>

        {/* Second Row: Checkbox */}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isTestChecked}
                onChange={(e) => setIsTestChecked(e.target.checked)}
                color="primary"
              />
            }
            label="TEST"
          />
        </Grid>

        {/* Third Row: City Dropdown */}
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="city-select-label">Select City</InputLabel>
            <Select
              labelId="city-select-label"
              id="city-select"
              value={selectedCity}
              label="Select City"
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Right-Side Information Box */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
            <Typography variant="h6">Information Summary</Typography>
            <Typography variant="body1">
              <strong>Start Date:</strong> {startDate || 'Not selected'}
            </Typography>
            <Typography variant="body1">
              <strong>End Date:</strong> {endDate || 'Not selected'}
            </Typography>
            <Typography variant="body1">
              <strong>Test Checkbox:</strong> {isTestChecked ? 'Checked' : 'Not Checked'}
            </Typography>
            <Typography variant="body1">
              <strong>Selected City:</strong> {selectedCity || 'Not selected'}
            </Typography>

            {/* Button to Fetch Data and Loading Indicator */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleFetchData}
                disabled={isLoading}
              >
                Fetch Data and Visualize
              </Button>
              {isLoading && <CircularProgress size={24} sx={{ marginLeft: 2 }} />}
            </Box>
          </Paper>
        </Grid>

        <ExampleChart/>
      </Grid>
    </Box>
  );
};

export default CurrentWeather;
