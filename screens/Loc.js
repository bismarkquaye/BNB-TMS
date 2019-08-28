import React from 'react';
//import react in our code.

import { View, Text, StyleSheet,  } from 'react-native';
//import all the components we are going to use.
import MapView from 'react-native-maps'

export default class Loc extends React.Component {
  state = {
    initialPosition:{
        currentLongitude: 'unknown', //Initial Longitude
        currentLatitude: 'unknown', //Initial Latitude
    },
    markerPosition:{
        currentLongitude: 'unknown', //Initial Longitude
        currentLatitude: 'unknown', //Initial Latitude
    }
  };
  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Longitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);
        //getting the Latitude from the location json
        const initialRegion={
            currentLongitude: currentLongitude, //Initial Longitude
            currentLatitude: currentLatitude, //Initial Latitude
        }
        this.setState({ initialPosition: initialRegion });
        //Setting state Longitude to re re-render the Longitude Text
        this.setState({ markerPosition: initialRegion });
        //Setting state Latitude to re re-render the Longitude Text
      },
      error => alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = navigator.geolocation.watchPosition(position => {
      //Will give you the location on location change
      console.log(position);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      //getting the Longitude from the location json
      const currentLatitude = JSON.stringify(position.coords.latitude);
      //getting the Latitude from the location json
      const lastRegion={
                currentLongitude: currentLongitude, //Initial Longitude
                currentLatitude:  currentLatitude, //Initial Latitude
    }
      this.setState({initialPosition: lastRegion});
      //Setting state Longitude to re re-render the Longitude Text
      this.setState({ markerPosition: lastRegion });
      //Setting state Latitude to re re-render the Longitude Text
    });
  };
  componentWillUnmount = () => {
    navigator.geolocation.clearWatch(this.watchID);
  };
  render() {
    return (

            <View style={{flex:1}}>
              <MapView style={styles.map}
              showsUserLocation
              followsUserLocation
              initialRegion={this.state.initialPosition}>

            <MapView.Marker coordinate={this.state.markerPosition}/>
                 
              </MapView>
            </View>
          )
        }
        
      }

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 122, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20 / 2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  }
})