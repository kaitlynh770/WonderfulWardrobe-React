import React from 'react';
import { useState } from 'react';
const FashionStyle =({temperature, description, shirts, sweaters, tankTops, blouses, cardigans, skirts, shorts, jeans, sweatpants, dresses, setOutfitText, outfitText}) => {
    const [preppyOutfit, generatePreppyOutfit] = useState(" ");
    const [casualOutfit, generateCasualOutfit] = useState(" ");
    const [elegantOutfit, generateComfyOutfit] = useState(" ");
    const [comfyOutfit, generateElegantOutfit] = useState(" ");
    const [temp, setTemp] = useState(" ");

    let temperatureUsed = {temperature}.temperature; //this is grabbing the actual value, since just {temperature} is the object, which is not what I want. This applies to the rest of the variables listed below
    let shirtAmount = {shirts}.shirts;
    let sweatersAmount = {sweaters}.sweaters;
    let tankTopsAmount = {tankTops}.tankTops;
    let blousesAmount = {blouses}.blouses;
    let cardigansAmount = {cardigans}.cardigans;
    let skirtsAmount = {skirts}.skirts;
    let shortsAmount = {shorts}.shorts;
    let jeansAmount = {jeans}.jeans;
    let sweatpantsAmount = {sweatpants}.sweatpants;
    let dressesAmount = {dresses}.dresses;
    let outfitSuggestion = {outfitText}.outfitText;
    let weatherDescription = {description}.description;


    function createPreppyOutfit(){ //function that consists of if else statements to check if the user has certain items in their wardrobe. Depending on what style they choose and what temperature it is, the function will check the inventory and set different outfitTexts
        console.log({description});

        if(temperatureUsed < 45){
            if(cardigansAmount >= 1 && sweatersAmount >= 1 && skirtsAmount >= 1){
                console.log("Im in here rn");
                setOutfitText("Brr, it's cold, precisely " +  temperatureUsed + "°F with " + weatherDescription + "! But fashion comes first! Judging from your wardrobe, you can wear a sweater and a skirt! Throw on a cozy cardigan and your look is complete. Stay warm!");
                console.log({outfitText});
            }
            else if (cardigansAmount == 0 && sweatersAmount >= 1 && skirtsAmount >= 1){
                setOutfitText("Brr, it's cold, preciesely " + temperatureUsed + "°F! But fashion comes first! Judging from your wardrobe, you can wear a sweater and a skirt! If you had a cardigan, it would be cuter, but you gotta work with what you have!");
                console.log({outfitText}.outfitText);
            }
            else if (sweatersAmount == 0 && skirtsAmount == 0 && cardigansAmount == 0){
                setOutfitText("Hmm, it looks like you don't have the wardrobe items for your desired fashion style. Maybe choose a different style?");
            }
        }
        if(temperatureUsed > 45 && temperatureUsed < 75){
            if(cardigansAmount >= 1 && blousesAmount >= 1 && skirtsAmount >= 1){
                setOutfitText("What nice weather, it looks like it's " + temperatureUsed + "°F with " + weatherDescription + "! Today's the perfect day to wear a blouse and a skirt for the preppy look!");
            }
            else if(cardigansAmount == 0 && blousesAmount >= 1 && skirtsAmount >= 1){
                setOutfitText("What nice weather, it looks like it's " + temperatureUsed + "°F with " + weatherDescription + "! Today's the perfect day to wear a blouse and a skirt for the preppy look! If it's a little chilly outside, bring out a cardigan!");
            }
            else if (cardigansAmount == 0 && blousesAmount == 0 && skirtsAmount == 0){
                setOutfitText("Hmm, it looks like you don't have the wardrobe items for your desired fashion style. Maybe choose a different style?");
            }
        }
        if(temperatureUsed > 76){
            if(blousesAmount >=1 && skirtsAmount >= 1){
                setOutfitText("Wow, it's hot today! At " + temperatureUsed + "°F with " + weatherDescription + ", the best preppy outfit is a cute blouse with a skirt!");
            }
            else if(blousesAmount == 0 || skirtsAmount == 0){
                setOutfitText("Hmm, it looks like you don't have the wardrobe items for your desired fashion style. Maybe choose a different style?");
            }
        }
    }
    function createCasualOutfit(){
        if(temperatureUsed < 45){
            if(sweatersAmount >= 1 && jeansAmount >= 1){
                setOutfitText("Brr, it's cold! Precisely " + temperatureUsed + "°F with "+ weatherDescription + "! Based on your style preference and your wardrobe, you should wear a comfy sweater with a pair of jeans!");
            }
            else if(sweatersAmount == 0 || jeansAmount == 0){
                setOutfitText("Hmm, it looks like you don't have the wardrobe items for your desired fashion style. Maybe choose a different style?");
            }
        }
        if(temperatureUsed > 45 && temperatureUsed < 75){
            if(shirtAmount >= 1 && jeansAmount >=1){
                setOutfitText("The weather looks great today at a nice " + temperatureUsed + "°F with " + weatherDescription + "! Since you're going casual today, you should just wear a shirt with jeans!");
            }
            else if (shirtAmount == 0 || jeansAmount == 0){
                setOutfitText("Hmm, it looks like you don't have the wardrobe items for your desired fashion style. Maybe choose a different style?");
            }
        }
        if(temperatureUsed > 76){
            if(tankTopsAmount >= 1 && shortsAmount >= 1 && shirtAmount >= 1){
                setOutfitText("Wow, it's hot today! It's a whopping " + temperatureUsed + "°F with " + weatherDescription + "! Since it's so hot today, you should wear a tank top or shirt with some shirts!");
            }
            else if (tankTopsAmount == 0 || shortsAmount == 0 || shirtAmount == 0){
                setOutfitText("Hmm, it looks like you don't have the wardrobe items for your desired fashion style. Maybe choose a different style?");
            }
        }
    }
    function createElegantOutfit(){
        if(temperatureUsed < 45){
            if(cardigansAmount >= 1 && dressesAmount >= 1 && blousesAmount >= 1 && skirtsAmount >= 1){
                setOutfitText("Brr, it's cold today! Preciesely " + temperatureUsed + "°F with " + weatherDescription + "! It's cold today, but fashion comes first, right? That being said, based on your wardrobe and fashion preference, you should wear a dress with a cardigan! If you're not feeling that outfit, you can wear a blouse with a skirt with a cardigan thrown over! Bring an extra coat to stay warm!");
            }
            else if (cardigansAmount == 0 || blousesAmount == 0 || dressesAmount == 0 || skirtsAmount == 0){
                setOutfitText("Hmm, it looks like you don't have the wardrobe items for your desired fashion style. Maybe choose a different style?");
            }
        }
        if(temperatureUsed > 45 && temperatureUsed < 75){
            if(blousesAmount >=1 && skirtsAmount >= 1){
                setOutfitText("Wow! What nice weather today at " + temperatureUsed +"°F with " + weatherDescription + "! With the clothes that you have, this weather is best for a blouse and skirt combo!");
            }
            else if (blousesAmount == 0 || skirtsAmount == 0){
                setOutfitText("Hmm, it looks like you don't have the wardrobe items for your desired fashion style. Maybe choose a different style?");
            }
        }
        if(temperatureUsed > 76){
            if(dressesAmount >= 1){
                setOutfitText("It's hot today at " + temperatureUsed +"°F with " + weatherDescription + "! Since it's such nice weather, wear your favorite dress out today!");
            }
            else if(dressesAmount == 0){
                setOutfitText("It's such beautiful weather today! It would be a great day to wear a dress if you had one, but it seems that you don't :(");
            }
        }
    }
    function createComfyOutfit(){
        if(temperatureUsed < 45){
            if(sweatersAmount >= 1 && sweatpantsAmount >= 1){
                setOutfitText("Brr, it's cold today! Preciesely " + temperatureUsed + "°F with " + weatherDescription + "! A cozy outfit is the best for this temperature! The best outfit for this is a warm sweater with a comfy pair of sweatpants! Stay warm!");
            }
            else if (sweatpantsAmount == 0 || sweatpantsAmount == 0){
                setOutfitText("Hmm, it looks like you don't have the wardrobe items for your desired fashion style. Maybe choose a different style?");
            }
        }
        if(temperatureUsed > 45 && temperatureUsed < 75){
            if(shirtAmount >= 1 && sweatpantsAmount >= 1){
                setOutfitText("The weather looks great today at " + temperatureUsed + "°F with " + weatherDescription + "! Based on your style preference, you should wear a simple shirt with some sweatpants. Cozy and cute :)");
            }
            else if (shirtAmount == 0 || sweatpantsAmount == 0){
                setOutfitText("Hmm, it looks like you don't have the wardrobe items for your desired fashion style. Maybe choose a different style?");
            }
        }
        if(temperatureUsed > 76){
            if(tankTopsAmount >= 1 && sweatpantsAmount >= 1){
                setOutfitText("It's hot today at " + temperatureUsed +"°F with " + weatherDescription + "! Even if it's hot, the best thing to wear for a comfy style today is a tank top with a pair of sweatpants!");
            }
            else if (tankTopsAmount == 0 || sweatpantsAmount ==0){
                setOutfitText("Hmm, it looks like you don't have the wardrobe items for your desired fashion style. Maybe choose a different style?");
            }
        }

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
                <button className = "fashion" onClick = {createPreppyOutfit}>
                    Create Preppy Outfit
                </button>
                <button className = "fashion" onClick= {createCasualOutfit}>
                    Create Casual Outfit
                </button>
                <button className = "fashion" onClick= {createElegantOutfit}>
                    Create Elegant Outfit
                </button>
                <button className = "fashion" onClick= {createComfyOutfit}>
                    Create Comfy Outfit
                </button>
            </div>
        </div>
    );
}
export default FashionStyle;