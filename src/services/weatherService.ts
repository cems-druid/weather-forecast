type WeatherData = {
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    weather: { description: string }[];
  };
  
  export const fetchWeatherByCity = async (city: string): Promise<WeatherData> => {
    const dummyData: Record<string, WeatherData> = {
      "New York": {
        name: "New York",
        main: { temp: 25, humidity: 50 },
        weather: [{ description: "clear sky" }],
      },
      "London": {
        name: "London",
        main: { temp: 18, humidity: 70 },
        weather: [{ description: "cloudy" }],
      },
      "Tokyo": {
        name: "Tokyo",
        main: { temp: 30, humidity: 60 },
        weather: [{ description: "sunny" }],
      },
    };
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (dummyData[city]) {
          resolve(dummyData[city]);
        } else {
          reject("City not found");
        }
      }, 500);
    });
  };
  