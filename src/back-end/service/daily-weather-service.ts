import { getMongoDb, } from "../database/init-mongodb";
import { IDailyWeatherEntity } from "../entity/daily-weather";

export class DailyWeatherService {
    private collectionName: string = "weather-daily";

    async insertDailyWeather(dailyWeather :IDailyWeatherEntity): Promise<IDailyWeatherEntity> {
        try {
            const db = await getMongoDb();
            const result = await db.collection<IDailyWeatherEntity>(this.collectionName).insertOne({
                ...dailyWeather
            });
    
            console.log("Daily-Service-Result: ", result);
            return {...dailyWeather};
            
        } catch (error) {
            console.log("Daily-Service-Error: ", error);
        }

        return {} as IDailyWeatherEntity
    }


     async getADailyWeather(cityName: string, date: string): Promise<IDailyWeatherEntity|null> {
        const modifiedDate = new Date(`${date}T00:00:00.000Z`);
        //const endOfDay = new Date(`${date}T23:59:59.999Z`);
        const query = {
            name: cityName,
            selectDate: modifiedDate,
        };

        const db = await getMongoDb();
        return await db.collection<IDailyWeatherEntity>(this.collectionName).findOne(query);
    }

    async getAllDailyWeather(): Promise<IDailyWeatherEntity[]> {
        const db = await getMongoDb();
        return await db.collection<IDailyWeatherEntity>(this.collectionName).find().toArray();
    }

}
