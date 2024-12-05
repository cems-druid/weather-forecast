import { CurrentWeatherService } from "../service/current-weather-service";
import { returnRequestCurrentWeather } from "../weatherRequests/template-requests";

export class CurrentWeatherController {
    private currentWeatherService = new CurrentWeatherService();

    async insertCurrentWeather(): Promise<void> {
        try {
            //Temporarily calling this, perhaps this function will be called from frontend.
            const insertData = await returnRequestCurrentWeather("Munich");
            const fineData = this.currentWeatherService.makeItCurrentWeather(insertData);
            const insertResult = await this.currentWeatherService.insertCurrentWeather(fineData);
            console.log("insert result: ", insertResult);

        } catch (error) {
            console.error("Error in controller", error);
        }
    }

    async getAllCurrentWeather(): Promise<void> {
        try {
            const getAllResult = await this.currentWeatherService.getAllCurrentWeather();
            console.log("get result, ", getAllResult);
        } catch (error) {
            console.error("Error in controller", error);
        }
    }


    
}