import React from 'react';
import "./Skills.js";
import { Link } from 'react-router-dom';
function Hobbies(){
    return(
      <div className="background">
      <div className="grid-container">
        <div className="grid2">
           <div className="blackBox">
             <h1 className="h1">Hobbies and free time</h1>
             <Link to="/"><button className="buttons" > First page</button></Link>
             <Link to="/skills"><button className="buttons" >Studies and Skills </button></Link>
           </div>
           <div className="patternBox">
           </div>
        </div>
        <div className="boxH">
            
            <h1 className="h11">Drawing and painting:</h1>
            <div className="photoBox">
            <img src={process.env.PUBLIC_URL+"/resources/img11.jpeg"} alt="image"></img>
            <img src={process.env.PUBLIC_URL+"/resources/img12.jpeg"} alt="image"></img>
            <img src={process.env.PUBLIC_URL+"/resources/img13.jpeg"} alt="image"></img>
              <img src={process.env.PUBLIC_URL+"/resources/img14.jpeg"} alt="image"></img>
              <img src={process.env.PUBLIC_URL+"/resources/img15.jpeg"} alt="image"></img>
              <img src={process.env.PUBLIC_URL+"/resources/img16.jpeg"} alt="image"></img>
            </div>
             <h1 className="h11">Travelling and photography:</h1>
             <div className="photoBox">
            <img src={process.env.PUBLIC_URL+"/resources/img21.jpeg"} alt="image"></img>
            <img src={process.env.PUBLIC_URL+"/resources/img22.jpeg"} alt="image"></img>
            <img src={process.env.PUBLIC_URL+"/resources/img23.jpeg"} alt="image"></img>
              <img src={process.env.PUBLIC_URL+"/resources/img24.JPG"} alt="image"></img>
              <img src={process.env.PUBLIC_URL+"/resources/img25.JPG"} alt="image"></img>
              <img src={process.env.PUBLIC_URL+"/resources/img26.jpeg"} alt="image"></img>
             </div>
         </div>
       </div>
       <div className="box"> </div>
       </div>
 );
}
export default Hobbies;