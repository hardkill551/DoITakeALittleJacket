export function formatStringDate(date: string) {
  const day = date.split("-")[0];
  const month = date.split("-")[1];

  return ("0" + month).slice(-2) + "/" + ("0" + day).slice(-2);
}

export function translateWeather(
  weather: string,
  setBackground: React.Dispatch<React.SetStateAction<string>>
) {
  if (weather === "Rain") {
    setBackground("#013a85");
    return "Chovendo";
  }
  if (weather === "Clear") {
    setBackground("#ffae00");
    return "Céu aberto";
  }
  if (weather === "Snow") {
    setBackground("#919191");
    return "Nevando";
  }
  if (weather === "Thunderstorm") {
    setBackground("#7700ff");
    return "Tempestade";
  }
  if (weather === "Drizzle") {
    setBackground("#006eff");
    return "Chuviscando";
  }
  if (weather === "Mist") {
    setBackground("#919191");
    return "Neblina";
  }
  if (weather === "Clouds") {
    setBackground("#3f3f3f");
    return "Nublado";
  }
  return "error";
}
