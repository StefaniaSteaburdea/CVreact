import React from 'react';
const sayHello=()=>{
   console.log("sayHello");
};
function App(){
  return(
     <div>
       <h1>Steaburdea Stefania</h1>
       <button onClick={ sayHello}> Hello</button>
     </div>
  );
}
export default App;