import { useEffect, useState } from 'react';
import WeatherForm from './weatherForm';

const WeatherApp = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        loadInfo();
    }, []);

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name}`;
    }
    , [weather]);
    

    const loadInfo = async (city = 'london') => {
        try {
            const request = await fetch(`${process.env.REACT_APP_URL}key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`);
            const response = await request.json();
            console.log(response);
            setWeather(response);
        } catch (error) {
            
        }
    }



    const handleChangeCity = (city) => {
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div>
            <WeatherForm onChangeCity={handleChangeCity} />
            <div>{weather?.current.temp_c}</div>
        </div>
    );
    }
export default WeatherApp;