import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import GoogleMapReact from 'google-map-react'
import Map from './map'

const Tweets=(props)=>{
  return (
    <div id="tweets" className="col-md-6">
    </div>
  )
}

class App extends Component {
  constructor(){
    super()
    this.state={
      loaded:false,
      locations: [],
      points: [],
      currentLocation: null
    }
  }

  fluData(){
    return (axios
      .get('http://192.168.2.135:3000/flutrack')
    )
  }

  currentLocation(){
  return new Promise(function(resolve, reject) {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        let uluru = {lat:position.coords.latitude , lng:position.coords.longitude}
        resolve(uluru)
      }, function(decline){
        let uluru = {lat:40.705123, lng:-74.014081}
        resolve(uluru)
      })
    }
  })
  }

//   mapData(){
//     this.currentLocation().then((currentLocation)=>{
//     let map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 13,
//       center: currentLocation,
//       mapTypeId: 'satellite'
//     })
//   })
// }

  getLocations(fluData, currentLocation){
    let locations = fluData.data.map((d)=>{
      let distance= this.getDistance(d.longitude, d.latitude, currentLocation.lng, currentLocation.lat)
      return [d.latitude, d.longitude, d.tweet_text, d.user_name, distance, d.tweet_date] //+distance
    })
    return locations
  }

  getPoints(coords){
      // var coordinates = coords.map((loc)=>{
      //   return new google.maps.LatLng(loc[0], loc[1])
      // })
      // return coordinates
    }


  getDistance(lon1, lat1, lon2, lat2) {
    var R = 6371; // Radius of the earth in km
    var dLat = ((lat2-lat1)*Math.PI/180)  // Javascript functions in radians
    var dLon = ((lon2-lon1)*Math.PI/180)
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos((lat1*Math.PI/180)) * Math.cos((lat2*Math.PI/180)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    var distance = d * 0.62137 // convert to miles
    return Math.round(distance * 100) / 100 //return rounded number
  }

  componentDidMount(){
    Promise.all([this.fluData(), this.currentLocation()])
    .then(([fluData, currentLocation])=>{
      let locations=this.getLocations(fluData, currentLocation)

      this.setState({
        loaded:true,
        currentLocation:currentLocation,
        locations:locations,
        zoom:13
      })
    })
  }

  renderMap(){
    return(
      <Map
        center={this.state.currentLocation}
        locations={this.state.locations}
        zoom={this.state.zoom}
      />
    )
  }

  render() {
    return (
      <div className="container">
          <h1>FEVER_TWEETER</h1>
          {this.state.loaded ? this.renderMap() : "this is loading"}

          <Tweets />
      </div>
    );
  }
}

export default App;
