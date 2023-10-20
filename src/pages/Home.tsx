import { BackGround } from "../style/HomeStyle";
import { useState } from "react";
import FindCity from "../components/FindCity/FindCity";
import Graphic from "../components/Graphic/Graphic";
import Weather from "../components/Weather/Weather";
import { Data, WeatherType } from "../common/types";
import { dataConst, weatherConst } from "../common/constants";

export default function Home() {
  const [currentWeather, setCurrentWeather] =
    useState<WeatherType>(weatherConst);
  const [background, setBackground] = useState<string>("");
  const [data, setData] = useState<Data[]>(dataConst);

  return (
    <BackGround>
      <FindCity
        setData={setData}
        setBackground={setBackground}
        setCurrentWeather={setCurrentWeather}
      />
      <Weather background={background} currentWeather={currentWeather} />
      <Graphic background={background} data={data} />
    </BackGround>
  );
}
