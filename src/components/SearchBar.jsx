import { useState } from "react";
import { Search } from "lucide-react";

function SearchBar({ setCity }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") {
      setCity(input);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
      
      <div className="relative w-full sm:w-[500px]">
        <input
          type="text"
          placeholder="Search city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="w-full px-6 py-4 pl-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white placeholder:text-white/50 text-lg outline-none focus:ring-2 focus:ring-cyan-300 transition-all duration-300 shadow-lg"
        />

        <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/60" size={18} />
      </div>

    <button onClick={handleSearch}
        className="px-8 py-4 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 text-white font-semibold text-lg shadow-lg hover:scale-105 hover:shadow-purple-500/30 transition-all duration-300 active:scale-95"
    >
     Search
    </button>
    </div>
  );
}

export default SearchBar;