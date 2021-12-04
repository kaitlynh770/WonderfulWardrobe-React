import React from 'react';
import { useState } from 'react';
const FashionStyle =({temperature, description, shirts, sweaters, tankTops, blouses, cardigans, skirts, shorts, jeans, sweatpants, dresses}) => {
    const [preppyOutfit, generatePreppyOutfit] = useState(" ");
    const [casualOutfit, generateCasualOutfit] = useState(" ");
    const [elegantOutfit, generateComfyOutfit] = useState(" ");
    const [comfyOutfit, generateElegantOutfit] = useState(" ");
    const [temp, setTemp] = useState("");

    function determineTemp(){
        if({temperature} > 76){
            setTemp("hot");
        }
    }

    function createPreppyOutfit(){
        console.log({shirts});
        console.log({sweaters});
        console.log({temperature});
        console.log({description});
        console.log({dresses});
        console.log({skirts});
    }

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
        fontSize: "1.3vw",
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
                {/* <button style = {styleButton} onClick= {e => createPreppyOutfit(e)}>
                    Create Preppy Outfit
                </button> */}
                <button style = {styleButton} onClick = {createPreppyOutfit}>
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
export default FashionStyle;