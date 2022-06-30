import React from "react";
export default function CurrentForecast(props){
    return(
    <div className="fc--main--container">
        <h4 className="fc--location data_1">Location</h4>
        <i class="fc--icon fas fa-city"></i>
        <p className="fc--location--value value_1">{props.location}</p>

        <h4 className="fc--temperature data_2">Temperature</h4>
        <i class="fc--icon fas fa-thermometer-full"></i>
        <p className="fc--temperature--value value_2">{props.temperature}</p>

        <h4 className="fc--humidity data_3">Humidity</h4>
        <i class="fc--icon fa-solid fa-droplet"></i>
        <p className="fc--humidity--value value_3">{props.humidity}</p>

        <h4 className="fc--pressure data_4">Pressure</h4>
        <i class="fc--icon fas fa-compress-arrows-alt"></i>
        <p className="fc--pressure--value value_4">{props.pressure}</p>

        <h4 className="fc--wind data_5">Wind Speed</h4>
        <i class="fc--icon fas fa-wind"></i>
        <p className="fc--wind--value value_5">{props.wind_speed}</p>
        
    </div>
    )
}