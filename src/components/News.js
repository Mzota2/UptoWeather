import React from "react";
import districtInfo from "./districtData";

export default function News(){
    const [weatherData , setWeatherData] = React.useState({});
    const [searchCity, setSearchCity] = React.useState({
        city:'Lilongwe'
    });
    const [location , setLocation] = React.useState({
        latitude:-15.7861,
        longitude:35.0058,
        district:'Blantyre'
      

    })
    const [districtData , setDistrictData] = React.useState();

  

    function handleChange(e){
        setSearchCity(prevData =>{
            const {name , value} = e.target;
            return{
                [name]:value
            }
        })
    }

    React.useEffect(()=>{
        //mapping over district data;
        const  data = districtInfo.map((info)=>{
              //making api calls

              function handleClick(){
                console.log(info.lat);

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
        const city ='Lilongwe';
        const apiKey2 ='3ce27ce0682b499d259641bb5d2b9e7c';
        const apiKey ='8d4b3d525f87647e0dcbb2ca2a50eb0a';
        //`https://api.openweathermap.org/data/3.0/onecall?q="Lilongwe"&exclude={current}&appid=${apiKey}`
        const weatherApi =`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&exclude=daily&appid=${apiKey}`;
        fetch(weatherApi)
        .then((response)=>{ return response.json()})
        .then((response)=>{
            const result = response;
            console.log(result);
           
           
        
            setWeatherData({
               

            })

        
        })
        setDistrictData(data);

        
      

    } , [location])
    return(
        <div >
             <nav className="hm--text">
                <h2 className="hm--alert">Todays Weather Alerts</h2>
                <p style={{marginTop:10}}>Select city to see alerts</p>
              
            </nav>
            <div className="ns--main--container">
            <div className="ns--container">
                <div className="ns--city--container">
                    <h3 >Location</h3>
                    <p className="ns--city">{location.district}</p>
                </div>

                <div className="ns--news--container">
                    <h3>Alert</h3>
                    <p className="alert--description">No Alert</p>
                </div>

            </div>
            <div>
                
            </div>

            <div className="ns--citybtn--container">
                {districtData}
            

            </div>

            </div>
            <br/>
            <hr className="hr"/>
            <div className="footer">
                <h4 className="item_1">©Mzota2022 UptoWeather. All rights reserved </h4>
                <p className="item_2">Terms of Use| Privacy Policy|Cookie Policy|Tag Disclosure</p>

            </div>

            
            
        </div>
    )
}