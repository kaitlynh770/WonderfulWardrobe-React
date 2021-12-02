import Weather from './Weather.js'
import Inventory from './Inventory.js'
import { useState } from 'react';

function Wardrobe(){
    const [preppyOutfit, generatePreppyOutfit] = useState(" ");
    const [casualOutfit, generateCasualOutfit] = useState(" ");
    const [elegantOutfit, generateComfyOutfit] = useState(" ");
    const [comfyOutfit, generateElegantOutfit] = useState(" ");

    // function createPreppyOutfit(e){
    //     let { preppystyle } = props;

    // }
    const styleButton = {
        marginTop: "2vw",
        backgroundColor: "#FFDAD0",
        color: "white",
        padding: "12px 20px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        height: "4vw",
        fontFamily: "Gaegu",
        fontSize: "1.7vw",
        marginLeft: "2vw",
        marginRight: "2vw",
        
    }
    const inline = {
        display:"inline-block",
        marginTop: "10px",
        marginRight: "2vw",
        marginLeft: "75px",
        marginBottom: "10px"
     }
    return(
        <div className = "App">
            <div style = {inline}>
                <button style = {styleButton} onClick= {() => generatePreppyOutfit()}>
                    Create Preppy Outfit
                </button>
                <button style = {styleButton} onClick= {() => generateCasualOutfit()}>
                    Create Casual Outfit
                </button>
                <button style = {styleButton} onClick= {() => generateElegantOutfit()}>
                    Create Elegant Outfit
                </button>
                <button style = {styleButton} onClick= {() => generateComfyOutfit()}>
                    Create Comfy Outfit
                </button>
            </div>
        </div>
    );

}
export default Wardrobe;