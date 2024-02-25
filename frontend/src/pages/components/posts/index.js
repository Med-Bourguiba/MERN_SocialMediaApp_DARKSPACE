import React from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import Post from "./post";
import NewPost from "./newPost.js";



const Posts = () =>{
 
    const posts = [
        {
            username: "Mohamed Bourguiba",
            user_photo: "https://images.pexels.com/photos/3046636/pexels-photo-3046636.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: "2h ago",
            post_photo: "https://images.pexels.com/photos/1485894/pexels-photo-1485894.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Hello this is my first post !"
        },
        {
            username: "Nour Benali",
            user_photo: "https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: "4min ago",
            post_photo: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Sunrise yeah !"
        },
        {
            username: "Wassim Limem",
            user_photo: "https://images.pexels.com/photos/15422042/pexels-photo-15422042/free-photo-of-noir-et-blanc-homme-modele-visage.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: "23h ago",
            post_photo: "https://images.pexels.com/photos/10010406/pexels-photo-10010406.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Free palestine !"
        },
        {
            username: "Fatma Rais",
            user_photo: "https://images.pexels.com/photos/23010/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
            date: "7h ago",
            post_photo: "https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Like heaven bruh ;).."
        },
        {
            username: "Camilia Bernard",
            user_photo: "https://images.pexels.com/photos/2389349/pexels-photo-2389349.jpeg?auto=compress&cs=tinysrgb&w=600",
            date: "7h ago",
            post_photo: "https://images.pexels.com/photos/3220846/pexels-photo-3220846.jpeg?auto=compress&cs=tinysrgb&w=600",
            text: "Enjoying Londen Street..."
        }
    ]
   
    return(
        <>
            <div className="posts">
            <NewPost />
            {

            posts.map((post) => (
                <Post data={post}/>
            ))

            }

            </div> 
        
        </>
    )

}
export default Posts;