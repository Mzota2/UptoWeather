import React from "react";

export default function Contact(){
    return(
        <div>
            <nav className="hm--text ct--contact">
                <h2 style={{boxShadowBottom:1}}>Contact Us</h2>
            </nav>

            <div className="ct--dedicated--container">
                <h3 className="ct--dedicated">We are dedicated to provide you<br/>with the accurate weather updates</h3>
            </div>

            <div className="ct--donate--container">
                <h3 className="ct--donate">Feel free to donate<br/>so we keep providing you<br/>with the weather updates</h3>
                <button className="ct--donate--btn">Donate</button>
            </div>

            <div className="ct--find--container">
                <div className="ct--get--intouch--container">
                    <h3 className=" ct--find ct--get--intouch">Get In Touch</h3>
                    <hr className="hr3"/>
                    <hr className="hr3"/>
                    <hr className="hr3"/>
                </div>
                <div className="ct--find ct--fb--container">
                    <p className="ct--fb">Facebook</p>
                    <i class="ct--social fab fa-facebook-f"></i>

                </div>
                <div className="ct--find ct--insta--container">
                    <p className="ct--insta">Instagram</p>
                    <i class="ct--social fab fa-instagram"></i>
                    
                </div>
                <div className="ct--find ct--twitter--container">
                    <p className="ct--twitter">Twitter</p>
                    <i class="ct--social fab fa-twitter"></i>
                    
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