import '../style/HomeStyle'
import { BackGround } from '../style/HomeStyle'
import { useState } from 'react'
import FindCity from '../components/FindCity/FindCity'
import Graphic from '../components/Graphic/Graphic'
import Weather from '../components/Weather/Weather'
import { Data } from '../assets/types'

export default function Home() {
    const [currentWeather, setCurrentWeather] = useState<any>({name: 'London', max: "20.4", min: "15.9", temp:"18.2", weather:"Nublado"})
    const [background, setBackground] = useState<string>("");
    const [data, setData] = useState<Data[]>([
        {day: 'Page A', temp: 16},
        {day: 'Page A', temp: 16},
        {day: 'Page A', temp: 16},
        {day: 'Page A', temp: 16},
        {day: 'Page A', temp: 16},
        {day: 'Page A', temp: 16},
        {day: 'Page A', temp: 16}
    ])

    return (
        <BackGround>
            <FindCity setData={setData} setBackground={setBackground} setCurrentWeather={setCurrentWeather}/>
            <Weather background={background} currentWeather={currentWeather}/>
            <Graphic background={background} data={data}/>
        </BackGround>

    )
}

