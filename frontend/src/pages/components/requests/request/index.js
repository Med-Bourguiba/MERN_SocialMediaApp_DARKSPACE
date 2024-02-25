import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";


const Request = (props) =>{

    const {data} = props;

    return(
        <>
            <div className="request">

               <div  className="request-details">
                    <img className="user_image" src={data.profile_image} alt=""/>
                    <p>
                      <b>{data.username}</b> want to add you to friends.
                    </p>  
               </div>

               <div className="request-answers">
                    <button className="accept-button">Accept</button>
                    <button className="decline-button">Decline</button>
               </div>

            </div>
        
        </>
    )


}


export default Request;