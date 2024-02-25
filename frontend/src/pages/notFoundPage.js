import React from "react";
import { Link } from 'react-router-dom'


const NotFoundPage = () => {

    return(
       
        <div className="page-404">
          <div className="not-found-container">
             <div className="not-found-content">
                
                <h1>Oops! Page Not Found</h1>
                <div className="not-found-image"></div>
                <p>It seems like you've stumbled upon a missing page.</p>
                <p>Let's get you back on track!</p>
                <Link to="/home" className="home-link-404">
                <button className="home-button-404">Go to Home</button>
                </Link>
              
             </div>
         </div>
        </div>                  
       
        
    );
}


export default NotFoundPage;