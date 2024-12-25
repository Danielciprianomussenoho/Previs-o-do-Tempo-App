import React from "react";
import "./WeatherInformations5Days.css";

const WeatherInformations5Days = ({ weather5Days }) => {
    let dailyForecast = {};

    for (let forecast of weather5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast;
        }
    }
    const next5DaysForest = Object.values(dailyForecast).slice(1, 6);

    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString("pt", {
            weekday: "long",
            day: "2-digit",
        });
        return newDate;
    }

    return (
        <div className="weather-container">
            <h3>Previsão para os proximos dias</h3>
            <div className="weather-list">
                {next5DaysForest.map((forecast) => (
                    <div key={forecast.dt} className="weather-item">
                        <p className="forecast-day">{convertDate(forecast)}</p>
                        <img
                            src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                        />
                        <p>
                            {Math.round(forecast.main.temp_min)}°C min /{" "}
                            {Math.round(forecast.main.temp_max)}°C max
                        </p>
                        <p className="descript">{forecast.weather[0].description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default WeatherInformations5Days;
