import React from 'react'
import {useEffect} from 'react'

function HaitiMap() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "assets/haiti.js";
        script.type="text/javascript";
        //script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
          }
        
      }, []);
    return (
        <div>
            <div id="haiti_map" style = {{height:'90vh',width:"100%",maxHeight: "120%"}}></div>
        </div>
    )
}

export default HaitiMap
