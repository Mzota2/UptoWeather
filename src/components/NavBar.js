import React from "react";
import logo from '../images/logo.png';
import {NavLink} from 'react-router-dom';

export default function NavComponent(){
    return(
        <div>
            <nav className="nav--container">
            </nav>

            <nav className="nav--container1">
            </nav>
            <nav className="hm--header">
                <nav className="nav--container2">
                    <h3><img src={logo}/></h3>
                    <nav className="menu--items">
                        <div className="nv--deco--lines">
                            <hr className="hrd_1"/>
                            <hr className="hrd_2"/>
                            <hr className="hrd_3"/>
                            <hr className="hrd_4"/>
                        
                        </div>
                        <li><NavLink className='link' to='/UptoWeather/'>Home <i class="nav--more fas fa-caret-down"></i></NavLink></li>
                        <li><NavLink className='link' to='/news'>Alerts <i class="nav--more fas fa-caret-down"></i></NavLink></li>
                        <li><NavLink className='link' to='/forecast'>Forecast <i class="nav--more fas fa-caret-down"></i> </NavLink></li>
                        <li><NavLink className='link' to='/education'>Education <i class="nav--more fas fa-caret-down"></i></NavLink></li>
                        <li><NavLink className='link' to='/contact'>Contact <i class="nav--more fas fa-caret-down"></i></NavLink></li>

                        <div className="nv--deco--lines"> 
                            <hr className="hrde_4"/>
                            <hr className="hrde_3"/>
                            <hr className="hrde_2"/>
                            <hr className="hrde_1"/>
                        
                        </div>
                    </nav>
                </nav>
               

            </nav>
           

        </div>
    )
}