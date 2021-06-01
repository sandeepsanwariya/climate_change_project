import React from 'react'
import {useEffect} from 'react'

function UAEMap() {
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "assets/uae.js";
        script.type="text/javascript";
        //script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
          }
        
      }, []);
    return (

        <div>
            <div id="uae_map" style = {{height:'90vh',width:"100%",maxHeight: "120%"}}></div>
        </div>
    )
}

export default UAEMap
