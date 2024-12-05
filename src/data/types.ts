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

  type indexKeys = '0' | '1' | '2' | '3' | '4' | '5' | '6';
  type IDailyWeatherDataFields  = {
    [keys in indexKeys]: number
  }
  

  export interface IDailyWeatherEntity {
    name: string,
    latitude: number,
    longitude: number,
    selectDate: string,
    dailyTime: string[],
    weatherCode: IDailyWeatherDataFields,
    temperature2mMax: IDailyWeatherDataFields,
    temperature2mMin: IDailyWeatherDataFields,
    daylightDuration: IDailyWeatherDataFields,
    sunshineDuration: IDailyWeatherDataFields,
    precipitationSum: IDailyWeatherDataFields,
    rainSum: IDailyWeatherDataFields,
    showersSum: IDailyWeatherDataFields,
    snowfallSum: IDailyWeatherDataFields,
    precipitationHours: IDailyWeatherDataFields,
    precipitationProbabilityMax: IDailyWeatherDataFields,
    windSpeed10mMax: IDailyWeatherDataFields,
    windGusts10mMax: IDailyWeatherDataFields,
    windDirection10mDominant: IDailyWeatherDataFields,
    shortwaveRadiationSum: IDailyWeatherDataFields,
    et0FaoEvapotranspiration: IDailyWeatherDataFields
}
