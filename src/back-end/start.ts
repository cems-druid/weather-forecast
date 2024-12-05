import { CurrentWeatherController } from "./controllers/current-weather-controller";
import { DailyWeatherController } from "./controllers/daily-weather-controller";
import { connectToMongoDb, closeMongoDbConnection } from "./database/init-mongodb";

//TODO: Main loop is here, change it.
(async () => {

    try {
     
     await connectToMongoDb();
    //  let cwController = new CurrentWeatherController();
    //  await cwController.insertCurrentWeather();
    //  await cwController.getAllCurrentWeather();
     
     let dwController = new DailyWeatherController();
     //await dwController.insertDailyWeather("Hamburg");
     await dwController.getDailyWeatherByDate("Munich", "2024-12-04");
     

    }
    catch (error) {
     console.log("Error occured: ", error);
    }
 
    finally {
     await closeMongoDbConnection();
    }
 })();