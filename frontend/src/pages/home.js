import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import UsernameCard from "./components/usernameCard";
import Sidebar from "./components/sidebar";
import Stories from "./components/stories";
import Requests from "./components/requests";
import Posts from "./components/posts";
import Ads from "./components/ads";
import Sponsors from "./components/sponsors";
import Videos from "./components/videos";


const Home = () => {

    const [connectedUser, setConnectedUser] = useState({})
    const navigate = useNavigate()

    const getConnectedUserData = () =>{

        setConnectedUser(JSON.parse(localStorage.getItem('user_data')))
        console.log(localStorage.getItem('user_data'));

        if(localStorage.getItem('user_data') === null){
            // user not connected 
            // redirection vers home page
            navigate('/')

        }             //NB: c'est la methode la plus simple pour protéger du route mais il ya d'autre methode plus performante avec Redux
    }

    useEffect( () =>{
        getConnectedUserData();
    } )


    return(
        <div>
            <Navbar user={connectedUser}/>
            <div className="layout-app">

                {/*left-box */}
                <div style={{width:"25%"}}>
                    <UsernameCard  user={connectedUser}/>
                    <Sidebar/>
                    <Ads />
                    <Videos />
                </div>

                {/*medium-box */}
                <div style={{width:"49%"}}>
                <Stories/>
                <Posts/>
                </div>

                {/*right-box */}
                <div style={{width:"25%"}}>
                    <Requests/>
                    <Sponsors />
                    <Ads />
                </div>

            </div>
            
        </div>
    )

}



export default Home;