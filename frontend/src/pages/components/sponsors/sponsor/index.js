import React from "react";
import './style.css';


const Sponsor = (props) =>{
    const {data} =props;

    return(
        <>
            <div className="sponsor">
             
                <img src={data.ad_img}/>

 
            </div>
        
        </>
    )





}


export default Sponsor;