import React from "react";
import weather_0 from '../images/weather1.jpg';
import weather_1 from '../images/weather2.jpg';
import weather_2 from '../images/weather3.jpg';

export default function MainComponent(){
    const [imageNumber, setImageNumber] = React.useState(0);
    const [weatherData , setWeatherData] = React.useState({});
    const [searchCity, setSearchCity] = React.useState({
        city:''
    });
    const [buttonSearch , setButtonSearch] = React.useState('London');
    //background image array
    console.log(buttonSearch);
  

    function handleChange(e){
        setSearchCity(prevData =>{
            const {name , value} = e.target;
            return{
                [name]:value
            }
        })
    }

    function handleSearch(){
        setButtonSearch(searchCity.city);

    }
    function defaultCities(e){
        const cityName = e.target.textContent;
        setButtonSearch(cityName);
    }

    const imagesArray = [
        weather_0,
        weather_1,
        weather_2
    ]
 
        

    React.useEffect(()=>{
        const randomNumber = Math.floor(Math.random()* 3);
        setImageNumber(randomNumber);
        
        //making api calls
        const city ='london';
        const apiKey ='3ce27ce0682b499d259641bb5d2b9e7c';
        const weatherApi =`https://api.openweathermap.org/data/2.5/weather?q=${buttonSearch}&appid=${apiKey}&units=metric`;
        fetch(weatherApi)
        .then((response)=>{ return response.json()})
        .then((response)=>{
            const result = response;
            const names = result.name;
            const{temp, humidity, pressure} = result.main;
            const {lat, lon}= result.coord;
            const {speed} = result.wind;
            const [{description, icon}] = result.weather;
           
           
            console.log(response);
            setWeatherData({
                temperature:temp,
                humidity:humidity,
                pressure:pressure,
                latitude:lat,
                longitude:lon,
                description:description,
                icon:"https://openweathermap.org/img/wn/" +icon+".png",
                wind:speed,
                name:names

            })

        
        })

    } , [buttonSearch])

    return (
        <div className="weather--container">
           

        </div>
    )
}