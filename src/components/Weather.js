import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API_KEY";

  const getWeather = async (e) => {
    e.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name.");
      setWeather(null);
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&appid=${API_KEY}&units=metric`;

      const response = await axios.get(API_URL);

      setWeather(response.data);
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("City not found. Please check the city name.");
      } else if (err.response && err.response.status === 401) {
        setError("Invalid API key. Please check your OpenWeatherMap API key.");
      } else {
        setError("Unable to get weather data. Please try again.");
      }

      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="weather-section">

      {/* Search */}

      <form className="search-container" onSubmit={getWeather}>
        <div className="input-wrapper">
          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {/* Loading */}

      {loading && (
        <div className="message-card">
          <div className="loader"></div>
          <p>Getting weather data...</p>
        </div>
      )}

      {/* Error */}

      {error && !loading && (
        <div className="error-card">
          <span>⚠️</span>
          <p>{error}</p>
        </div>
      )}

      {/* Initial message */}

      {!weather && !loading && !error && (
        <div className="welcome-card">
          <div className="welcome-icon">🌤️</div>

          <h2>Check the Weather</h2>

          <p>
            Search for any city to view its current weather
            conditions.
          </p>
        </div>
      )}

      {/* Weather Result */}

      {weather && !loading && (
        <article className="weather-card">

          <div className="location">
            <span>📍</span>

            <div>
              <h2>{weather.name}</h2>

              <p>{weather.sys.country}</p>
            </div>
          </div>

          <div className="main-weather">

            <div className="weather-icon-container">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
                className="weather-icon"
              />
            </div>

            <div className="temperature">
              <h1>{Math.round(weather.main.temp)}°C</h1>

              <p>
                {weather.weather[0].description}
              </p>
            </div>

          </div>

          <div className="weather-details">

            <div className="detail-card">
              <span className="detail-icon">💧</span>

              <div>
                <p>Humidity</p>
                <strong>{weather.main.humidity}%</strong>
              </div>
            </div>

            <div className="detail-card">
              <span className="detail-icon">💨</span>

              <div>
                <p>Wind Speed</p>
                <strong>{weather.wind.speed} m/s</strong>
              </div>
            </div>

            <div className="detail-card">
              <span className="detail-icon">🌡️</span>

              <div>
                <p>Feels Like</p>
                <strong>
                  {Math.round(weather.main.feels_like)}°C
                </strong>
              </div>
            </div>

            <div className="detail-card">
              <span className="detail-icon">📊</span>

              <div>
                <p>Pressure</p>
                <strong>{weather.main.pressure} hPa</strong>
              </div>
            </div>

            <div className="detail-card">
              <span className="detail-icon">👁️</span>

              <div>
                <p>Visibility</p>
                <strong>
                  {(weather.visibility / 1000).toFixed(1)} km
                </strong>
              </div>
            </div>

            <div className="detail-card">
              <span className="detail-icon">🌡️</span>

              <div>
                <p>Min / Max</p>
                <strong>
                  {Math.round(weather.main.temp_min)}° /
                  {Math.round(weather.main.temp_max)}°
                </strong>
              </div>
            </div>

          </div>

        </article>
      )}

    </section>
  );
}

export default Weather;
