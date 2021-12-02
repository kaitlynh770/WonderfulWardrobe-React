import React from 'react'

function DisplayWeather(props){
   // console.log("props",props);
   const { data } = props;
    return <div>
            <div>
                <span>
                    {data.name}, {data.sys.country}. Weather
                </span>
            </div>
    </div>;
}

export default DisplayWeather;