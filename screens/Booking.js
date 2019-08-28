import React, {Component} from 'react'
import {View,TextInput,Dimensions} from 'react-native'
import { Kaede } from 'react-native-textinput-effects';
import Button from 'react-native-button'

const {width,height}=Dimensions.get('window')

export default class Booking extends Component{
    render(){
        return(
                <View>
                    <View style={{marginBottom:0.2*width}}>
                        <Kaede
                        label={'Full Name'}
                        inputPadding={16}
                        inputStyle={{ color: 'cornflowerblue' }}
                        labelStyle={{ color: 'white',backgroundColor:'cornflowerblue' }}
                        />
                        <Kaede
                        label={'SMS Notification Number'}
                        inputPadding={16}
                        inputStyle={{ color: 'cornflowerblue' }}
                        labelStyle={{ color: 'white',backgroundColor:'cornflowerblue' }}
                        />
                        <Kaede
                        label={'Emergency Contact Name'}
                        inputPadding={16}
                        inputStyle={{ color: 'cornflowerblue' }}
                        labelStyle={{ color: 'white',backgroundColor:'cornflowerblue' }}
                        />
                        <Kaede
                        label={'Emergency Contact Number'}
                        inputPadding={16}
                        inputStyle={{ color: 'cornflowerblue' }}
                        labelStyle={{ color: 'white',backgroundColor:'cornflowerblue' }}
                        />
                    </View>
                     <Button onPress={()=>this.props.navigation.navigate('PaymentPage')} style={{width:0.60*width,padding:10,borderRadius:15, color:'white',backgroundColor:'cornflowerblue',alignSelf:'center'}}>Submit</Button>
                                          
                </View>
        )
    }
}
