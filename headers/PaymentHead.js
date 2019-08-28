import React, {Component} from 'react'
import {View,Image} from 'react-native'

export default class PaymentHead extends Component {
    render() {
   
      return (
   
        <View style={{flexDirection: 'row'}}>
   
          <Image
            source={require('../images/wallet.png')}
            style={{ width: 40, height: 40, marginLeft: 15}}
          />
   
        </View>
      
      );
    
    
    }
  }
   