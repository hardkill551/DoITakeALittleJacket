import { useState } from "react";
import "../../style/ErrorPageStyle";
import { FindCityStyle } from "./FindCityStyle";
import axios from "axios";
import { FindCityProps, ForecastItem } from "../../common/types";
import { FormatStringDate, translateWeather } from "../../utils/findCityUtils";

export default function FindCity({
  setData,
  setCurrentWeather,
  setBackground,
}: FindCityProps) {
  const [city, setCity] = useState<string>("");

  return (
    <FindCityStyle>
      <h1>Levo um casaquinho?</h1>
      <div>
        <input
          placeholder="Cidade"
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <button onClick={() => findWeather(city)}>Buscar</button>
      </div>
    </FindCityStyle>
  );

  async function findWeather(city: string | null): Promise<void> {
    if (!city) return;

    const coordinatesRes = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${
        import.meta.env.VITE_APP_API_KEY
      }&lang=pt_br`
    );

    if (!coordinatesRes.data.length) return;
    const lon = coordinatesRes.data[0].lon;
    const lat = coordinatesRes.data[0].lat;

    const currentWeather = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    );

    const weather = translateWeather(
      currentWeather.data.weather[0].main,
      setBackground
    );

    findForecast(lat, lon);

    setCurrentWeather({
      weather: weather,
      name: coordinatesRes.data[0].name,
      max: currentWeather.data.main.temp_max,
      min: currentWeather.data.main.temp_min,
      temp: currentWeather.data.main.temp,
    });
  }
  async function findForecast(lat: string, lon: string) {
    const forecast = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&units=metric&lon=${lon}&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    );

    const weekday = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];

    const data = forecast.data.list.map((o: ForecastItem) => {
      const day = new Date(o.dt_txt);
      const date = FormatStringDate(o.dt_txt.slice(5, 10));
      return { temp: o.main.temp, day: date + ` (${weekday[day.getDay()]})` };
    });

    setData(data);
  }
}
