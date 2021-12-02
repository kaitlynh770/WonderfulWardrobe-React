import logo from './logo.svg';
import './App.css';
import Weather from './Weather.js';
import FashionStyle from './FashionStyle.js';
import Inventory from './Inventory.js';
import Wardrobe from './Wardrobe.js';

function App() {
  return (
    <div>
      <Weather/>
      <FashionStyle/>
      <Inventory/>
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
