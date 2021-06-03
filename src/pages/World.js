import React from 'react'
import {useEffect} from 'react'
//import "./world.css"
function World() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "assets/mapping.js";
        script.type="text/javascript";
        //script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
          }
        
      },);
    return (<>
        <div>
             <div id="map" style = {{height:'700px',width:"110%"}}></div>
             
        </div>
        <div className="slidecontainer">
        <input type="range" min="0" max="143.7"  step="0.3" value="0"   style={{width: "30em"}}  className="slider" id="range"/>
        <p>Year: <span id="demo"></span></p>
      </div>
      <button id="start">start</button><button id="pause">pause</button>
      </>
    )
}

export default World
