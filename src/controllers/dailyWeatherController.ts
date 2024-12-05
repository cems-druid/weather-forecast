import { SelectionDTO } from "../services/selectionStorage";
import { dailyWeather } from "../data/daily_weather";
// weather-forecast/src/controllers/currentWeatherController.ts
class DailyWeatherController {
    constructor() {
    }

    async getBackendControllerData() {
        try {
            //Temporarily sending front-end data
            return dailyWeather;
        } catch (error) {
            console.log("Error", error)
        }
    }
}

export default DailyWeatherController;