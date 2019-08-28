import React, {Component} from 'react'
import {View,StyleSheet,ImageBackground,Dimensions} from 'react-native'
import backg from '../images/backg.png'
import Button from 'react-native-button'
import From from './From'
import Destination from './Destination';
import MyDatePicker from './DatePicker';
import Buses from './Buses'

const {height,width} = Dimensions.get('window')
export default class Search extends Component{
    render(){
        return(
            <ImageBackground source={backg} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={styles.pane}>
                    <From/>
                    <Destination/>
                    <Buses/>
                    <MyDatePicker/>
                </View>
                <Button onPress={()=>this.props.navigation.navigate('Schedule')} style={{width:0.40*width,padding:10,borderRadius:15, color:'white',backgroundColor:'cornflowerblue',alignSelf:'center'}}>Search Buses</Button>
            </ImageBackground>
        )
    }
} 
const styles=StyleSheet.create({
    pane:{
     display:'flex',
     flexDirection:'column',
        width:0.8*width,
        height:0.5*height,
        borderColor:'cornflowerblue',
        borderWidth:1,
        borderRadius:15,
        backgroundColor:'white',
        marginBottom:20
    }
})