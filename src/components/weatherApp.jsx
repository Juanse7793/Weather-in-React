import { useEffect, useState } from 'react';
import WeatherForm from './weatherForm';
import WeatherInfo from './weatherInfo';

import styles from './weatherApp.module.css';

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo();
  }, []);

  useEffect(() => {
    document.title = `Weather | ${weather?.location.name}`;
  }, [weather]);

  const loadInfo = async (city = 'london') => {
    try {
      const request = await fetch(
        `${process.env.REACT_APP_URL}key=${process.env.REACT_APP_KEY}&q=${city}&aqi=no`
      );
      const response = await request.json();
      console.log(response);
      setWeather(response);
    } catch (error) {}
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity} />
      <WeatherInfo weather={weather} />
    </div>
  );
};
export default WeatherApp;
