import React from "react";
import districtInfo from "./districtData";
;

export default function Home(){
    const [infoDistrict, setInfoDistrict] = React.useState(districtInfo)
    const [weatherData , setWeatherData] = React.useState({});
    const [searchCity, setSearchCity] = React.useState({
        city:''
    });
    const [location , setLocation] = React.useState({
        latitude:-15.7861,
        longitude:35.0058,
        district:'Blantyre'
    })

    function searchLocation(){
        console.log(searchCity.city);
        let searchString = searchCity.city.toLowerCase();
        const dataSearch = infoDistrict.filter((value)=>{
            if(searchString.length){
                const lat= value.lat ;
                const long = value.lon;
                const searchData = value.district.toLowerCase()
                const regex1 = new RegExp(searchData , 'gim');
                if(searchString.match(regex1)){
                   setLocation(prevData=>{
                    return{
                        latitude:value.lat,
                        longitude:value.lon,
                        district:value.district

                    }
                   })
                    
                }
            }
        })

    }

  

    function handleChange(e){
        setSearchCity(prevData =>{
            const {name , value} = e.target;
            return{
                [name]:value
            }
        })
        console.log(searchCity.city)
    }

    React.useEffect(()=>{
        //making api calls
        const city ='Lilongwe';
        const apiKey ='8d4b3d525f87647e0dcbb2ca2a50eb0a';
        //`https://api.openweathermap.org/data/3.0/onecall?q="Lilongwe"&exclude={current}&appid=${apiKey}`
        const weatherApi =`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=&appid=${apiKey}&units=metric`;
        fetch(weatherApi)
        .then((response)=>{ return response.json()})
        .then((response)=>{
            const result = response.current;
            const names = result.name;
            const{temp, humidity, pressure} = result;
            const {wind_speed} = result;
            const [{description, icon}] = result.weather;
           
           
        
            setWeatherData({
                temperature:temp,
                humidity:humidity,
                pressure:pressure,
                description:description,
                icon:"https://openweathermap.org/img/wn/" +icon+".png",
                wind:wind_speed,
                name:location.district

            })

        
        })

    } , [searchCity])
    return(
        <div>
            <nav className="hm--text">
                <h3>Get the latest weather<br/>Updates and News<br/>from around Malawi.</h3>

            </nav>

            <div className="hm--weather--container">
                <div className="hm--weather">
                <input name="city" value={searchCity.city} onClick={searchLocation} onChange={handleChange} className="hm--city--input" type='text' placeholder="Search"/>
                <p onClick={searchLocation} className="hm--location--place">Location</p>

                </div>
               
                <div className="hm--malawiL--weatherData">
                    <div>
                    <h3 className="info_1">Current Location</h3>
                    <h3 className="info_2">{weatherData.name}</h3>
                    <p className="info_3">{weatherData.temperature}°C</p>
                    <h3 className="info_4">RealFeel {weatherData.temperature + 1}°C</h3>
                    <img src={weatherData.icon}/>
                    <h3 className="info_1">{weatherData.description}</h3>

                    </div>
                    

                </div>

            </div>
            <hr className="hr"/>
            <div className="footer">
                <h4 className="item_1">©Mzota2022 UptoWeather. All rights reserved </h4>
                <p className="item_2">Terms of Use| Privacy Policy|Cookie Policy|Tag Disclosure</p>

            </div>
            
        </div>
    )
}