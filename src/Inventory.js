import React from 'react';
import Wardrobe from './Wardrobe.js';

function preppyOutfit(props) {
    let { preppyStyle } = props;
    if (preppyStyle > 76 && Blouse > 0 && Skirts > 0) 
    {
        return <div> You should wear a blouse and skirt today </div>;
    } 
    else 
    {
        return <div> No outfit combinations, time to go shopping! </div>;
    }

  }

class Inventory extends React.Component{
    render(){

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
                            <input type="number" name="Shirts" min = "0" max = "10"/>
                        </label> 
                        <label style = {spacingBetween}>
                            Sweaters:
                            <input type="number" name="Sweaters" min = "0" max = "10" />
                        </label>
                        <label style = {spacingBetween}>
                            Tank Tops:
                            <input type="number" name="Tank Tops" min = "0" max = "10"/>
                        </label>
                        <label style = {spacingBetween}>
                            Blouses:
                        <input type="number" name="Blouses" min = "0" max = "10"/>
                        </label>
                        <label style = {spacingBetween}>
                            Cardigans:
                            <input type="number" name="Cardigans" min = "0" max = "10" />
                        </label>
                    </div>
                    <div style = {spaceBetweenButtons}>
                        <label style = {spacingBetween}>
                            Skirts:
                            <input type="number" name="Skirts" min = "0" max = "10"/>
                        </label>
                        <label style = {spacingBetween}>
                            Shorts:
                            <input type="number" name="Shorts" min = "0" max = "10"/>
                        </label>
                        <label style = {spacingBetween}>
                            Jeans:
                            <input type="number" name="Jeans" min = "0" max = "10" />
                        </label>
                        <label style = {spacingBetween}>
                            Sweatpants:
                            <input type="number" name="Sweatpants" min = "0" max = "10"/>
                        </label>
                        <label style = {spacingBetween}>
                            Dresses:
                            <input type="number" name="Dresses" min = "0" max = "10" />
                        </label>
                    </div>
                </form>
            </div>
        );
    
    }

}
export default Inventory;