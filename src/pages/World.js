import React from 'react'
import {useEffect} from 'react'

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
    return (
        <div>
             <div id="map" style = {{height:'700px',width:"110%"}}></div>
        </div>
    )
}

export default World
