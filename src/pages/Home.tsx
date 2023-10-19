import '../style/HomeStyle'
import { BackGround } from '../style/HomeStyle'
import FindCity from '../components/FindCity/FindCity'
import Weather from '../components/Weather/Weather'

export default function Home() {

    return (
        <BackGround>
            <FindCity/>
            <Weather/>
        </BackGround>

    )
}

