import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react'

class Marker extends Component{
  constructor(){
    super()
  }

  render(){
    return(
      <div>
        {this.props.showTweet ? <div className="tweet-marker">{this.props.tweet}</div> : <div className="point-marker" onClick={this.props.handleClick}></div>}
      </div>
    )
  }
}

export default class Map extends Component {

  constructor(props){
    super()
    this.state = {
      currentTweet: 0
    }
    // this.showTweet=this.showTweet.bind(this)
  }

  componentDidUpdate(){
    console.log("updated?")
  }

  showTweet(index, event){
    this.setState({
      currentTweet: index
    })
  }

  render(){
    return(
      <div id="map" className="col-md-6">
        <GoogleMapReact
          google={window.google}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{
            key: "AIzaSyAZUdN9Rs9Gn-jrJssTagyTJf4O50ygK2Q"
          }}>

          {this.props.locations.map(([latitude,longitude,tweet,user,distance,time], index)=>{
            let position={lat: latitude, lng: longitude};
            return (
              <Marker
                key={index}
                lat={latitude}
                lng={longitude}
                tweet={tweet}
                showTweet={(this.state.currentTweet === index)}
                handleClick={this.showTweet.bind(this, index)}
                icon={{
                  url: "http://www.iconninja.com/files/978/634/410/map-point-marker-pin-location-pointer-place-icon.png",
                }} />)
          })}
        </GoogleMapReact>
      </div>
    )
  }
}
