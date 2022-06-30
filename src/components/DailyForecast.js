import React from "react";
export default function DailyForecast(props){
     //getting dates

    
  

   
    return(
    <div className="fc--main--container">
       
        <p className="fc--location--value value_1">{props.date}</p>

        
       
        <p className="fc--temperature--value value_2">{props.temperature}</p>

       
        <p className="fc--humidity--value value_3">{props.humidity}</p>

     
        <p className="fc--pressure--value value_4">{props.pressure}</p>

     
        <p className="fc--wind--value value_5">{props.wind_speed}</p>
        

    </div>
    )
}