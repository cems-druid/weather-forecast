import { dailyWeather } from "../data/daily_weather";
import React from 'react';
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
} from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);


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
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      title: {
        display: true,
        text: 'Temperature (°C)',
      },
    },
    y2: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: 'Precipitation (mm)',
      },
    },
  },
};


const WeatherBarChart: React.FC = () => {
  const data = prepareChartData(dailyWeather);

  return (
    <div>
      <h2>Daily Weather Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default WeatherBarChart;


const prepareChartData = (dailyWeather: any) => {
  const labels = dailyWeather.dailyTime.map((date: any) =>
    date.split('T')[0]
  ); // Extract 'YYYY-MM-DD'

  const temperatureData = Object.values(dailyWeather.temperature2mMax);
  const precipitationData = Object.values(dailyWeather.precipitationSum);

  return {
    labels,
    datasets: [
      {
        label: 'Max Temp (°C)',
        data: temperatureData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red color
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        yAxisID: 'y1', // Left y-axis
      },
      {
        label: 'Precipitation (mm)',
        data: precipitationData,
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        yAxisID: 'y2', // Right y-axis
      },
    ],
  };
};
