import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend,
} from "recharts";
import { motion } from "framer-motion";

const weatherThemeMap = {
  Sunny: "sunny",
  Clear: "sunny",
  Rain: "rainy",
  Cloudy: "cloudy",
  Overcast: "cloudy",
  Snow: "snowy",
};

const WeatherUI = () => {
  const [city, setCity] = useState("Delhi");
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState("sunny");

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`http://localhost:5000/api/forecast?city=${cityName}`);
      const current = res.data?.current || null;

      if (!current) throw new Error("No current weather data");

      setWeather(current);
      const mainWeather = current.condition?.text || "";
      setTheme(weatherThemeMap[mainWeather] || "sunny");
      setCity(cityName);
    } catch (err) {
      setError("City not found or API error.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
    const interval = setInterval(() => {
      fetchWeather(city);
    }, 900000); // 15 minutes
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.trim()) {
      fetchWeather(input.trim());
      setInput("");
    }
  };

  const chartData = weather
    ? [
        { name: "Temperature", value: weather.temp_c, unit: "°C" },
        { name: "Feels Like", value: weather.feelslike_c, unit: "°C" },
        { name: "Humidity", value: weather.humidity, unit: "%" },
        { name: "Wind Speed", value: weather.wind_kph, unit: "km/h" },
        { name: "UV Index", value: weather.uv, unit: "" },
      ]
    : [];

  return (
    <motion.div
      data-theme={theme}
      className="min-h-screen bg-gray-50 text-gray-900 px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-10 tracking-tight text-blue-700"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Weather Forecast
        </motion.h1>

        <motion.form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row items-center gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Search city..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full sm:flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow-md transition"
          >
            Search
          </button>
        </motion.form>

        {loading && (
          <div className="flex justify-center my-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}

        {error && (
          <motion.div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <strong className="font-bold">Error:</strong> <span>{error}</span>
          </motion.div>
        )}

        {weather && (
          <>
            <motion.div
              className="bg-white shadow-lg rounded-xl p-6 mb-8"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-semibold mb-2">{city}</h2>
              <p className="text-xl font-medium text-blue-700">{weather.temp_c}°C - {weather.condition.text}</p>
              <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                <p><strong>Feels Like:</strong> {weather.feelslike_c}°C</p>
                <p><strong>Humidity:</strong> {weather.humidity}%</p>
                <p><strong>Wind:</strong> {weather.wind_kph} km/h {weather.wind_dir}</p>
                <p><strong>Pressure:</strong> {weather.pressure_mb} mb</p>
                <p><strong>UV Index:</strong> {weather.uv}</p>
                <p><strong>Cloud Cover:</strong> {weather.cloud}%</p>
                <p><strong>Visibility:</strong> {weather.vis_km} km</p>
                <p><strong>Precipitation:</strong> {weather.precip_mm} mm</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-white shadow-lg rounded-xl p-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-700">Current Weather Parameters</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip formatter={(value, name, props) => [`${value}${props.payload.unit}`, name]} />
                  <Legend />
                  <Bar dataKey="value" fill="#2563eb" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>
          </>
        )}

        <motion.footer
          className="text-center text-sm text-gray-500 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          Made with ❤️ by <a href="https://www.linkedin.com/in/khushi-jain" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Khushi Jain</a>
        </motion.footer>
      </div>
    </motion.div>
  );
};

export default WeatherUI;
