import { useState } from "react";
import "../../style/ErrorPageStyle";
import { FindCityStyle } from "./FindCityStyle";
import axios from "axios";

export default function FindCity({ setData, setCurrentWeather, setBackground }: any) {
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

    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        coordinatesRes.data[0].lat
      }&lon=${coordinatesRes.data[0].lon}&units=metric&appid=${
        import.meta.env.VITE_APP_API_KEY
      }`
    );

    const weather = translateCities(res.data.weather[0].main);

    setCurrentWeather({
      weather: weather,
      name: coordinatesRes.data[0].name,
      max: res.data.main.temp_max,
      min: res.data.main.temp_min,
      temp: res.data.main.temp,
    });
  }

  function translateCities(res: string) {
    console.log(res);
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
