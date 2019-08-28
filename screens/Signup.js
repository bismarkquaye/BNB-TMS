import React,{Component} from 'react'
import {View,TextInput,Dimensions} from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { Fumi } from 'react-native-textinput-effects';
import Button from 'react-native-button'

const {width,height}=Dimensions.get('window')


export default class Signup extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{marginBottom:0.15*height}}>
                <Fumi
                label={'Full Name'}
                iconClass={FontAwesomeIcon}
                iconName={'user'}
                iconColor={'cornflowerblue'}
                iconSize={20}
                iconWidth={40}
                inputStyle={{color:'#1081E0'}}
                iconContainerStyle={{ backgroundColor:'cornflowerblue' }}
                inputPadding={16}
                />
                <Fumi
                label={'Phone Number'}
                iconClass={FontAwesomeIcon}
                iconName={'phone'}
                iconColor={'cornflowerblue'}
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                inputStyle={{color:'#1081E0'}}
                iconContainerStyle={{ backgroundColor:'cornflowerblue' }}

                />
                <Fumi
                label={'Email'}
                iconClass={EntypoIcon}
                iconName={'mail'}
                iconColor={'cornflowerblue'}
                iconContainerStyle={{ backgroundColor:'cornflowerblue' }}
                iconSize={20}
                iconWidth={40}
                inputPadding={16}
                inputStyle={{color:'#1081E0'}}
                />
                </View>
                <Button onPress={()=>this.props.navigation.navigate('Main')} style={{width:0.60*width,padding:10,borderRadius:15, color:'white',backgroundColor:'cornflowerblue',alignSelf:'center'}}>Submit</Button>

            </View>
        )
    }
}