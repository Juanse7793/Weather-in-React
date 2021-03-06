import { useEffect, useState } from 'react';
import WeatherForm from './weatherForm';
import WeatherInfo from './weatherInfo';

import styles from './weatherApp.module.css';
import Loading from './loading';

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
      setTimeout(() => {
        setWeather(response);
      }, 1000);
    } catch (error) {}
  };

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };

  return (
    <div className={styles.weatherContainer}>
      <h2 className={styles.title}>Weather App</h2>
      <WeatherForm onChangeCity={handleChangeCity} />
      {weather ? <WeatherInfo weather={weather} /> : <Loading /> }
    </div>
  );
};
export default WeatherApp;
