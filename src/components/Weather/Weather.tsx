import { WeatherProps } from "../../common/types";
import "../../style/ErrorPageStyle";
import { WeatherStyle } from "./WeatherStyle";

export default function Weather({ currentWeather, background }: WeatherProps) {
  return (
    <WeatherStyle background={background}>
      <div>
        <h3>Agora: {currentWeather.name}</h3>
        <div>
          <p>Mínima: {currentWeather.min}°C</p>
          <p>Máxima: {currentWeather.max}°C</p>
        </div>
      </div>
      <div>
        <p>{currentWeather.weather}</p>
        <h2>{currentWeather.temp}°C</h2>
      </div>
    </WeatherStyle>
  );
}
