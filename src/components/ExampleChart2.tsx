// src/WeatherVariablesBarChart.tsx

import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { weatherData } from '../data/helper';
import { VariableData, WeatherDataPoint } from '../data/types';

const WeatherVariablesBarChart: React.FC = () => {
  const dataPoint: WeatherDataPoint = weatherData[0]; // Use the first data point

  const variables: VariableData[] = [
    { variable: 'Temperature (°C)', value: dataPoint.temperature2m },
    { variable: 'Humidity (%)', value: dataPoint.relativeHumidity2m },
    { variable: 'Apparent Temp (°C)', value: dataPoint.apparentTemperature },
    { variable: 'Precipitation (mm)', value: dataPoint.precipitation },
    { variable: 'Cloud Cover (%)', value: dataPoint.cloudCover },
    { variable: 'Pressure (hPa)', value: dataPoint.pressureMsl },
    { variable: 'Wind Speed (m/s)', value: dataPoint.windSpeed10m },
    // Add more variables as needed
  ];

  return (
    <BarChart
      xAxis={[
        {
          dataKey: 'variable',
          label: 'Weather Variables',
        },
      ]}
      series={[
        {
          dataKey: 'value',
          label: 'Value',
          color: '#3f51b5',
        },
      ]}
      data={variables}
      width={800}
      height={500}
      tooltip
    />
  );
};

export default WeatherVariablesBarChart;
