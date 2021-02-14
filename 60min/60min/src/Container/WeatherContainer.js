import React from "react";
import dotenv from "dotenv";
import Loading from "../components/Loading/Loading";
import Weather from "../components/News/Weather";
import { geolocated } from "react-geolocated";
import Error from "../components/Error/Error";
dotenv.config();

class WeatherContainer extends React.Component {
  state = {
    data: null,
  };

  async fetchWeatherAPI() {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${this.props.coords.latitude}&lon=${this.props.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(":::", data);
        this.setState({ data: data });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.coords !== prevProps.coords) {
      this.fetchWeatherAPI();
    }
  }

  render() {
    const { data } = this.state;
    return (
      <div className="weather">
        {data === null ? (
          <Loading />
        ) : data === undefined ? (
          <Error />
        ) : (
          <Weather weatherData={data} />
        )}
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(WeatherContainer);
