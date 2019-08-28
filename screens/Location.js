import React, {Component} from 'react'
import 
{
  AppRegistry,
  Text,
  StyleSheet,
  View,
  Dimensions,
} 
from 'react-native'
import MapView from 'react-native-maps'

let id=0

// const LATITUDE_DELTA=0.0922
// const LONGITUDE_DELTA=LATITUDE_DELTA * ASPECT_RATIO
export default class Location extends Component{ 
    constructor(props){
        super(props);
      let watchID=  navigator.geolocation.watchPosition((position)=>{
            this.setState({
                markers:[
                    ...this.state.markers, {
                        coordinate:position.coords,
                        key:id++
                    }
                ]
            }, null, {distanceFilter:10})
        });
        this.state={
            markers:[],
            watchID,
            initialPosition:{
                latitude:0,
                longitude:0,
                latitudeDelta:0,
                longitudeDelta:0
            }
        };
        // setInterval(()=>{
        //     this.distanceInfo.setState({value:Maths.random()*100})
        //     this.speedInfo.setState({value:Math.random()*15})
        //     this.directionInfo.setState({
        //         value:this.directionInfo.state === 'N'? 'NW':'N'
        //     })
        // },1000)
    }
    componentDidMount (){
        navigator.geolocation.getCurrentPosition((position)=>{
          var lat =parseFloat(position.coords.latitude)
          var long =parseFloat(position.coords.longitude)
    
          var initialRegion ={
            latitude:lat,
            longitude:long,
            latitudeDelta:LATITUDE_DELTA,
            longitudeDelta:LONGITUDE_DELTA
          }
          this.setState({initialPosition:initialRegion})
          this.setState({markers:initialRegion}) 
        }, (error)=>alert(JSON.stringify(error)),
           {enableHighAccuracy:true, timeout:20000, maximumAge:1000})
           this.state.watchID=navigator.geolocation.watchPosition((position)=>{
            var lat =parseFloat(position.coords.latitude)
            var long =parseFloat(position.coords.longitude)
      
            var lastRegion ={
              latitude:lat,
              longitude:long,
              latitudeDelta:LATITUDE_DELTA,
              longitudeDelta:LONGITUDE_DELTA
            }
            this.setState({initialPosition:lastRegion})
            this.setState({markers:lastRegion}) 
           })
           }

  componentWillUnmount(){
      navigator.geolocation.clearWatch(this.state.watchID)
  }
    
  render(){
    return(
      <View style={{flex:1}}>
        <MapView style={styles.map}
        showsUserLocation
        followsUserLocation>
        <MapView.Polyline 
            coordinates={this.state.markers.map((marker)=>marker.coordinate)} 
            strokeWidth={2}
            />
            {this.state.markers.map((marker)=>(
            <MapView.Marker coordinate={marker.coordinate} key={marker.key}/>
            ))}
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

AppRegistry.registerComponent('Geolocation', () => Geolocation)
