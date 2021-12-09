import logo from './logo.svg';
import './App.css';
import Weather from './Weather.js';
import FashionStyle from './FashionStyle.js';
import Inventory from './Inventory.js';
import {useState} from 'react'

function App() { //since this app is using hooks, App needs to be changed into a function
  const [weatherText, setWeatherText] = useState(''); //useState for the weatherText that is displayed when data from the Weather API is read 
  const [mainWeather, setMainWeather] = useState(''); //this is the text that describes the weather condition
  const [inventoryState, setInventoryState] = useState(false); //useState can determine whether a component is rendered or not initially. For this app, I chose to have it only rendered under certain conditions (weather successfully reads the temperature in the city)
  const [fashionStyleState, setFashionStyleState] = useState(false); //same as above, this sets FashionStyle, which is in charge of generating the outfit, essentially to false in the beginning
  const [outfitText, setOutfitText] = useState(''); //outfitText is the text that displays to tell what the user to wear under certain conditions
  const [temperature, setTemperature] = useState(0); //temperature that will be set when reading data from the API
  const [description, setDescription] = useState(''); //description of the weather (broken clouds, scattered clouds, etc)
  const [shirts, setShirts] = useState(0); //set the number of shirts
  const [sweaters, setSweaters] = useState(0); //set the number of sweaters
  const [tankTops, setTankTops] = useState(0); //set the number of tanktops
  const [blouses, setBlouses] = useState(0); //set the number of blouses
  const [cardigans, setCardigans] = useState(0); //set the number of cardigans
  const [skirts, setSkirts] = useState(0); //set the number of skirts
  const [shorts, setShorts] = useState(0); //set the number of shorts
  const [jeans, setJeans] = useState(0); //set the number of jeans
  const [sweatpants, setSweatpants] = useState(0); //set the number of sweatpants
  const [dresses, setDresses] = useState(0); //set the number of dresses 
  //in return, all the data that each component needs will be passed to them
  //for example, the Weather component needs temperature and setTemperature, but fashionStyle only needs temperature. Essentially whichever data the component needs is easily passed along down belowe
  return (
    <div>
      <Weather inventoryState = {inventoryState} fashionStyleState = {fashionStyleState} setInventoryState = {setInventoryState} setFashionStyleState = {setFashionStyleState} setTemperature = {setTemperature} setDescription = {setDescription} description = {description} temperature = {temperature} mainWeather = {mainWeather} setMainWeather = {setMainWeather} weatherText = {weatherText} setWeatherText = {setWeatherText}/> 
      {inventoryState === true && <Inventory shirts = {shirts} setShirts = {setShirts} sweaters = {sweaters} setSweaters = {setSweaters} tankTops = {tankTops} setTankTops = {setTankTops} blouses = {blouses} setBlouses = {setBlouses} cardigans = {cardigans} setCardigans = {setCardigans} skirts ={skirts} setSkirts = {setSkirts} shorts = {shorts} setShorts = {setShorts} jeans = {jeans} setJeans = {setJeans} sweatpants = {sweatpants} setSweatpants = {setSweatpants} dresses = {dresses} setDresses ={setDresses}  outfitText = {outfitText}/>}
      {fashionStyleState === true &&<FashionStyle temperature = {temperature} description = {description} shirts = {shirts} sweaters = {sweaters} tankTops = {tankTops} blouses = {blouses} cardigans = {cardigans} skirts = {skirts} shorts = {shorts} jeans = {jeans} sweatpants = {sweatpants} dresses = {dresses} setOutfitText = {setOutfitText} outfitText = {outfitText}/>}
    </div>
  );
}

export default App;