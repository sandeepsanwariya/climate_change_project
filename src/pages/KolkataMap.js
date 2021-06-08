import React from 'react'
import {useEffect} from 'react'

function KolkataMap() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "assets/kolkata.js";
        script.type="text/javascript";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
          }
        
      }, );
    return (<>
        <div>
            <div id="kolkata_map" style = {{height:'90vh',width:"100%",maxHeight: "120%"}}></div>
        </div>
        <div className="slidecontainerf">
        <input type="range" min="0" max="143.7" step="0.3" value="0"  style={{width: "30em"}}  className="slider" id="range"/>
        <p>Year: <span id="demo"></span></p>
        <button id="start">start</button><button id="pause">pause</button>
      </div></>
    )
}

export default KolkataMap
