import { returnRequestCurrentWeather } from "../weatherRequests/template-requests";

export interface ICurrentWeatherEntity {
    name: string,
    latitude: number,
    longitude: number,
    time: Date,
    temperature2m: number,
    relativeHumidity2m: number,
    apparentTemperature: number,
    isDay: number,
    precipitation: number,
    rain: number,
    showers: number,
    snowfall: number,
    weatherCode: number,
    cloudCover: number,
    pressureMsl: number,
    surfacePressure: number,
    windSpeed10m: number,
    windDirection10m: number,
    windGusts10m: number
}
