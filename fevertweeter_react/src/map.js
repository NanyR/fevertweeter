import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

const PointsComponent= (locations)=>{

}

export default class Map extends Component {

  constructor(props){
    super()

  }


  render(){
    return(
      <div id="map" className="col-md-6">
        <GoogleMapReact
        defaultCenter={this.props.center}>
          {this.props.locations.map((location)=>{
            console.log(location)
          })}
        </GoogleMapReact>
      </div>
    )
  }


}
