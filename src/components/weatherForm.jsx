import { useState } from 'react';

const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState('london');

    const handleSubmit = (e) => {
        e.preventDefault();
        onChangeCity(city);
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={e => setCity(e.target.value)} />
    </form>
}

export default WeatherForm;