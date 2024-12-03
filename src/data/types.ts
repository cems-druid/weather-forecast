// src/types.ts

export interface WeatherDataPoint {
    time: string;
    temperature2m: number;
    relativeHumidity2m: number;
    apparentTemperature: number;
    isDay: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    weatherCode: number;
    cloudCover: number;
    pressureMsl: number;
    surfacePressure: number;
    windSpeed10m: number;
    windDirection10m: number;
    windGusts10m: number;
  }
  

  export interface VariableData {
    variable: string;
    value: number;
  }
  