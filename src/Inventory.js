import React from 'react';
import Wardrobe from './Wardrobe.js';

// function preppyOutfit(props) {
//     let { preppyStyle } = props;
//     if (preppyStyle > 76 && Blouse > 0 && Skirts > 0) 
//     {
//         return <div> You should wear a blouse and skirt today </div>;
//     } 
//     else 
//     {
//         return <div> No outfit combinations, time to go shopping! </div>;
//     }

//   }

class Inventory extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            shirts: 0,
            sweaters: 0,
            tanktops: 0,
            blouses: 0,
            cardigans: 0,
            skirts: 0,
            shorts: 0,
            jeans: 0,
            wweatpants: 0,
            dresses: 0
        };
    }
    updateInput(key, value){ //value will take on an new item every time a user adds that to an input, function called everytime onChange is ran 
        this.setState({
            [key]: value
        });
    }
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
                            <input type="number" name="Shirts" min = "0"  max = "10" value = {this.state.shirts} onChange= {e=> this.updateInput("shirts", e.target.value)}/>
                        </label> 
                        <label style = {spacingBetween}>
                            Sweaters:
                            <input type="number" name="Sweaters" min = "0" max = "10" value = {this.state.sweaters} onChange= {e=> this.updateInput("sweaters", e.target.value)} />
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