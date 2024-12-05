import React, { useEffect, useState } from "react";
import  DailyWeatherController from "../controllers/dailyWeatherController"; 

const AsyncFetchingComponent: React.FC = () => {
    //TODO: Change the type from any to IDailyWeatherEntity
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {

        const fetchData = async () => {

            try {
                //Call the controller here. Controller, should only get cityName and date.
                const dailyWeatherController = new DailyWeatherController();
                const result = await dailyWeatherController.getBackendControllerData();
                setData(result);
            } catch (error) {
                console.error("Fetching Components: ",error)
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>Weather Data</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}

export default AsyncFetchingComponent;