import React from "react";
import './style.css';
import Ad from "./ad";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCommentsDollar } from "@fortawesome/free-solid-svg-icons";


const Ads = () =>{

    const ads = [
        { ad_img : "https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=600"},
        { ad_img : "https://images.pexels.com/photos/14122593/pexels-photo-14122593.jpeg?auto=compress&cs=tinysrgb&w=600"},
        { ad_img : "https://images.pexels.com/photos/14678998/pexels-photo-14678998.jpeg?auto=compress&cs=tinysrgb&w=600"},
        { ad_img : "https://images.pexels.com/photos/8951408/pexels-photo-8951408.jpeg?auto=compress&cs=tinysrgb&w=600"},
        { ad_img : "https://images.pexels.com/photos/3185509/pexels-photo-3185509.png?auto=compress&cs=tinysrgb&w=600"}
    ]

    return(
        <>
           <h3 className="titre"><FontAwesomeIcon icon={faCommentsDollar} />Ads</h3>
            <div className="ads">
             
            {

            ads.map((ad) => (
                <Ad data={ad}/>
            ))

            }
                

            </div>
        
        </>
    )





}


export default Ads;