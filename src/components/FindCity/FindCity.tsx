import { useState } from "react";
import "../../style/ErrorPageStyle";
import { FindCityStyle } from "./FindCityStyle";
import axios from "axios";

export default function FindCity({
  setData,
  setCurrentWeather,
  setBackground,
}: any) {
  const [city, setCity] = useState<string>("");

  return (
    <FindCityStyle>
      <h1>Levo um casaquinho?</h1>
      <div>
        <input
          placeholder="Cidade"
          onChange={(e: any) => setCity(e.target.value)}
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

    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    );

    const weather = translateCities(res.data.weather[0].main);

    findForecast(lat, lon);

    setCurrentWeather({
      weather: weather,
      name: coordinatesRes.data[0].name,
      max: res.data.main.temp_max,
      min: res.data.main.temp_min,
      temp: res.data.main.temp,
    });
  }
  async function findForecast(lat: string, lon: string) {
    const res = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&units=metric&lon=${lon}&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    );
    const weekday = ["dom", "seg", "ter", "qua", "qui", "sex", "sab"];
    const array = res.data.list.map((o: any) => {
      const day = new Date(o.dt_txt);
      const date = FormataStringData(o.dt_txt.substr(5, 5));
      return { temp: o.main.temp, day: date + ` (${weekday[day.getDay()]})` };
    });

    setData(array);
  }

  function FormataStringData(date: string) {
    var dia = date.split("-")[0];
    var mes = date.split("-")[1];

    return ("0" + mes).slice(-2) + "/" + ("0" + dia).slice(-2);
  }

  function translateCities(res: string) {
    if (res === "Rain") {
      setBackground("#013a85");
      return "Chovendo";
    }
    if (res === "Clear") {
      setBackground("#ffae00");
      return "Céu aberto";
    }
    if (res === "Snow") {
      setBackground("#919191");
      return "Nevando";
    }
    if (res === "Thunderstorm") {
      setBackground("#7700ff");
      return "Tempestade";
    }
    if (res === "Drizzle") {
      setBackground("#006eff");
      return "Chuviscando";
    }
    if (res === "Mist") {
      setBackground("#919191");
      return "Neblina";
    }
    if (res === "Clouds") {
      setBackground("#3f3f3f");
      return "Nublado";
    }
    return "error";
  }
}
