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
        {name: 'Page A', Celsius: 16},
        {name: 'Page B', Celsius: 18},
        {name: 'Page C', Celsius: 20},
        {name: 'Page D', Celsius: 15},
        {name: 'Page E', Celsius: 13},
        {name: 'Page F', Celsius: 30},
        {name: 'Page G', Celsius: 15}
    ])

    return (
        <BackGround>
            <FindCity setData={setData} setBackground={setBackground} setCurrentWeather={setCurrentWeather}/>
            <Weather background={background} currentWeather={currentWeather}/>
            <Graphic background={background} data={data}/>
        </BackGround>

    )
}

