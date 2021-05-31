import React, { Component } from 'react'

export default class World extends Component {
    render() {
        return (
            <div>
                <div id="map" style = {{height:'600px',width:"100%",maxHeight: "120%"}}></div>
            </div>
        )
    }
}

