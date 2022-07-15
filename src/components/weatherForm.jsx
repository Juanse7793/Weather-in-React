import { useState } from 'react';

import styles from './weatherForm.module.css';

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState('');

  const onChange = (e) => {
    const value = e.target.value;
    if (value !== '') {
      setCity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input type="text" onChange={onChange} className={styles.input} placeholder='Enter a city'/>
    </form>
  );
};

export default WeatherForm;
