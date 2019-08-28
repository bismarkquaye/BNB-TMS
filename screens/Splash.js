import React,{Component} from 'react'
import {Image,Text,View,Dimensions} from 'react-native'

const {height,width} = Dimensions.get('window')
export default class Splash extends Component{

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Signup')
        }, 8000)
    }

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image style={{flex:1,width:width,height:height}} source={require('../images/iPhoneX.png')}/>
            </View>
        )
    }
}

    
   