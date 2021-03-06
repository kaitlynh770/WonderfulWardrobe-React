import React from 'react';
import {useState} from 'react'

const Inventory = ({shirts, setShirts, sweaters, setSweaters, tankTops, setTankTops, blouses, setBlouses, cardigans, setCardigans, skirts, setSkirts, shorts, setShorts, jeans, setJeans, sweatpants, setSweatpants, dresses, setDresses, outfitText}) => {
    //this component doesn't have much logic in it since it sets the state of each value in the return statement.
    //mainly just keeps track of the number of each item, this value will be used in FashionStyle to determine what outfit the user will get back
    var labelFont = {
        fontFamily: 'Gaegu',
        fontSize: '1.5vw',
    }
    var spaceBetweenButtons = {
        marginBottom: '1.5vw',
        marginTop: '1.5vw'
    }
    var spacingBetween = {
        padding: '0.5vw',
        margin: '1.5vw',
        marginBottom: '10vw'
    }
    var outfitTextStyle = {
        fontFamily: 'Gaegu',
        fontSize: '1.8vw',
        color: '#909090',
        marginLeft: '6vw',
        marginRight: '6vw'
    }
    return(
        <div className = "App">
            <p style = {outfitTextStyle}>
                {outfitText}
            </p>
            <form style = {labelFont}>
                <div style = {spaceBetweenButtons}>
                    <label style = {spacingBetween}>
                        Shirts:
                        <input type="number" name="Shirts" min = "0"  max = "10" value = {shirts} onChange= {e=> setShirts(e.target.value)}/>
                    </label> 
                    <label style = {spacingBetween}>
                        Sweaters:
                        <input type="number" name="Sweaters" min = "0" max = "10" value = {sweaters} onChange= {e=> setSweaters(e.target.value)} />
                    </label>
                    <label style = {spacingBetween}>
                        Tank Tops:
                        <input type="number" name="Tank Tops" min = "0" max = "10" value = {tankTops} onChange= {e=> setTankTops(e.target.value)}/>
                    </label>
                    <label style = {spacingBetween}>
                        Blouses:
                    <input type="number" name="Blouses" min = "0" max = "10" value = {blouses} onChange= {e=> setBlouses(e.target.value)}/>
                    </label>
                    <label style = {spacingBetween}>
                        Cardigans:
                        <input type="number" name="Cardigans" min = "0" max = "10"value = {cardigans} onChange= {e=> setCardigans(e.target.value)} />
                    </label>
                </div>
                <div style = {spaceBetweenButtons}>
                    <label style = {spacingBetween}>
                        Skirts:
                        <input type="number" name="Skirts" min = "0" max = "10" value = {skirts} onChange= {e=> setSkirts(e.target.value)}/>
                    </label>
                    <label style = {spacingBetween}>
                        Shorts:
                        <input type="number" name="Shorts" min = "0" max = "10" value = {shorts} onChange= {e=> setShorts(e.target.value)}/>
                    </label>
                    <label style = {spacingBetween}>
                        Jeans:
                        <input type="number" name="Jeans" min = "0" max = "10" value = {jeans} onChange= {e=> setJeans(e.target.value)} />
                    </label>
                    <label style = {spacingBetween}>
                        Sweatpants:
                        <input type="number" name="Sweatpants" min = "0" max = "10" value = {sweatpants} onChange= {e=> setSweatpants(e.target.value)}/>
                    </label>
                    <label style = {spacingBetween}>
                        Dresses:
                        <input type="number" name="Dresses" min = "0" max = "10"value = {dresses} onChange= {e=> setDresses(e.target.value)}/>
                    </label>
                </div>
            </form>
        </div>
    );
}
export default Inventory;