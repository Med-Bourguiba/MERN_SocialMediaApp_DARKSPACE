import React from "react";
import './style.css';


const Ad = (props) =>{
    const {data} =props;

    return(
        <>
            <div className="ad">
             
                <img src={data.ad_img}/>

 
            </div>
        
        </>
    )





}


export default Ad;