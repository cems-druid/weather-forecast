import { getMongoDb, } from "../database/init-mongodb";
import { ICurrentWeatherEntity } from "../entity/current-weather";

export class CurrentWeatherService {
    private collectionName: string = "weather-current";

    async insertCurrentWeather(currentWeather:ICurrentWeatherEntity): Promise<ICurrentWeatherEntity> {
        const db = await getMongoDb();
        const result = await db?.collection<ICurrentWeatherEntity>(this.collectionName).insertOne({
            ...currentWeather
        });

        return {...currentWeather};
    }

    async getAllCurrentWeather(): Promise<ICurrentWeatherEntity[]> {
        const db = await getMongoDb();
        return await db.collection<ICurrentWeatherEntity>(this.collectionName).find().toArray();
    }

    makeItCurrentWeather(data: any): ICurrentWeatherEntity {
        console.log("TEST: ", data.current.time);
        
        let fineData = {
            name: data.cityname,
            latitude: data.latitude,
            longitude: data.longitude,
            time: data.current.time,
            temperature2m: data.current.temperature2m,
            relativeHumidity2m: data.current.relativeHumidity2m,
            apparentTemperature: data.current.apparentTemperature,
            isDay: data.current.isDay,
            precipitation: data.current.precipitation,
            rain: data.current.rain,
            showers: data.current.showers,
            snowfall: data.current.snowfall,
            weatherCode: data.current.weatherCode,
            cloudCover: data.current.cloudCover,
            pressureMsl: data.current.pressureMsl,
            surfacePressure: data.current.surfacePressure,
            windSpeed10m: data.current.windSpeed10m,
            windDirection10m: data.current.windDirection10m,
            windGusts10m: data.current.windGusts10m
        };
        return fineData;
    }
}
