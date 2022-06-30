import React from "react";
import districtInfo from "./districtData";
import CurrentForecast from "./CurrentForecast";
import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";


export default function Forecast(){
    const [infoDistrict, setInfoDistrict] = React.useState(districtInfo);
    const [weatherData , setWeatherData] = React.useState([]); 
    const [currentData , setCurrentData] = React.useState([]);
    const [hourlyData , setHourlyData] = React.useState([]);
    const [dailyData , setDailyData] = React.useState([]);
    const [dailyDataset , setDailyDataSet] = React.useState();
    const [clicked , setClicked] = React.useState(false);
 
    const [searchCity, setSearchCity] = React.useState({
        city:' '
    });
    const [location , setLocation] = React.useState({
        latitude:-15.7861,
        longitude:35.0058,
        district:'Blantyre'
    })
    const [districtData , setDistrictData] = React.useState();

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
                ...prevData,
                [name]:value
            }
        })

    }

    function checkForecast(e){
        if(e.target.textContent === 'Current Forecast'){
            setClicked(false);
            setWeatherData(currentData);
        }
        else if(e.target.textContent === 'Hourly Forecast'){
            setClicked(true);
            setWeatherData(hourlyData);
        }
        else if(e.target.textContent === 'Daily Forecast'){
            setClicked(true);
            setWeatherData(dailyDataset);
           
        }

    }
    function setZero(value){
        let stringify = value.toString();
        if(stringify.length == 1){
            value = '0'+value;
            return value;
        }else{
            return value;
        }
    }

    React.useEffect(()=>{
        //mapping over district data;
        const  data = infoDistrict.map((info)=>{
              //making api calls
              function handleClick(){
                setLocation(prevData =>{
                    return{
                        ...prevData,
                        latitude:info.lat,
                        longitude:info.lon,
                        district:info.district
                    }
                })

              }
              const district = info.district;
              const latitude = info.lat;
              const longitude = info.lon;

              return(
                <div className="ns--citycity">
                    <button className="ns-citybtn" onClick={handleClick}>{info.district}</button>
                </div>
              )
            })
       
        const apiKey ='8d4b3d525f87647e0dcbb2ca2a50eb0a';
        //`https://api.openweathermap.org/data/3.0/onecall?q="Lilongwe"&exclude={current}&appid=${apiKey}`
        const weatherApi =`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=&appid=${apiKey}&units=metric`;
        fetch(weatherApi)
        .then((response)=>{ return response.json()})
        .then((response)=>{
            let result = response;
            console.log(response);
            //current weather
            const {temp , humidity , pressure} = result.current;
            const [{description , icon}] = result.current.weather;
            const windSpeed = result = result.current.wind_speed;

            const monthsArry = ['Jan','Feb','Mar','Apr','May','Jun','Jul' ,'Aug', 'Sept' , 'Oct' , 'Nov' , 'Dec'];
            const datesArray = [1,2,3,4,5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth();
            
            setCurrentData(prevData =>{
                
                return{
                    ...prevData,
                    temperature:temp,
                    humidity:humidity,
                    pressure:pressure,
                    windSpeed:windSpeed,
                    description:description,
                    iconImage:"https://openweathermap.org/img/wn/" +icon+".png",
                    timeDate: day +' '+monthsArry[month]
                }
                
            })


            //daily forecast 
           

            //what does mmalawi ungonenani;//marist

            const dailyData=response.daily;
            const dailyD=dailyData.map((data)=>{
                const date = data.dt;
                const temperatureD = data.temp.max;
                const pressureD = data.pressure;
                const windSpeedD = data.pressure;
                const humidityD = data.humidity;
              
                
            
              
                if (day === 32 && month === 0){
                    day =1;
                    month = month+1;
                 }else if((day === 30 && month ===1) || (day ===32 && month ===2) || (day===31 && month ===3)|| (day===32 && month ===4) || (day == 31 && month === 5) || (day ===32 && month ===6) || (day=== 32 && month ===7) || (day ===31 && month === 8) || (day ===32 && month ===9) || (day === 31 && month === 10) || (day === 32 && month === 11) ){
                     month = month + 1;
                    day = 1;
                  

                 }
                {day = day + 1;}
                 
               
              
               
               
               
                return(
                    <div className="fc--main--container">
                         <p className="fc--location--value value_1">{
                            monthsArry.reduce((prevValue , currentValue)=>{
                                
                                const fullDate = `${setZero(day-1)} ${monthsArry[month]}`;
                                
                                return fullDate;
                            })
                         }</p>
                         
       
                        <p className="fc--temperature--value value_2">{temperatureD}°C</p>


                        <p className="fc--humidity--value value_3">{humidityD}g/m3</p>


                        <p className="fc--pressure--value value_4">{pressureD}mb</p>


                        <p className="fc--wind--value value_5">{windSpeedD}m/s</p>
                    </div>
                )
            })
            setDailyDataSet(dailyD);
            let hour = date.getHours();

            //hourly forecast
            const hourlyData = response.hourly.map((data)=>{
                const temperatureH = data.temp;
                const pressureH = data.pressure;
                const windSpeedH = data.pressure;
                const humidityH = data.humidity;

                function checkPm(value){
                    if(value >=12 && value <=23){
                        return value = `${value} PM`;
                    }else{
    
                       return value = `${value} AM`;
                    }
                }

              
                  if(hour ===24){
                    hour = 0;
                  }

                 
                hour = hour + 1;
                
                return(
                   
                    <div className="fc--main--container">
                    <p className="fc--location--value value_1">{
                       monthsArry.reduce((prevValue , currentValue)=>{
                           
                           const fullDate = `${checkPm(hour-1)}`;
                           
                           return fullDate;
                       })
                    }</p>
                    
  
                   <p className="fc--temperature--value value_2">{temperatureH}°C</p>


                   <p className="fc--humidity--value value_3">{humidityH}g/m3</p>


                   <p className="fc--pressure--value value_4">{pressureH}mb</p>


                   <p className="fc--wind--value value_5">{windSpeedH}m/s</p>
               </div>

                   
                )
               
            })
            setHourlyData(hourlyData);
          

            
        })
        setDistrictData(data);
       

    } , [location])


    return(
        <div >
            <div className="fc--container">
            <nav className="hm--text2">
                <h3 onClick={checkForecast} className="fc--item">Current Forecast
                    <hr className="line"/>
                </h3>
                <h3 onClick={checkForecast} className="fc--item">Hourly Forecast<hr className="line"/></h3>
                <h3 onClick={checkForecast} className="fc--item">Daily Forecast<hr className="line"/></h3>

                <h3 className="fc--item"><input onClick={searchLocation} onChange={handleChange} name="city" className="fc--search--location" placeholder="search" value={searchCity.city} type ='text' /> </h3>
            </nav>
            <div className="fc--forecast">
                    <h3>Hourly Forecast</h3>
                    <hr className="hr_1"/>
                    <hr className="hr_2"/>
                    <hr className="hr_3"/>
            </div>
            <div className="fc--container2">
            <div className="fc--main--container">
                    <h4 className="fc--location data_1">Location</h4>
                    <p className="fc--location--value value_1 fc--icon">{location.district}</p>
                   
    
                    <h4 className="fc--temperature data_2">Temperature</h4>
                    <i class="fc--icon fas fa-thermometer-full"></i>
    
                    <h4 className="fc--humidity data_3">Humidity</h4>
                    <i class="fc--icon fa-solid fa-droplet"></i>
                    
    
                    <h4 className="fc--pressure data_4">Pressure</h4>
                    <i class="fc--icon fas fa-compress-arrows-alt"></i>
                   
    
                    <h4 className="fc--wind data_5">Wind Speed</h4>
                    <i class="fc--icon fas fa-wind"></i>
                    
                    
                </div>
               
                {clicked?weatherData:<div className="fc--main--container">
      
                    <p className="fc--location--value value_1">{currentData.timeDate}</p>

                    <p className="fc--temperature--value value_2">{currentData.temperature}°C</p>

                    <p className="fc--humidity--value value_3">{currentData.humidity}g/m3</p>

                    <p className="fc--pressure--value value_4">{currentData.pressure}mb</p>

                    <p className="fc--wind--value value_5">{currentData.windSpeed}m/s</p>
        
                </div>}
            <div className="ns--citybtn--container">
                {districtData}
            
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