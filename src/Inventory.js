import React from 'react';
import Wardrobe from './Wardrobe.js';
import {useState} from 'react'

const Inventory = ({shirts, setShirts, sweaters, setSweaters, tankTops, setTankTops, blouses, setBlouses, cardigans, setCardigans, skirts, setSkirts, shorts, setShorts, jeans, setJeans, sweatpants, setSweatPants, dresses, setDresses}) => {

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
    return(
        <div className = "App">
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
                        <input type="number" name="Jeans" min = "0" max = "10" value = {jeans} onChange= {e=> this.setJeans(e.target.value)} />
                    </label>
                    <label style = {spacingBetween}>
                        Sweatpants:
                        <input type="number" name="Sweatpants" min = "0" max = "10" value = {sweatpants} onChange= {e=> setSweatPants(e.target.value)}/>
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