import React, { useState, useEffect, createContext } from 'react';
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
  Grid2,
} from '@mui/material';

import AsyncFetchingComponent from '../components/FetchingComponent';


const cities = ['Munich', 'Berlin', 'Hamburg'];

interface DailyWeatherContextProps {
  selectedCity: string;
  //setSelectedCity: React.Dispatch<React.SetStateAction<string>>
  selectDate: string;
  //setSelectDate: React.Dispatch<React.SetStateAction<string>>
  isWeatherCodeChecked: boolean;
  //setIsWeatherCodeChecked: React.Dispatch<React.SetStateAction<boolean>>
  isTemperature2mMinChecked: boolean;
  //setIsTemperature2mMinChecked: React.Dispatch<React.SetStateAction<boolean>>
  isTemperature2mMaxChecked: boolean;
  //setIsTemperature2mMaxChecked: React.Dispatch<React.SetStateAction<boolean>>
  isDaylightDurationChecked: boolean;
  //setIsDaylightDurationChecked: React.Dispatch<React.SetStateAction<boolean>>
  isSunshineDurationChecked: boolean;
  //setIsSunshineDurationChecked: React.Dispatch<React.SetStateAction<boolean>>
  isPrecipitationSumChecked: boolean;
  //setIsPrecipitationSumChecked: React.Dispatch<React.SetStateAction<boolean>>
  isRainSumChecked: boolean;
  //setIsRainSumChecked: React.Dispatch<React.SetStateAction<boolean>>
  isShowersSumChecked: boolean;
  //setIsShowersSumChecked: React.Dispatch<React.SetStateAction<boolean>>
  isSnowfallSumChecked: boolean;
  //setIsSnowfallSumChecked: React.Dispatch<React.SetStateAction<boolean>>
  isPrecipitationHoursChecked: boolean;
  //setIsPrecipitationHoursChecked: React.Dispatch<React.SetStateAction<boolean>>
  isPrecipitationProbabilityMaxChecked: boolean;
  //setIsPrecipitationProbabilityMaxChecked: React.Dispatch<React.SetStateAction<boolean>>
  isWindSpeed10mMaxChecked: boolean;
  //setIsWindSpeed10mMaxChecked: React.Dispatch<React.SetStateAction<boolean>>
  isWindGusts10mMaxChecked: boolean;
  //setIsWindGusts10mMaxChecked: React.Dispatch<React.SetStateAction<boolean>>
  isWindDirection10mDominantChecked: boolean;
  //setIsWindDirection10mDominantChecked: React.Dispatch<React.SetStateAction<boolean>>
  isShortwaveRadiationSumChecked: boolean;
  //setIsShortwaveRadiationSumChecked: React.Dispatch<React.SetStateAction<boolean>>
  isEt0FaoEvapotranspirationChecked: boolean;
  //setIsEt0FaoEvapotranspirationChecked: React.Dispatch<React.SetStateAction<boolean>>
}

export const DailyWeatherAppContext = createContext<DailyWeatherContextProps | undefined>(undefined);


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


  const weatherDailyContextValue = {
    selectedCity,
    selectDate,
    isWeatherCodeChecked,
    isTemperature2mMaxChecked,
    isTemperature2mMinChecked,
    isDaylightDurationChecked,
    isSunshineDurationChecked,
    isPrecipitationSumChecked,
    isRainSumChecked,
    isShowersSumChecked,
    isSnowfallSumChecked,
    isPrecipitationHoursChecked,
    isPrecipitationProbabilityMaxChecked,
    isWindSpeed10mMaxChecked,
    isWindGusts10mMaxChecked,
    isWindDirection10mDominantChecked,
    isShortwaveRadiationSumChecked,
    isEt0FaoEvapotranspirationChecked,

    //setSelectedCity,
    //setSelectDate,
    //setIsWeatherCodeChecked,
    //setIsTemperature2mMaxChecked,
    //setIsTemperature2mMinChecked,
    //setIsDaylightDurationChecked,
    //setIsSunshineDurationChecked,
    //setIsPrecipitationSumChecked,
    //setIsRainSumChecked,
    //setIsShowersSumChecked,
    //setIsSnowfallSumChecked,
    //setIsPrecipitationHoursChecked,
    //setIsPrecipitationProbabilityMaxChecked,
    //setIsWindSpeed10mMaxChecked,
    //setIsWindGusts10mMaxChecked,
    //setIsWindDirection10mDominantChecked,
    //setIsShortwaveRadiationSumChecked,
    //setIsEt0FaoEvapotranspirationChecked
  }


  const clickFunction = () => {
    console.log('clicked');
  }


  return (
    <Box sx={{ flexGrow: 2 }}>
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
            label="WeatherCode"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isTemperature2mMaxChecked}
                onChange={(e) => setIsTemperature2mMaxChecked(e.target.checked)}
                color="primary"
              />
            }
            label="Temperature2mMax"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isTemperature2mMinChecked}
                onChange={(e) => setIsTemperature2mMinChecked(e.target.checked)}
                color="primary"
              />
            }
            label="Temperature2mMin"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isDaylightDurationChecked}
                onChange={(e) => setIsDaylightDurationChecked(e.target.checked)}
                color="primary"
              />
            }
            label="DayLightDuration"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isSunshineDurationChecked}
                onChange={(e) => setIsSunshineDurationChecked(e.target.checked)}
                color="primary"
              />
            }
            label="SunshineDuration"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isPrecipitationHoursChecked}
                onChange={(e) => setIsPrecipitationHoursChecked(e.target.checked)}
                color="primary"
              />
            }
            label="PrecipitaionHours"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isRainSumChecked}
                onChange={(e) => setIsRainSumChecked(e.target.checked)}
                color="primary"
              />
            }
            label="RainSum"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isPrecipitationProbabilityMaxChecked}
                onChange={(e) => setIsPrecipitationProbabilityMaxChecked(e.target.checked)}
                color="primary"
              />
            }
            label="PrecipitaionProbabilityMax"
          />


          <FormControlLabel
            control={
              <Checkbox
                checked={isWindSpeed10mMaxChecked}
                onChange={(e) => setIsWindSpeed10mMaxChecked(e.target.checked)}
                color="primary"
              />
            }
            label="WindSpeed10mMax"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isWindGusts10mMaxChecked}
                onChange={(e) => setIsWindGusts10mMaxChecked(e.target.checked)}
                color="primary"
              />
            }
            label="WindGusts10mMax"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isWindDirection10mDominantChecked}
                onChange={(e) => setIsWindDirection10mDominantChecked(e.target.checked)}
                color="primary"
              />
            }
            label="WindDirection10mDominant"
          />


          <FormControlLabel
            control={
              <Checkbox
                checked={isShortwaveRadiationSumChecked}
                onChange={(e) => setIsShortwaveRadiationSumChecked(e.target.checked)}
                color="primary"
              />
            }
            label="ShortwaveRaditation"
          />

          <FormControlLabel
            control={
              <Checkbox
                checked={isEt0FaoEvapotranspirationChecked}
                onChange={(e) => setIsEt0FaoEvapotranspirationChecked(e.target.checked)}
                color="primary"
              />
            }
            label="Et0FaoEvapotranspiration"
          />

        </Grid>


        {/* Information Box */}
        <Grid item xs={12}>
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
        </Grid>
      </Grid>

      <Grid2>
        <DailyWeatherAppContext.Provider value={weatherDailyContextValue}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
            <AsyncFetchingComponent />
          </Box>
        </DailyWeatherAppContext.Provider>
      </Grid2>
    </Box>



  )
};

export default DailyWeather;
