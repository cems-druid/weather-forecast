import React, { useContext, useState } from 'react';
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


import { DailyWeatherAppContext } from '../pages/DailyWeather';
import { IDailyWeatherEntity } from '../data/types';

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const WeatherBarChart: React.FC<any> = ({ data }) => {

  const dailyWeather = data;

  const dailyWeatherContextForChart = useContext(DailyWeatherAppContext);

  if (dailyWeatherContextForChart === undefined) {
    console.error("Context from DailyWeatherPage has not succesfully loaded.")
  }

  const {
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
  } = dailyWeatherContextForChart ?? {};


  const prepareChartData = (dailyWeather: IDailyWeatherEntity) => {

    const labels = dailyWeather.dailyTime.map((date: any) => date.split('T')[0]);

    const datasets: ChartDataset<'bar'>[] = [];


    if (isWeatherCodeChecked) {
      datasets.push({
        label: 'Weather Code',
        data: Object.values(dailyWeather.weatherCode),
        backgroundColor: 'rgba(255, 99, 132, 1)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        yAxisID: 'y1',
      });
    }


    if (isTemperature2mMaxChecked) {
      datasets.push({
        label: 'Temperature 2m Max',
        data: Object.values(dailyWeather.temperature2mMax),
        backgroundColor: 'rgba(54, 162, 235, 1)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        yAxisID: 'y2',
      });
    }

    if (isTemperature2mMinChecked) {
      datasets.push({
        label: 'Temperature 2m Min',
        data: Object.values(dailyWeather.temperature2mMin),
        backgroundColor: 'rgba(255, 206, 86, 1)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
        yAxisID: 'y3',
      });
    }

    if (isDaylightDurationChecked) {
      datasets.push({
        label: 'Daylight duration',
        data: Object.values(dailyWeather.daylightDuration),
        backgroundColor: 'rgba(75, 192, 192, 1) ',
        borderColor: 'rgba(75, 192, 192, 1) ',
        borderWidth: 1,
        yAxisID: 'y4',
      });
    }

    if (isSunshineDurationChecked) {
      datasets.push({
        label: 'Sunshine duration',
        data: Object.values(dailyWeather.sunshineDuration),
        backgroundColor: 'rgba(153, 102, 255, 1)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
        yAxisID: 'y5',
      });
    }

    if (isPrecipitationSumChecked) {
      datasets.push({
        label: 'Precipitation Sum',
        data: Object.values(dailyWeather.precipitationSum),
        backgroundColor: 'rgba(255, 159, 64, 1)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
        yAxisID: 'y6',
      });
    }

    if (isRainSumChecked) {
      datasets.push({
        label: 'Rain sum',
        data: Object.values(dailyWeather.rainSum),
        backgroundColor: 'rgba(199, 199, 199, 1)',
        borderColor: 'rgba(199, 199, 199, 1)',
        borderWidth: 1,
        yAxisID: 'y7',
      });
    }

    if (isShowersSumChecked) {
      datasets.push({
        label: 'Showers sum',
        data: Object.values(dailyWeather.showersSum),
        backgroundColor: 'rgba(83, 102, 132, 1)',
        borderColor: 'rgba(83, 102, 132, 1)',
        borderWidth: 1,
        yAxisID: 'y8',
      });
    }

    if (isSnowfallSumChecked) {
      datasets.push({
        label: 'Snowfall Sum',
        data: Object.values(dailyWeather.snowfallSum),
        backgroundColor: 'rgba(235, 64, 52, 1) ',
        borderColor: 'rgba(235, 64, 52, 1) ',
        borderWidth: 1,
        yAxisID: 'y9',
      });
    }

    if (isPrecipitationHoursChecked) {
      datasets.push({
        label: 'Precipitation Hours',
        data: Object.values(dailyWeather.precipitationHours),
        backgroundColor: 'rgba(72, 239, 128, 1)',
        borderColor: 'rgba(72, 239, 128, 1)',
        borderWidth: 1,
        yAxisID: 'y10',
      });
    }

    if (isPrecipitationProbabilityMaxChecked) {
      datasets.push({
        label: 'Precipitation Probability',
        data: Object.values(dailyWeather.precipitationProbabilityMax),
        backgroundColor: 'rgba(240, 128, 128, 1)',
        borderColor: 'rgba(240, 128, 128, 1)',
        borderWidth: 1,
        yAxisID: 'y11',
      });
    }


    if (isPrecipitationHoursChecked) {
      datasets.push({
        label: 'Precipitation Hours',
        data: Object.values(dailyWeather.precipitationHours),
        backgroundColor: 'rgba(64, 224, 208, 1)',
        borderColor: 'rgba(64, 224, 208, 1)',
        borderWidth: 1,
        yAxisID: 'y12',
      });
    }

    if (isWindSpeed10mMaxChecked) {
      datasets.push({
        label: 'Wind Speed 10m Max',
        data: Object.values(dailyWeather.windSpeed10mMax),
        backgroundColor: 'rgba(218, 112, 214, 1)',
        borderColor: 'rgba(218, 112, 214, 1)',
        borderWidth: 1,
        yAxisID: 'y13',
      });
    }

    if (isWindGusts10mMaxChecked) {
      datasets.push({
        label: 'Wind Gusts 10m Max',
        data: Object.values(dailyWeather.windGusts10mMax),
        backgroundColor: 'rgba(255, 127, 80, 1)',
        borderColor: 'rgba(255, 127, 80, 1)',
        borderWidth: 1,
        yAxisID: 'y14',
      });
    }

    if (isWindDirection10mDominantChecked) {
      datasets.push({
        label: 'Wind Direction 10m Dominant',
        data: Object.values(dailyWeather.windDirection10mDominant),
        backgroundColor: 'rgba(70, 130, 180, 1)',
        borderColor: 'rgba(70, 130, 180, 1)',
        borderWidth: 1,
        yAxisID: 'y15',
      });
    }

    if (isShortwaveRadiationSumChecked) {
      datasets.push({
        label: 'Shortwave Radiation Sum',
        data: Object.values(dailyWeather.shortwaveRadiationSum),
        backgroundColor: 'rgba(127, 255, 0, 1)  ',
        borderColor: 'rgba(127, 255, 0, 1)  ',
        borderWidth: 1,
        yAxisID: 'y16',
      });
    }

    if (isEt0FaoEvapotranspirationChecked) {
      datasets.push({
        label: 'Et0 Fao Evapotranspiration',
        data: Object.values(dailyWeather.et0FaoEvapotranspiration),
        backgroundColor: 'rgba(255, 69, 0, 1)',
        borderColor: 'rgba(255, 69, 0, 1)',
        borderWidth: 1,
        yAxisID: 'y17',
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
      y1: isWeatherCodeChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'Weather Code',
            },
          }
        : undefined,

        y2: isTemperature2mMaxChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'Temperature2mMax',
            },
          }
        : undefined,

        y3: isTemperature2mMinChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'Temperature2mMin',
            },
          }
        : undefined,

        y4: isDaylightDurationChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'DaylightDuration',
            },
          }
        : undefined,

        y5: isSunshineDurationChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'SunshineDuration',
            },
          }
        : undefined,

        y6: isPrecipitationSumChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'PrecipitaionSum',
            },
          }
        : undefined,

        y7: isRainSumChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'RainSum',
            },
          }
        : undefined,

        y8: isShowersSumChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'ShowersSum',
            },
          }
        : undefined,

        y9: isSnowfallSumChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'SnowfallSum',
            },
          }
        : undefined,

        y10: isPrecipitationHoursChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'PrecipitationHours',
            },
          }
        : undefined,

        y11: isPrecipitationProbabilityMaxChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'PrecipitationProbabilityMax',
            },
          }
        : undefined,

        y12: isPrecipitationHoursChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'PrecipitationHours',
            },
          }
        : undefined,

        y13: isWindSpeed10mMaxChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'WindSpeed10mMax',
            },
          }
        : undefined,


        y14: isWindGusts10mMaxChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'WindGust10mMax',
            },
          }
        : undefined,

        y15: isWindDirection10mDominantChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'WindDirection10mDominant',
            },
          }
        : undefined,

        y16: isShortwaveRadiationSumChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'ShowrtwaveRadiationSum',
            },
          }
        : undefined,

        y17: isEt0FaoEvapotranspirationChecked
        ? {
            type: 'linear' as const,
            display: true,
            position: 'left' as const,
            title: {
              display: true,
              text: 'Et0FaoEvapotranspiration',
            },
          }
        : undefined,

    },
  };

  return (
    <div>
      <h2>Daily Weather Bar Chart</h2>

      {/* Controls
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
      </div> */}

      {/* Chart */}
      <Bar data={prepareChartData(dailyWeather)} options={options} />
    </div>
  );
};

export default WeatherBarChart;