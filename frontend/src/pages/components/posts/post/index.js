import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";



const Post = (props) =>{

   const {data} = props;
    return(
        <>
            <div className="post">

                <div className="post-user-details">
                    <div className="user-image">
                        <img src={data.user_photo}/>
                    </div>

                    <div className="user-name">
                        <h5>{data.username}</h5>
                        <span>{data.date}</span>
                    </div>

                </div>

                <div className="post-actions"></div>
                <div className="post-content-details">
                    <p>{data.text}</p>
                    <div className="post-photo"><img src={data.post_photo}/></div>
                    
                </div>
                <div className="post-buttons"></div>

            </div> 
        
        </>
    )

}
export default Post;