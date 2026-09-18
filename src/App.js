import React from "react";
import Weather from "./components/Weather";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">☁️</span>
            <span>Weather Now</span>
          </div>

          <p className="header-subtitle">
            Real-time weather information at your fingertips
          </p>
        </div>
      </header>

      <main className="main-content">
        <Weather />
      </main>

      <footer className="footer">
        <p>Weather Now © 2026 | Powered by OpenWeatherMap</p>
      </footer>
    </div>
  );
}

export default App;
