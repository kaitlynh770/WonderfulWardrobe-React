import React from 'react';
class FashionStyle extends React.Component{
    render(){
        var fontStyling = {
            fontFamily: 'GaeguBold',
            paddingBottom: "1.5vw",
            paddingTop: "1.5vw",
            fontSize: '2vw',
            alignText: 'center',
            justifyContent: 'center',
            paddingLeft: '35vw'
        }
        return(
            <div style = {fontStyling}>
                Tell us your wardrobe details! :)
            </div>
            // <div className = "App" style = {fontStyling}>
            //     <input style = {fontStyling} type="radio" value="Preppy" name="style" /> Preppy
            //     <input style = {fontStyling} type="radio" value="Casual" name="style" /> Casuals
            //     <input style = {fontStyling} type="radio" value="Comfy" name="style" /> Comfy
            //     <input style = {fontStyling} type="radio" value="Elegant" name="style" /> Elegant
            // </div>
        );
    }

}
export default FashionStyle;