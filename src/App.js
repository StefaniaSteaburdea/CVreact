import React from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import "./App.css";
import Hobbies from './Hobbies';
import Skills from './Skills';

const Info=()=>(
  <div className="grid-container1">
       
  <div className="blackBox1">
  <h1 className="name">Steaburdea Stefania</h1>
  <Link to="/skills"><button className="buttons" > Studies and skills</button></Link>
  <Link to="/hobbies"><button className="buttons" > Hobbies and free time</button></Link>
  <div className="bottom">
  <h2 className="h2">Contact :</h2>
  <p className="p">Email:stefania.steaburdea@gmail.com</p>
  <p className="p">Phone number: 0764380660</p>
  <p className="p">Facebook: www.facebook.com/stefania.steaburdea/</p>
  <p className="p">Github: github.com/StefaniaSteaburdea</p>
  <p className="p">Instagram: www.instagram.com/stefania.steaburdea/</p>
  </div>
  </div>
  <div className="patternBox1">
  </div>
</div>
);
function App(){
  return(
     <Router>
       <div>
         <Switch>
           <Route path="/" exact component={Info}/>
           <Route path="/skills" exact component={Skills}/>
           <Route path="/hobbies" exact component={Hobbies}/>
         </Switch>
       </div>
     </Router>
  );
}
export default App;