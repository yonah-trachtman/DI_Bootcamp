import {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const Weather = () =>{
    const inputRef = useRef(null);
    const [locationKey, setLocationKey] = useState(215854)
    const [location, setLocation] = useState("Tel Aviv")
    const [weather, setWeather] = useState()
    const apiKey = "13vwOIsAQYGgZXtqh4o1RFphrdeUjDjZ"

    const getWeather = async (locationKey) => {
        const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}`;
        try {
            const response = await axios.get(url);
            const weatherData = response.data;
            console.log(weatherData.DailyForecasts[0]);
            setWeather(weatherData.DailyForecasts[0]) 
        } catch (error) {
            console.log(error)
        }


    }

    useEffect(() => {
        getWeather(locationKey);
      }, [location])

    
    return(
        <>
    <h1>Weather in {location}</h1>
    
    <form>
        <input/>
    </form>
    <div style={{border: "2px solid black", width: "10vw"}}>
        <h2>{weather && weather.Day.IconPhrase}</h2>
        <h3>{weather && weather.Temperature.Maximum.Unit} {weather && weather.Temperature.Maximum.Value}</h3>
        <p>{weather && weather.Date}</p>
    </div>
    </>
)}

export default Weather;