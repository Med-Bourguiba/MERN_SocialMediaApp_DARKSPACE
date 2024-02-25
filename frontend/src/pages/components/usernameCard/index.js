import React from "react";
import "./style.css";


const UsernameCard = (props) => {
    return(
        <>
            <div className="username_card">
                <div className="username_card_image">
                    {props.user.picture === "" ?
                    ( <img src="https://images.pexels.com/photos/4061551/pexels-photo-4061551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>)
                    :( <img src="https://images.pexels.com/photos/14819524/pexels-photo-14819524.jpeg"/>
                    )}

                </div>
                <div className="username_card_info">
                    <h3 className="username"> {'Saif '+props.user.lastname}</h3>
                    <span className="small">@{props.user.firstname+' '+props.user.lastname}</span>

                </div>
            </div>
        </>
    );
};


export default UsernameCard;