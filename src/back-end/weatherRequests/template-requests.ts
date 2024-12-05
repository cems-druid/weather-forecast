/*
TODO: Prepare some template api requests from citities of 
    -Berlin
    -Hamburg
    -Munich
    -Cologne
    -Frankfurt am Main
    -Stuttgart
    -Düsseldorf
    -Leipzig
    -Dortmund
    -Essen
    -Bremen
    -Dresden
    -Hanover
    -Nurember
    This is not urgent however.
    https://open-meteo.com/en/docs/dwd-api#latitude=48.1374,53.5507&longitude=11.5755,9.993&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=&daily=&timezone=Europe%2FBerlin&models=
*/

import { fetchWeatherApi } from "openmeteo";
import { ICurrentWeatherEntity } from "../entity/current-weather";

//Can be added later.
var cityToCoordinates = {
    Munich: {
        latitude: 48.1374, 
        longitude: 11.5755
    },

    Berlin: {
        latitude: 52.5244, 
        longitute : 13.4105
    },

    Hamburg:  {
        latitude: 53.5507, 
        longitude: 9.993
    }
};

//These requests are copied from open.meteo.com's auto generated usage.
export async function returnRequestCurrentWeather(cityName: string): Promise<any>{
    //TODO: Horrible way to do it, needs to be fixed later. I need to rush now!
    var params = {
        "latitude": cityToCoordinates[cityName].latitude,
        "longitude": cityToCoordinates[cityName].longitude,
        "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "apparent_temperature_max", "apparent_temperature_min", "daylight_duration", "sunshine_duration", "precipitation_sum", "rain_sum", "showers_sum", "snowfall_sum", "precipitation_hours", "precipitation_probability_max", "wind_speed_10m_max", "wind_gusts_10m_max", "wind_direction_10m_dominant", "shortwave_radiation_sum", "et0_fao_evapotranspiration"],
        "timezone": "Europe/Berlin",
        "models": "icon_seamless"
    }


    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);

    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();

    const current = response.current()!;
    const hourly = response.hourly()!;

    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
        current: {
            time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
            temperature2m: current.variables(0)!.value(),
            relativeHumidity2m: current.variables(1)!.value(),
            apparentTemperature: current.variables(2)!.value(),
            isDay: current.variables(3)!.value(),
            precipitation: current.variables(4)!.value(),
            rain: current.variables(5)!.value(),
            showers: current.variables(6)!.value(),
            snowfall: current.variables(7)!.value(),
            weatherCode: current.variables(8)!.value(),
            cloudCover: current.variables(9)!.value(),
            pressureMsl: current.variables(10)!.value(),
            surfacePressure: current.variables(11)!.value(),
            windSpeed10m: current.variables(12)!.value(),
            windDirection10m: current.variables(13)!.value(),
            windGusts10m: current.variables(14)!.value(),
        },
        cityname: cityName,
        longitude: longitude,
        latitude: latitude
    };
    console.log("TEMPLATE-REQUESTS", weatherData);
    return weatherData;
}


export async function returnRequestDailyWeather(cityName:string): Promise<any> {
    
    var params = {
        "latitude": cityToCoordinates[cityName].latitude,
        "longitude": cityToCoordinates[cityName].longitude,
        "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "apparent_temperature_max", "apparent_temperature_min", "daylight_duration", "sunshine_duration", "precipitation_sum", "rain_sum", "showers_sum", "snowfall_sum", "precipitation_hours", "precipitation_probability_max", "wind_speed_10m_max", "wind_gusts_10m_max", "wind_direction_10m_dominant", "shortwave_radiation_sum", "et0_fao_evapotranspiration"],
        "timezone": "Europe/Berlin",
        "models": "icon_seamless"
    }
    
    const url = "https://api.open-meteo.com/v1/forecast";
    const responses = await fetchWeatherApi(url, params);
    
    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
        Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
    
    // Process first location. Add a for-loop for multiple locations or weather models
    const response = responses[0];
    
    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();
    const timezone = response.timezone();
    const timezoneAbbreviation = response.timezoneAbbreviation();
    const latitude = response.latitude();
    const longitude = response.longitude();
    
    const daily = response.daily()!;
    
    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
    
        daily: {
            dailyTime: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map( 
                (t) => new Date((t + utcOffsetSeconds) * 1000)
            ),
            weatherCode: daily.variables(0)!.valuesArray()!,
            temperature2mMax: daily.variables(1)!.valuesArray()!,
            temperature2mMin: daily.variables(2)!.valuesArray()!,
            apparentTemperatureMax: daily.variables(3)!.valuesArray()!,
            apparentTemperatureMin: daily.variables(4)!.valuesArray()!,
            daylightDuration: daily.variables(5)!.valuesArray()!,
            sunshineDuration: daily.variables(6)!.valuesArray()!,
            precipitationSum: daily.variables(7)!.valuesArray()!,
            rainSum: daily.variables(8)!.valuesArray()!,
            showersSum: daily.variables(9)!.valuesArray()!,
            snowfallSum: daily.variables(10)!.valuesArray()!,
            precipitationHours: daily.variables(11)!.valuesArray()!,
            precipitationProbabilityMax: daily.variables(12)!.valuesArray()!,
            windSpeed10mMax: daily.variables(13)!.valuesArray()!,
            windGusts10mMax: daily.variables(14)!.valuesArray()!,
            windDirection10mDominant: daily.variables(15)!.valuesArray()!,
            shortwaveRadiationSum: daily.variables(16)!.valuesArray()!,
            et0FaoEvapotranspiration: daily.variables(17)!.valuesArray()!,
        },
    
    };

    const returnData = {
        name: cityName,
        latitude: latitude,
        longitude: longitude,
        selectDate: weatherData.daily.dailyTime[0],
        dailyTime: weatherData.daily.dailyTime,
        weatherCode: weatherData.daily.weatherCode,
        temperature2mMax: weatherData.daily.temperature2mMax,
        temperature2mMin: weatherData.daily.temperature2mMin,
        daylightDuration: weatherData.daily.daylightDuration,
        sunshineDuration: weatherData.daily.sunshineDuration,
        precipitationSum: weatherData.daily.precipitationSum,
        rainSum: weatherData.daily.rainSum,
        showersSum: weatherData.daily.showersSum,
        snowfallSum: weatherData.daily.snowfallSum,
        precipitationHours: weatherData.daily.precipitationHours,
        precipitationProbabilityMax: weatherData.daily.precipitationProbabilityMax,
        windSpeed10mMax: weatherData.daily.windSpeed10mMax,
        windGusts10mMax: weatherData.daily.windGusts10mMax,
        windDirection10mDominant: weatherData.daily.windDirection10mDominant,
        shortwaveRadiationSum: weatherData.daily.shortwaveRadiationSum,
        et0FaoEvapotranspiration: weatherData.daily.et0FaoEvapotranspiration
    };

    return returnData;
    
}

 
// (async () => {

//     try {
//      console.log("Inside the try");
//      const a = await returnRequestDailyWeather("Hamburg");
//      console.log(a);
//     }
//     catch (error) {
//      console.log("Error occured: ", error);
//     }
 
//     finally {
     
//     }
//  })();

