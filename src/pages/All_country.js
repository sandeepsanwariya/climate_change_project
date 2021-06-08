import React from 'react'
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';

function All_country() {
    
    const {fname} =useParams();
    console.log(fname);
    useEffect(() => {
      
        const script = document.createElement('script');
      
        script.src = "assets/all.js";
        script.type="text/javascript";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
          }
        
      },);
    return (<>
    <h1>Country- <span id="c_name">{fname}</span></h1>
        <div>

        
             <div id="map_all" style = {{height:'700px',width:"100%"}}></div>
             
        </div>
        <div className="slidecontainer">
            
        <input type="range" min="0" max="143.7"  step="0.3"   style={{width: "30em"}}  className="slider" id="range"/>
        <p>Year: <span id="demo"></span></p>
      </div>
      <button id="start">start</button><button id="pause">pause</button>
      
      </>
    )
}
export default All_country
