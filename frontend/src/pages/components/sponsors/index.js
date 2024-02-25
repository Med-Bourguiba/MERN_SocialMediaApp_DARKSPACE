import React from "react";
import './style.css';
import Ad from "./sponsor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBullhorn } from "@fortawesome/free-solid-svg-icons";


const Sponsors = () =>{

    const sponsors = [
        { ad_img : "https://images.pexels.com/photos/14533601/pexels-photo-14533601.jpeg?auto=compress&cs=tinysrgb&w=600"},
        { ad_img : "https://images.pexels.com/photos/9696019/pexels-photo-9696019.jpeg?auto=compress&cs=tinysrgb&w=600"},
        { ad_img : "https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=600"},
        { ad_img : "https://images.pexels.com/photos/14785828/pexels-photo-14785828.jpeg?auto=compress&cs=tinysrgb&w=600"},
        { ad_img : "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600"}
    ]

    return(
        <>
           <h3 className="titre"><FontAwesomeIcon icon={faBullhorn} /> Sponsors</h3>
            <div className="sponsors">
             
            {

            sponsors.map((sponsor) => (
                <Ad data={sponsor}/>
            ))

            }
                

            </div>
        
        </>
    )





}


export default Sponsors;