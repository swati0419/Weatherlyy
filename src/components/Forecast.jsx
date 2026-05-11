function Forecast({ forecast }) {
  return (
    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[32px] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)] ">
      <h2 className="text-4xl font-black text-white mb-8 tracking-tight">
        5-Day Forecast
      </h2>
    <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">
        {forecast.map((item, index) => (
          <div
            key={index}
            className="min-w-[170px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[30px] p-6 text-center text-white hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 shadow-xl"
          >
            <p className="font-bold text-lg mb-4 tracking-wide text-white/80">
              {new Date(item.dt_txt).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <img
              src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              alt="forecast-icon"
            className="mx-auto w-24 drop-shadow-2xl"
            />

            <p className="text-4xl font-black mb-2 tracking-tight">
              {Math.round(item.main.temp)}°C
            </p>

            <p className="capitalize text-sm text-white/70 leading-relaxed">
              {item.weather[0].description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;