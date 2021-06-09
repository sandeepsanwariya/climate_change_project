import React from 'react'
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

function All_country() {
  const {fname} =useParams()
  console.log("all coonty",fname);
    useEffect(() => {
      
        const script = document.createElement('script');
      
        script.src = "assets/all.js";
        script.type="text/javascript";
        script.async = true;
        document.body.appendChild(script);
        
            document.body.removeChild(script);
          
        
      },);
      
          
    

    return (<>
    <h1><span id="con_name" >{fname}</span> Sea Level Rise Map</h1>
    <div hidden>
      <h1 id="c_name">{fname}</h1>
    </div>


<p>See how the sea level is predicted to rise over the next 100 years in <span id="con_name2" >{fname}</span> as a result of climate change.</p>
        <div>

        
             <div id="map_all" style = {{height:'700px',width:"100%"}}></div>
             
        </div>
        <div className="slidecontainer">
            
        <input type="range" min="0" max="143.7"  step="0.3" defaultValue="0"  style={{width: "30em"}}  className="slider" id="range"/>
        <p>Year: <span id="demo"></span></p>
      </div>
      <button id="start">start</button><button id="pause">pause</button>
      
      </>
    )
}
export default All_country
