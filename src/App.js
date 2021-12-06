import logo from './logo.svg';
import './App.css';
import Weather from './Weather.js';
import FashionStyle from './FashionStyle.js';
import Inventory from './Inventory.js';
import Wardrobe from './Wardrobe.js';
import {useState} from 'react'

function App() {
  const [weatherState, setWeatherState] = useState(true);
  const [inventoryState, setInventoryState] = useState(false);
  const [fashionStyleState, setFashionStyleState] = useState(false);
  const [outfitText, setOutfitText] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [description, setDescription] = useState('');
  const [shirts, setShirts] = useState(0);
  const [sweaters, setSweaters] = useState(0);
  const [tankTops, setTankTops] = useState(0);
  const [blouses, setBlouses] = useState(0);
  const [cardigans, setCardigans] = useState(0);
  const [skirts, setSkirts] = useState(0);
  const [shorts, setShorts] = useState(0);
  const [jeans, setJeans] = useState(0);
  const [sweatpants, setSweatpants] = useState(0);
  const [dresses, setDresses] = useState(0);
  return (
    <div>
      <Weather inventoryState = {inventoryState} fashionStyleState = {fashionStyleState} setInventoryState = {setInventoryState} setFashionStyleState = {setFashionStyleState} setTemperature = {setTemperature} setDescription = {setDescription} description = {description} temperature = {temperature}/>
      {inventoryState === true && <Inventory shirts = {shirts} setShirts = {setShirts} sweaters = {sweaters} setSweaters = {setSweaters} tankTops = {tankTops} setTankTops = {setTankTops} blouses = {blouses} setBlouses = {setBlouses} cardigans = {cardigans} setCardigans = {setCardigans} skirts ={skirts} setSkirts = {setSkirts} shorts = {shorts} setShorts = {setShorts} jeans = {jeans} setJeans = {setJeans} sweatpants = {sweatpants} setSweatpants = {setSweatpants} dresses = {dresses} setDresses ={setDresses}  outfitText = {outfitText}/>}
      {fashionStyleState === true &&<FashionStyle temperature = {temperature} description = {description} shirts = {shirts} sweaters = {sweaters} tankTops = {tankTops} blouses = {blouses} cardigans = {cardigans} skirts = {skirts} shorts = {shorts} jeans = {jeans} sweatpants = {sweatpants} dresses = {dresses} setOutfitText = {setOutfitText} outfitText = {outfitText}/>}
      <Wardrobe/>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
