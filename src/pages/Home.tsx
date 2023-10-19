import '../style/HomeStyle'
import { BackGround } from '../style/HomeStyle'
import { useState } from 'react'
import FindCity from '../components/FindCity/FindCity'
import Graphic from '../components/Graphic/Graphic'
import Weather from '../components/Weather/Weather'
import { Data } from '../assets/types'

export default function Home() {
    const [data, setData] = useState<Data[]>([
        {name: 'Page A', Celsius: 100},
        {name: 'Page B', Celsius: 150},
        {name: 'Page C', Celsius: 130},
        {name: 'Page D', Celsius: 260},
        {name: 'Page E', Celsius: 30},
        {name: 'Page F', Celsius: 390},
        {name: 'Page G', Celsius: 200}
    ])

    return (
        <BackGround>
            <FindCity setData={setData}/>
            <Weather/>
            <Graphic data={data}/>
        </BackGround>

    )
}

