import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPeoplePulling} from "@fortawesome/free-solid-svg-icons";
import Request from "./request";


const Requests = () =>{

    const requests = [
        {
            username: 'Aziz Chabaani',
            profile_image: 'https://images.pexels.com/photos/7711126/pexels-photo-7711126.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            username: 'Kylian Mbappé',
            profile_image: 'https://www.leparisien.fr/resizer/ziPwAIu6W4KvsijVINUY_erdNqw=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/42LF7AY63FFXVMOXPL7FYAXIB4.jpg'
        },
        {
            username: 'Claudia del Rey',
            profile_image: 'https://images.pexels.com/photos/11039284/pexels-photo-11039284.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ]

    return(
        <>
            <div className="requests">
               <div  className="request-title">
                    <h4><FontAwesomeIcon icon={faPeoplePulling} style={{fontSize:"19px",marginRight:"10px"}}/>Requests</h4>
                    <h4 className="request-number">3</h4>
               </div>
               
               {
                requests.map((request)=>(
                    <Request data={request}/>
                ))
                        
               }

            </div>
        
        </>
    )

}
export default Requests;