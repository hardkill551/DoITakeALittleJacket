import "../../style/ErrorPageStyle";
import { WeatherStyle } from "./WeatherStyle";

export default function Weather() {
  return (
    <WeatherStyle>
      <div>
        <h3>Agora: London</h3>
        <div>
          <p>Mínima: 15.9°C</p>
          <p>Máxima: 20.4°C</p>
        </div>
      </div>
      <div>
        <p>Nublado</p>
        <h2>18.2°C</h2>
      </div>
    </WeatherStyle>
  );
}
