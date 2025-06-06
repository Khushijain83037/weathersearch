const express = require("express");
const axios = require("axios");
const router = express.Router();

const apiKey = process.env.WEATHERAPI_KEY;

router.get("/", async (req, res) => {
  const city = req.query.city;
  if (!city) {
    return res.status(400).json({ error: "City parameter is required" });
  }

  try {
    const weatherRes = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(city)}&days=7&aqi=no&alerts=no`
    );

    res.json({
      location: weatherRes.data.location,
      current: weatherRes.data.current,
      forecast: weatherRes.data.forecast.forecastday,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

module.exports = router;
