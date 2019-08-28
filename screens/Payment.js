import React, {Component} from 'react'
import {View,Image,Text,Dimensions,TouchableOpacity,StyleSheet,ScrollView,KeyboardAvoidingView} from 'react-native'
import { Jiro } from 'react-native-textinput-effects';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button'


const {width,height}=Dimensions.get('window')

export default class Payment extends Component {
    constructor(props){
        super(props)
        this.state={
        Price:"GHC 80",
        Bus:'VIP Circle Express'
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Text style={{marginTop:0.15*width, fontSize:20,fontWeight:'bold',textAlign:'center',flexWrap:'wrap'}}>Confirm your booking for {this.state.Bus}</Text>
                <Text style={{fontSize:25,textAlign:'center',fontWeight:'bold',color:'cornflowerblue',marginBottom:0.1*width}}>{this.state.Price}</Text>
                <Text style={{fontSize:20,textAlign:'center',fontWeight:'bold',color:'cornflowerblue'}}>Select Your Payment Option</Text>

                 <View style={{flexDirection:'row',justifyContent:'space-evenly',marginBottom:10}}>
                    <TouchableOpacity onPress={() => this.refs.modal4.open()} >
                        <Image source={require('../images/M1.jpg')} style={{width:80,height:80}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.refs.modal4.open()}>
                        <Image source={require('../images/M2.png')} style={{width:80,height:80}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.refs.modal4.open()}>
                        <Image source={require('../images/M3.png')} style={{width:80,height:80}}/>
                    </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
                    <TouchableOpacity onPress={() => this.refs.modal4.open()}>
                        <Image source={require('../images/M4.jpeg')} style={{width:80,height:80}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.refs.modal4.open()} >
                        <Image source={require('../images/M5.jpg')} style={{width:80,height:80}}/>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => this.refs.modal4.open()}>
                        <Image source={require('../images/M6.jpg')} style={{width:80,height:80}}/>
                    </TouchableOpacity>
                </View>
                <Modal style={styles.modal4} position={"bottom"} ref={"modal4"}
                    backdrop={true} backdropColor='cornflowerblue' backdropOpacity={0.7}>
                    <ScrollView keyboardDismissMode={'on-drag'}>

                      <View style={{justifyContent:'space-evenly'}}>
                        <Text style={{fontSize:18, fontWeight:'bold',color:'#1081E0'}}>Please enter your Payment details</Text>
                            <KeyboardAvoidingView behavior='padding' enabled style={{marginBottom:0.15*height}}>
                                <Jiro
                                        label={'Name as per Momo account'}
                                        // this is used as active and passive border color
                                        borderColor={'#1081E0'}
                                        borderHeight={3}
                                        labelStyle={{color:'cornflowerblue',fontSize:20,fontWeight:'bold'}}
                                        inputPadding={16}
                                        inputStyle={{ color: 'white' }}
                                    />
                                    <Jiro
                                        label={'Momo Number'}
                                        // this is used as active and passive border color
                                        borderColor={'#1081E0'}
                                        borderHeight={3}
                                        labelStyle={{color:'cornflowerblue',fontSize:20,fontWeight:'bold'}}
                                        inputPadding={16}
                                        inputStyle={{ color: 'white' }}
                                    />
                            </KeyboardAvoidingView>

                            <Button style={{width:0.60*width,padding:10,borderRadius:15, color:'white',backgroundColor:'cornflowerblue',alignSelf:'center'}}>Submit</Button>


                        </View>
                        
                        </ScrollView>
                </Modal>

        </View>
        )

    }
}
const styles = StyleSheet.create({
    modal4: {
        height: 0.7*height,
        width:width
    }
    
})