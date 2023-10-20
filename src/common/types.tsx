export type Data = {
  day: string;
  temp: number;
};

export type WeatherType = {
  name: string;
  max: string;
  min: string;
  temp: string;
  weather: string;
};

export type FindCityProps = {
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  setCurrentWeather: React.Dispatch<React.SetStateAction<WeatherType>>;
  setBackground: React.Dispatch<React.SetStateAction<string>>;
};

export type WeatherProps = {
  currentWeather: WeatherType;
  background: string;
};

export type GraphicProps = {
  data: Data[];
  background: string;
};

export type ForecastItem = {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  rain?: {
    "3h": number;
  };
  sys: {
    pod: string;
  };
  dt_txt: string;
};
