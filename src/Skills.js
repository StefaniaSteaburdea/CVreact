import React from 'react';
import "./Skills.css";
import { Link } from 'react-router-dom';
function Skills(){
  return(
     <div className="grid-container">
       <div className="grid2">
          <div className="blackBox">
            <h1 className="h1">Studies and Skills</h1>
            <Link to="/"><button className="buttons" > First page</button></Link>
            <Link to="/hobbies"><button className="buttons" > Hobbies and free time</button></Link>
          </div>
          <div className="patternBox">
          </div>
       </div>
       <div className="box">
           <h1 className="h11">Developped applications:</h1>
           <h2 className="p2">02.2021-05.2021 : Mobile Application in Flutter</h2>
           <p className="p2">I have built a Travel Application with one of my colleagues on which users can authenticate and make reservations to different hotels around the world. We used Flutter for frontend  and  Firebase for backend.</p>
           <h2 className="p2">04.2020-02.2021 : Desktop Java Application</h2>
           <p className="p2">I made a Java Fx application, an online Makeup Store,with one of my colleagues. For the frontend we used Scene Builder. </p>
           <h2 className="p2">09.2020-11.2020 : Web Application</h2>
           <p className="p2">I made a web application, a book store, using HTML, PHP and JavaScript. </p>
           <h1 className="h11">Education:</h1>
           <p className="p2">24.09.2018 - present: Automation and Computer Engineering, Politehnica University of Timisoara.</p>
           <h1 className="h11">Skills:</h1>
           <ul className="p2">
               <li> HTML</li>
               <li>PHP</li>
               <li>Java</li>
               <li>Team work</li>
               <li>Communication</li>
            </ul>
            <h1 className="h11">Languages:</h1>
            <ul className="p2">
                <li> English:B2</li>
                <li>German:A1</li>
            </ul>
        </div>
      </div>
  );
}
export default Skills;