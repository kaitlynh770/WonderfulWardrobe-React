import React, { useState } from 'react';
import wardrobe from './wardrobe.gif';
import Wardrobe from './Wardrobe.js';
import DisplayWeather from './DisplayWeather';

function Weather(){

    const APIKEY = "f78fb0e517128e0a7d7a2722df5e3ff4";

    const [weatherText, updateWeatherText] = useState(" ");
    const [form, setForm] = useState({
        city: "",
        country: "",
    });
    const [weather, setWeather] = useState([

    ])
    const [temperature, setTemperature] = useState(0);
    const [weatherDescription, setWeatherDescription] = useState("");

    async function weatherData(e){

        e.preventDefault();
        if(form.city == ""){
            alert("Please fill out the city!");
        }
        else{
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
            )
            .then(res => res.json())
            .then((data) => parseData(data)
            );
            //Math.floor(data.main.temp-273.15) * 9/5 + 32 returns the temperature in farenheight
            //data.weather[0].description returns the weather description
            //data.main.temp returns the temperature
            //data.weather[0].icon returns the icon that matches the weather description
            setWeather(
                {
                    data: data
                }
            )
            // setTemperature(
            //     {
            //         temperature: Math.floor((data.main.temp - 273.15) * 9/5) + 32
            //     }
            // )
            // console.log(temperature);

        }

    }

    function parseData(data){
        // console.log(data.main.temp)
        let temp = Math.floor((data.main.temp - 273.15) * 9/5) + 32;
        let description = data.weather[0].description;
        // console.log(temp)
        setTemperature(temp);
        setWeatherDescription(description);

    };

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if(name == "city"){
            setForm({ ...form, city: value})
        }
        if(name == "country"){
            setForm({ ...form, country: value})
        }
    }

    var headerStyle = {
        fontFamily: 'Vibur',
        fontSize: "5vw",
        color: "#D5E2EF",
        textShadow: "2px 2px 4px #FFFFFF",
        border: "2px",
    }
    return(
        <div className = "App">
            <h1 style = {headerStyle}>
                Wondereful Weather Wardrobe
            </h1>
            <form>
                <input type = "text" name = "city" placeholder = "city" onChange={e=> handleChange(e)}/>
                <input type = "text" name = "country" placeholder = "country "onChange={e=> handleChange(e)}/>
                <button onClick = {e => weatherData(e)}>
                    Submit
                </button>
            </form>
            {weather.data != undefined ? (
                <div>
                    <DisplayWeather data={weather.data} />
                </div>
            ) : null}
            <img src = {wardrobe} className = "Weather-Image" alt = "holder for weather image"/>
        </div>
    );
}

export default Weather;