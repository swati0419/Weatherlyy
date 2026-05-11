function SearchBar({ city, setCity, getWeather }) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-5 py-4 rounded-2xl outline-none text-lg w-full md:w-[400px] bg-white/80"
      />

      <button
        onClick={getWeather}
        className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;