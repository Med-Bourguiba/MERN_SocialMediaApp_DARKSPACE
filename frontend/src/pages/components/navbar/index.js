import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPersonWalkingArrowLoopLeft,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


const Navbar = (props) =>{
    const navigate =useNavigate();

    const logout =() =>{

        localStorage.removeItem('user_data');
        localStorage.removeItem('token');
        navigate("/login");
    }

    return(
        <>
            <div className="navbar">
                <div className="navbar-left">
                <div className="navbar-left-logo"></div>
                    <b> <span style={{color:"black"}}>DARK</span>SPACE</b>
                </div>

                <div className="navbar-right">


                    <div className="navbar-profil-search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="small gray" />
                        <input type="text" placeholder="Search"/>
                    </div>

                    <button className="navbar-profil-button" onClick={logout}>
                    <FontAwesomeIcon icon={faPersonWalkingArrowLoopLeft} style={{marginRight:"2px"}}/> Logout
                    </button>

                    <div className="navbar-profil-image">
                    {props.user.picture === "" ?
                    ( <img src="https://images.pexels.com/photos/4061551/pexels-photo-4061551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>)
                    :( <img src="https://images.pexels.com/photos/14819524/pexels-photo-14819524.jpeg" alt=""/>
                    )}
                       
                    
                    </div>

                </div>


            </div>
        
        </>
    );


};


export default Navbar;