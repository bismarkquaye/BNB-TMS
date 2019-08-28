import React,{Component } from 'react'
import {View, Text, StyleSheet,Image} from 'react-native'
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/Entypo'
import Available from './screens/Available'
import Search from './search/Search'
import Booking from './screens/Booking'
import BookingHead from './headers/BookingHead'
import Location from './screens/Location'
import Payment from './screens/Payment'
import PaymentHead from './headers/PaymentHead'
import Splash from './screens/Splash';
import Signup from './screens/Signup'

class TicketScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>ThirdScreen</Text>
            </View>
        )
    }
}
const HomeStack = createStackNavigator({
  SearchPane: {
    screen: Search,
    navigationOptions: () => ({
      title: 'BNB Welcomes You',
    
      headerStyle: {
        backgroundColor: 'cornflowerblue',
      },
      headerTintColor: '#fff',
    }),
  },
  Schedule: {
    screen: Available,
    navigationOptions: () => ({
      title: 'Available Buses',
      
      headerStyle: {
        backgroundColor: '#1081E0',
      },
      headerTintColor: '#fff',
    }),
  },
  BookingPage: {
    screen: Booking,
    navigationOptions: () => ({
      title: 'Booking Details',
      headerLeft:<BookingHead/>,
      headerStyle: {
        backgroundColor: 'cornflowerblue',
      },
      headerTintColor: '#fff',
    }),
  },
  PaymentPage: {
    screen: Payment,
    navigationOptions: () => ({
      title: 'Payment',
      headerLeft:<PaymentHead/>,
      headerStyle: {
        backgroundColor: 'cornflowerblue',
      },
      headerTintColor: '#fff',
    }),
  }
})
const Switch= createSwitchNavigator({
  Splash: {screen: Splash},
  Signup:{screen:Signup,
    navigationOptions: () => ({
      title: 'SignUp',
      headerStyle: {
        backgroundColor: 'cornflowerblue',
      },
      headerTintColor: '#fff',
    })
  },
  Main:{screen: HomeStack}

})
export default createMaterialBottomTabNavigator({
  
    First:{
        screen:Switch,
        navigationOptions:{
            tabBarLabel:'Home',
            tabBarIcon:({tintColor})=>(
            <Icon name='home' color={tintColor} size={25}/>
            )
        }
},
    Second:{screen:Available,
            navigationOptions:{
                tabBarLabel:'My Search',
                tabBarIcon:({tintColor})=>(
                <Icon name='paper-plane' color={tintColor} size={25}/>
             )
            }
    },
    Third:{screen:TicketScreen,
           navigationOptions:{
               tabBarLabel:'My ticket',
               tabBarIcon:({tintColor})=>(
            <Icon name='ticket' color={tintColor} size={25}/>
               )
           }
    },
    Fourth:{screen:Location,
        navigationOptions:{
            tabBarLabel:'Location',
            tabBarIcon:({tintColor})=>(
         <Icon name='location' color={tintColor} size={25}/>
            )
        }
 }
},
{
    initialRouteName:'First',
    order:['First','Second','Third','Fourth'],
    activeTintColor:'white'
})



const styles=StyleSheet.create({
    container:{
        flex:1,
    }
})