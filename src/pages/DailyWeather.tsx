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

import AsyncFetchingComponent from '../components/FetchingComponent';

const cities = ['Munich', 'Berlin', 'Hamburg'];


const DailyWeather: React.FC = () => {
  const initialSelections = cities[0];

  const [selectedCity, setSelectedCity] = useState<string>(initialSelections);
  const [selectDate, setSelectDate] = useState<string>('');
  const [isWeatherCodeChecked, setIsWeatherCodeChecked] = useState<boolean>(false);
  const [isTemperature2mMaxChecked, setIsTemperature2mMaxChecked] = useState<boolean>(false);
  const [isTemperature2mMinChecked, setIsTemperature2mMinChecked] = useState<boolean>(false);
  const [isDaylightDurationChecked, setIsDaylightDurationChecked] = useState<boolean>(false);
  const [isSunshineDurationChecked, setIsSunshineDurationChecked] = useState<boolean>(false);
  const [isPrecipitationSumChecked, setIsPrecipitationSumChecked] = useState<boolean>(false);
  const [isRainSumChecked, setIsRainSumChecked] = useState<boolean>(false);
  const [isShowersSumChecked, setIsShowersSumChecked] = useState<boolean>(false);
  const [isSnowfallSumChecked, setIsSnowfallSumChecked] = useState<boolean>(false);
  const [isPrecipitationHoursChecked, setIsPrecipitationHoursChecked] = useState<boolean>(false);
  const [isPrecipitationProbabilityMaxChecked, setIsPrecipitationProbabilityMaxChecked] = useState<boolean>(false);
  const [isWindSpeed10mMaxChecked, setIsWindSpeed10mMaxChecked] = useState<boolean>(false);
  const [isWindGusts10mMaxChecked, setIsWindGusts10mMaxChecked] = useState<boolean>(false);
  const [isWindDirection10mDominantChecked, setIsWindDirection10mDominantChecked] = useState<boolean>(false);
  const [isShortwaveRadiationSumChecked, setIsShortwaveRadiationSumChecked] = useState<boolean>(false);
  const [isEt0FaoEvapotranspirationChecked, setIsEt0FaoEvapotranspirationChecked] = useState<boolean>(false);


const clickFunction = () => {
  console.log('clicked');
}

 
return (

<Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {/* First Row: Date Selection */}

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

        <Grid item xs={12}>
          <Typography variant="h6">Select Time Period</Typography>
          <Box sx={{ display: 'flex', gap: 2, marginTop: 1 }}>
            <TextField
              label="Select Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={selectDate}
              onChange={(e) => setSelectDate(e.target.value)}
            />
          </Box>
        </Grid>

        {/* Second Row: Checkbox */}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isWeatherCodeChecked}
                onChange={(e) => setIsWeatherCodeChecked(e.target.checked)}
                color="primary"
              />
            }
            label="isWeatherCodeChecked"
          />
        </Grid>


        {/* Right-Side Information Box */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, marginTop: 3 }}>
            <Typography variant="h6">Information Summary</Typography>
            <Typography variant="body1">
              <strong>Start Date:</strong> {selectDate || 'Not selected'}
            </Typography>

            <Typography variant="body1">
              <strong>Test Checkbox:</strong> {isWeatherCodeChecked ? 'Checked' : 'Not Checked'}
            </Typography>
            <Typography variant="body1">
              <strong>Selected City:</strong> {selectedCity || 'Not selected'}
            </Typography>

            {/* Button to Fetch Data and Loading Indicator */}
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={clickFunction}
              >
                Fetch Data and Visualize
              </Button>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
              <AsyncFetchingComponent />
            </Box>


          </Paper>
        </Grid>

      </Grid>
    </Box>


  )
};

export default DailyWeather;
