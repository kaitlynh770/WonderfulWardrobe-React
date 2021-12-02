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
            
        );
    }

}
export default FashionStyle;