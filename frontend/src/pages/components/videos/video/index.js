import React from "react";
import './style.css';


const Video = (props) =>{
    const {data} =props;

    return(
        <>
            <div className="vid">
             
               <video autoPlay muted loop>
                <source src={data.ad_img}  type="video/mp4"/>
               </video>

 
            </div>
        
        </>
    )





}


export default Video;