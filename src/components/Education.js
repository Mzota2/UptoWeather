import React from "react";
import storm from '../images/storm.jpg';
import lightening from '../images/lightening.jpg';
import floods from '../images/floods.jpg';
import tornado from '../images/tornado.jpg';
import cyclone from '../images/cyclone.jpg';

import temperature from '../images/temperature.jpg';
import humidity from '../images/humidity.jpg';
import pressure from '../images/pressure.jpg';
import wind from '../images/wind.jpg';

export default function Education(){
    return(
        <div>
            <nav className="hm--text">
                <h2 style={{marginTop:30}}>Lessons About Weather</h2>
            </nav>
            
            <div className="ed--weather--components--container">
                <div>
                    <h3 className="ed--agenda">Weather Components</h3>
                    <hr className="hr2"/>

                </div>
                
                <div className="weather--components">
                    <div className="class ed--temperature">
                        <img className="lessonImage" src={temperature} />
                        <h4 className="ed--lesson--title">Temperature</h4>

                    </div>

                    <div className="class ed--humidity">
                        <img className="lessonImage" src={humidity} />
                        <h4 className="ed--lesson--title">Humidity</h4>

                    </div>

                    <div className="class ed--wind">
                        <img className="lessonImage" src={wind}/>
                        <h4 className="ed--lesson--title">Wind</h4>

                    </div>

                    <div className="class pressure">
                        <img className="lessonImage" src={pressure}/>
                        <h4 className="ed--lesson--title">Pressure</h4>

                    </div>


                </div>
                <i class="ed--more fas fa-caret-down"></i>

                <div>
                    <h3 className="ed--agenda">Severe Weather conditions</h3>
                    <hr className="hr2"/>

                </div>

               
                <div className="weather--conditions">
                    <div className="class ed--floods">
                        <img className="lessonImage" src={floods}/>
                        <h4 className="ed--lesson--title">Floods</h4>

                    </div>

                    <div className="class ed--cyclone">
                        <img className="lessonImage" src={cyclone} />
                        <h4 className="ed--lesson--title">Cyclone</h4>

                    </div>

                    <div className="class ed--tornado">
                        <img className="lessonImage" src={tornado} />
                        <h4 className="ed--lesson--title">Tornado</h4>

                    </div>

                    <div className="class ed--lightening">
                        <img className="lessonImage" src={lightening} />
                        <h4 className="ed--lesson--title">Lightening strikes</h4>

                    </div>

                    <div className="class ed--storm">
                        <img className="lessonImage" src={storm}/>
                        <h4 className="ed--lesson--title">Storms</h4>

                    </div>

                </div>
                <i class="ed--more fas fa-caret-down"></i>

            </div>
            <hr className="hr"/>
            <div className="footer">
                <h4 className="item_1">©Mzota2022 UptoWeather. All rights reserved </h4>
                <p className="item_2">Terms of Use| Privacy Policy|Cookie Policy|Tag Disclosure</p>

            </div>
            
        </div>
    )
}