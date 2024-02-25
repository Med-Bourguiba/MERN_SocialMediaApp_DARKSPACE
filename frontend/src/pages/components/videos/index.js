import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFilm } from "@fortawesome/free-solid-svg-icons";
import Video from "./video";


const Videos = () =>{

    const videos = [
        { ad_img : "https://cdn.pixabay.com/vimeo/724732238/times-square-121994.mp4?width=720&hash=827595af8816006713f2497b25f2ce67f79bb0ec"},
        { ad_img : "https://cdn.pixabay.com/vimeo/888131647/trees-190444.mp4?width=720&hash=cff33273eb4f8bbc0d14622909dcbc64fbd92b17"},
        { ad_img : "https://player.vimeo.com/external/552752091.sd.mp4?s=f9d3b56ff27fdc770850e6e2973aae8c779f4f4f&profile_id=165&oauth2_token_id=57447761"},



    ]

    return(
        <>
           <h3 className="titre"><FontAwesomeIcon icon={faFilm} /> Reels</h3>
            <div className="videos">
             
            {

            videos.map((video) => (
                <Video data={video}/>
            ))

            }
                

            </div>
        
        </>
    )





}


export default Videos;