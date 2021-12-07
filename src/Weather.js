import React, { useState } from 'react';
import Wardrobe from './Wardrobe.js';
import wardrobe from './img/wardrobe.gif';
import sunny from './img/sunny.gif';
import rainy from './img/rainy.gif';

const Weather = ({inventoryState, fashionStyleState, setInventoryState, setFashionStyleState, setTemperature, setDescription, temperature, description}) =>{

    const APIKEY = "f78fb0e517128e0a7d7a2722df5e3ff4";

    const [weatherText, updateWeatherText] = useState();
    // const [image, setImage] = useState('./img/wardrobe.gif');
    const [form, setForm] = useState({
        city: "",
        country: "",
    });
    const [image, setWeatherImage] = useState(wardrobe);

    async function weatherData(e){

        e.preventDefault();
        if(form.city == ""){
            alert("Please fill out the city!");
        }
        if(form.country == ""){
            alert("Please fill out country!");
        }
        else{
            const data = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${APIKEY}`
            )
            .then(res => res.json())
            .then((data) => parseData(data)
            );
        }
    }

    function parseData(data){
        // console.log(data.main.temp)
        if(data.message == "city not found"){
            alert("City or country was not valid, please try again!");
        }
        else{
            let temp = Math.floor((data.main.temp - 273.15) * 9/5) + 32;
            let description = data.weather[0].description;
            setTemperature(temp);
            setDescription(description);
            console.log(description);
        }
        if({temperature}.temperature != 0){
            console.log("Im in hereeee");
            setFashionStyleState(true);
            setInventoryState(true);
        }
        else{
            setInventoryState(false);
            setFashionStyleState(false);
        }
        setImage();
    };
    function setImage(){
        let weatherDescription = {description}.description;
        if(weatherDescription == "clear skies"){
            setWeatherImage(sunny);
        }
        else if(weatherDescription == "overcast clouds"){
            setWeatherImage(rainy);
        }
    }

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
    var imageSize = {
        width: "25%"
    }
    var instruction = {
        fontFamily: 'GaeguBold',
        fontSize: '2vw',
        color: '#909090'
    }
    var submitButtonStyle = {
        marginTop: "2vw",
        backgroundColor: "#dfe7fd",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        height: "3vw",
        fontFamily: "GaeguBold",
        fontSize: "1.3vw",
        marginLeft: "0.5vw",
        marginRight: "0.5vw",
    }
    var formStyle = {
        padding: '0.5vw',
        border: 'none',
        borderBottom: '2px dashed rgb(2, 57, 88)',
        marginRight: '1vw',
        marginLeft: '1vw',
        backgroundColor: '#FAF5DC',
        fontFamily: 'Gaegu',
        fontSize: '1.2vw'
    }
    return(
        <div className = "App">
            <h1 style = {headerStyle}>
                Wonderful Weather Wardrobe
            </h1>
            <p style = {instruction}>
                Please put in your location: 
            </p>
            <form>
                <input style = {formStyle} type = "text" name = "city" placeholder = "city" onChange={e=> handleChange(e)}/>
                <input style = {formStyle} type = "text" name = "country" placeholder = "country "onChange={e=> handleChange(e)}/>
                <button className = "submit" onClick = {e => weatherData(e)} active = {inventoryState, fashionStyleState}>
                    Submit
                </button>
            </form>
            <img src = {image} style = {imageSize} alt = "holder for weather image"/>
        </div>
    );
}

export default Weather;