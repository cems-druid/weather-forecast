import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartDataset,
} from 'chart.js';

import { dailyWeather } from '../data/daily_weather';

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const WeatherBarChart: React.FC = () => {
  const [showTemperature, setShowTemperature] = useState(true);
  const [showPrecipitation, setShowPrecipitation] = useState(true);

  const prepareChartData = (dailyWeather: any) => {
    const labels = dailyWeather.dailyTime.map((date: any) => date.split('T')[0]);

    const datasets: ChartDataset<'bar'>[] = [];

    if (showTemperature) {
      datasets.push({
        label: 'Max Temp (°C)',
        data: Object.values(dailyWeather.temperature2mMax),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        yAxisID: 'y1',
      });
    }

    if (showPrecipitation) {
      datasets.push({
        label: 'Precipitation (mm)',
        data: Object.values(dailyWeather.precipitationSum),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        yAxisID: 'y2',
      });
    }

    return {
      labels,
      datasets,
    };
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y1: showTemperature
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'Temperature (°C)',
            },
          }
        : undefined,
      y2: showPrecipitation
        ? {
            type: 'linear' as const,
            display: true,
            position: 'right' as const,
            grid: {
              drawOnChartArea: showTemperature ? false : true,
            },
            title: {
              display: true,
              text: 'Precipitation (mm)',
            },
          }
        : undefined,
    },
  };

  return (
    <div>
      <h2>Daily Weather Bar Chart</h2>

      {/* Controls */}
      <div>
        <label>
          <input
            type="checkbox"
            checked={showTemperature}
            onChange={() => setShowTemperature((prev) => !prev)}
          />
          Show Temperature
        </label>
        <label style={{ marginLeft: '1em' }}>
          <input
            type="checkbox"
            checked={showPrecipitation}
            onChange={() => setShowPrecipitation((prev) => !prev)}
          />
          Show Precipitation
        </label>
      </div>

      {/* Chart */}
      <Bar data={prepareChartData(dailyWeather)} options={options} />
    </div>
  );
};

export default WeatherBarChart;