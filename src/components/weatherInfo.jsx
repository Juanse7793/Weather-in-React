const WeatherInfo = ({ weather }) => {
  return (
    <div>
      <div>{weather?.location.name}</div>
      <div>{weather?.location.country}</div>
      <div>
        <div>
          <img
            src={`http:${weather?.current.condition.icon}`}
            width="128"
            alt="weather icon"
          />
        </div>
        <div>
          <div>
            {weather?.current.condition.text}
            {weather?.current.temp_c}°C
          </div>
        </div>
      </div>
      <iframe
        title="weather map"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d107360.21319287329!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1657914260248!5m2!1ses-419!2sec`}
        width="600"
        height="450"
        style={{ border:0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
export default WeatherInfo;
