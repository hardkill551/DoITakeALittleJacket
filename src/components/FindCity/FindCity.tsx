import { useState } from "react";
import "../../style/ErrorPageStyle";
import { FindCityStyle } from "./FindCityStyle";
import axios from "axios";

export default function FindCity({setData}:any) {
    const [city, setCity] = useState<string>('');
  return (
    <FindCityStyle>
      <h1>Levo um casaquinho?</h1>
      <div>
        <input placeholder="Cidade" onChange={(e:any) => setCity(e.target.value)}></input>
        <button onClick={()=>findWeather(city)}>Buscar</button>
      </div>
    </FindCityStyle>
  );

  function findWeather(city:string | null):void{
    if(!city) return;
    axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.APP_ID}`).then(res => {
        console.log(res)
    }).catch(err => console.log(err))
  }
}
