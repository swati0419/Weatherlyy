import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";

function App() {
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);

    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      const weatherData = await weatherResponse.json();

      if (weatherData.cod !== 200) {
        setError("City not found");
        setWeather(null);
        setForecast([]);
        setLoading(false);
        return;
      }

      setWeather(weatherData);
      setError("");

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );

      const forecastData = await forecastResponse.json();

      const dailyForecast = forecastData.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecast(dailyForecast);
    } catch (err) {
      setError("Something went wrong");
    }

    setLoading(false);
  };

  useEffect(() => {
    getWeather();
  }, []);

  const getBackground = () => {
    if (!weather) return "from-[#0f172a] via-[#312e81] to-[#7c3aed]";;

    const main = weather.weather[0].main;

    switch (main) {
      case "Clouds":
        return "from-[#1e293b] via-[#334155] to-[#475569]";
      case "Rain":
        return "from-[#111827] via-[#1f2937] to-[#374151]";      
      case "Clear":
       return "from-[#0f2027] via-[#203a43] to-[#2c5364]";
      case "Snow":
       return "from-[#94a3b8] via-[#cbd5e1] to-[#e2e8f0]";
      case "Thunderstorm":
        return "from-black via-gray-900 to-slate-900";
      default:
       return "from-[#0f172a] via-[#312e81] to-[#7c3aed]";
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br ${getBackground()} relative overflow-hidden flex items-center justify-center p-6 transition-all duration-500`}
    >
    <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

    <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

    <div className="absolute bottom-0 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

    <div className="w-full max-w-6xl bg-white/10 backdrop-blur-2xl rounded-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.3)] p-10 border border-white/20 relative z-10">

      <h1 className="text-6xl font-black text-center text-white mb-3 tracking-tight">
        Weatherly
      </h1>

      <p className="text-center text-white/70 mb-10 text-lg">
        Real-time weather forecasting
      </p>

        <SearchBar
          city={city}
          setCity={setCity}
          getWeather={getWeather}
        />

        {loading && (
          <p className="text-center text-white text-xl">Loading...</p>
        )}

        {error && (
          <p className="text-center text-pink-200 text-2xl">{error}</p>
        )}

       {weather && !loading && (
        <div className="grid lg:grid-cols-2 gap-8 items-start">
        <WeatherCard weather={weather} />
        <Forecast forecast={forecast} />
        </div>
        )}
      </div>
    </div>
  );
}

export default App;