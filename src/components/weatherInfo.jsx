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
      </div>
    </div>
  );
};
export default WeatherInfo;
