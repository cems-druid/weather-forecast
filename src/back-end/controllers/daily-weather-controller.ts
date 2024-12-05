import { DailyWeatherService } from "../service/daily-weather-service";
import { returnRequestDailyWeather } from "../weatherRequests/template-requests";

export class DailyWeatherController {
    private dailyWeatherService = new DailyWeatherService();

    async insertDailyWeather(cityName: string): Promise<void> {
        try {
            //Temporarily calling this, perhaps this function will be called from frontend.
            const insertData = await returnRequestDailyWeather(cityName);
            //const fineData = this.dailyWeatherService.makeItCurrentWeather(insertData);
            const insertResult = await this.dailyWeatherService.insertDailyWeather(insertData);
            console.log("insert result: ", insertResult);

        } catch (error) {
            console.error("Error in controller, ", error);
        }
    }

    async getAllDailyWeather(): Promise<void> {
        try {
            const getAllResult = await this.dailyWeatherService.getAllDailyWeather();
            console.log("get result, ", getAllResult);
        } catch (error) {
            console.error("Error in controller, ", error);
        }
    }

    async getDailyWeatherByDate(cityName: string, date: string): Promise<void> {

        try {
            const getResult = await this.dailyWeatherService.getADailyWeather(cityName, date);
            console.log("Get a result: ", getResult);

        } catch (error) {
            console.log("Error in controller: ", error)
        }
    }
    
}