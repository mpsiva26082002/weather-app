# weather-app
# 🌤️ Weather Now

A responsive weather application built with React.js that allows users to search for any city and view its current weather information using the OpenWeatherMap API.

## 🌐 Live Demo

**Live Project:**  
https://mpsiva26082002.github.io/weather-app/

## 📂 GitHub Repository

https://github.com/mpsiva26082002/weather-app

## 📌 Project Overview

Weather Now is a simple and user-friendly weather application developed using React.js.

Users can enter a city name and get real-time weather information such as temperature, weather condition, humidity, wind speed, pressure, visibility, sunrise, and sunset.

The application uses the OpenWeatherMap API to retrieve weather data.

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Current temperature in Celsius
- 🌤️ Current weather condition
- 💧 Humidity
- 💨 Wind speed
- 🌡️ Feels-like temperature
- 📊 Atmospheric pressure
- 👁️ Visibility
- 📈 Minimum and maximum temperature
- 🌅 Sunrise and sunset time
- 📅 Local date for the selected city
- 🔄 Loading indicator while fetching weather data
- ⚠️ Error handling for invalid city names
- 🎨 Weather-based background styling
- 📱 Responsive design for different screen sizes

## 🛠️ Technologies Used

- **React.js**
- **JavaScript**
- **HTML5**
- **CSS3**
- **Axios**
- **OpenWeatherMap API**
- **Git**
- **GitHub**
- **Visual Studio Code**

## 📂 Project Structure

```text
weather-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Weather.js
│   │   └── Weather.css
│   │
│   ├── App.js
│   ├── App.css
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
⚙️ Installation
1. Clone the repository
git clone https://github.com/mpsiva26082002/weather-app.git
2. Open the project folder
cd weather-app
3. Install dependencies
npm install
4. Create the environment file

Create a file named:

.env

Add your OpenWeatherMap API key:

REACT_APP_WEATHER_API_KEY=your_api_key_here

Replace your_api_key_here with your own API key.

5. Start the application
npm start

The application will run at:

http://localhost:3000
🔑 API

This project uses the OpenWeatherMap API to retrieve current weather information.

API:

https://openweathermap.org/api

🔐 Environment Variables

The API key is stored in an environment variable instead of being directly written into the source code.

The .env file is excluded from GitHub using .gitignore.

REACT_APP_WEATHER_API_KEY=your_api_key_here

Do not upload your actual API key to a public GitHub repository.

🚀 Deployment

The application is deployed using GitHub Pages.

The production build is generated using:

npm run build

The application is deployed using:

npm run deploy
👨‍💻 Author

M P Siva

MCA Graduate | Fresher | Web Developer

Technical Skills
React.js
JavaScript
HTML5
CSS3
Node.js
MongoDB
Git & GitHub
📄 License

This project was created for learning and academic purposes.


**One correction from the earlier README:** don't say the app uses Tailwind CSS or MongoDB in this project. Your Weather App actually uses **React, JavaScript, CSS, Axios, and OpenWeatherMap API**, so this README accurately represents what you built.
