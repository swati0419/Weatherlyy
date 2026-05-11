import {Wind, Droplets, Thermometer, Gauge} from "lucide-react";

function WeatherCard({ weather }) {
  return (
    <div className="space-y-8">
      <div className="text-center text-white mb-12">
       <div className="w-44 h-44 mx-auto flex items-center justify-center rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-2">
        <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
        alt="weather-icon"
        className="w-40 drop-shadow-[0_0_30px_rgba(255,255,255,0.9)] brightness-125 contrast-125"
        />
    </div>

        <h2 className="text-6xl font-black mb-2 tracking-tight">
          {Math.round(weather.main.temp)}°C
        </h2>

        <h3 className="text-4xl font-bold mb-2 tracking tight">
          {weather.name}
        </h3>

        <p className="text-2xl capitalize text-white/70 font-medium tracking-wide">
          {weather.weather[0].description}
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-6 text-center text-white hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xlbg-white/10 rounded-2xl p-5 text-center text-white">

        <div className="flex justify-center mb-3">
            <Droplets />
        </div>

        <h4 className="text-lg mb-2 text-white/70">
             Humidity
        </h4>
          <p className="text-3xl font-bold">
            {weather.main.humidity}%
          </p>
        </div>

      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-6 text-center text-white hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xlbg-white/10 rounded-2xl p-5 text-center text-white">

        <div className="flex justify-center mb-3">
            <Wind />
        </div>

        <h4 className="text-lg mb-2 text-white/70">
             Wind
        </h4>
          <p className="text-3xl font-bold">
            {weather.wind.speed} km/h
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-6 text-center text-white hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xlbg-white/10 rounded-2xl p-5 text-center text-white">

        <div className="flex justify-center mb-3">
            <Thermometer />
        </div>
        <h4 className="text-lg mb-2 text-white/70">
            Feels Like
        </h4>
          <p className="text-3xl font-bold">
            {Math.round(weather.main.feels_like)}°C
          </p>
        </div>

       <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[28px] p-6 text-center text-white hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 shadow-xlbg-white/10 rounded-2xl p-5 text-center text-white">

        <div className="flex justify-center mb-3">
            <Gauge size={28} />
        </div>
        <h4 className="text-lg mb-2 text-white/70">
         Pressure
        </h4>
          <p className="text-3xl font-bold">
            {weather.main.pressure}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;