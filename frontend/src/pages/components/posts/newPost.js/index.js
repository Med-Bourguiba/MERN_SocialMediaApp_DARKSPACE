import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";



const NewPost = () =>{

   
    return(
        <>
            <div className="newpost">

                <div className="newpost-details">
                    <div className="newpost-profil-image">
                        <img src="https://images.pexels.com/photos/4061551/pexels-photo-4061551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
                    </div>

                    <div className="newpost-textbox">
                        <textarea placeholder="What's on your mind, Mohamed?"></textarea>
                    </div>

                </div>
                <div className="newpost-button">
                    <button>
                        <FontAwesomeIcon icon={faShare}/> Post it!
                    </button>
                </div>

              

            </div> 
        
        </>
    )

}
export default NewPost;