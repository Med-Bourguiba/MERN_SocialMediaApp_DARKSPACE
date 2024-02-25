import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore} from "@fortawesome/free-solid-svg-icons";
import Story from "./story";


const Stories = () =>{

    const stories = [
        {
            username: "Mohamed",
            user_photo: "https://images.pexels.com/photos/3046636/pexels-photo-3046636.jpeg?auto=compress&cs=tinysrgb&w=600",
            story_photo: "https://images.pexels.com/photos/4009630/pexels-photo-4009630.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            username: "Mariem",
            user_photo: "https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=600",
            story_photo: "https://images.pexels.com/photos/13785412/pexels-photo-13785412.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            username: "Aziz",
            user_photo: "https://images.pexels.com/photos/9117796/pexels-photo-9117796.jpeg?auto=compress&cs=tinysrgb&w=600",
            story_photo: "https://images.pexels.com/photos/4009595/pexels-photo-4009595.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
        {
            username: "Nadine",
            user_photo: "https://images.pexels.com/photos/2609925/pexels-photo-2609925.jpeg?auto=compress&cs=tinysrgb&w=600",
            story_photo: "https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
    ]

    return(
        <>
            <h3 className="list"><FontAwesomeIcon icon={faStore} /> Stories</h3>
            <div className="stories">
                
               <Story type="new"/>
               {

                stories.map((story) => (
                    <Story type="old" data={story}/>
                ))

               }

            </div>
        
        </>
    )


}


export default Stories;