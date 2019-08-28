import React, { Component } from 'react'
import {Dimensions} from 'react-native'
import DatePicker from 'react-native-datepicker'


const {height,width} = Dimensions.get('window')
export default class MyDatePicker extends Component {
  constructor(props){
    super(props)
    this.state = {date:""}
  }
 
  render(){
    return (
      <DatePicker
        style={{width: 0.7*width,borderWidth:1,borderColor:'cornflowerblue',alignSelf:'center',borderRadius:10,right:8,textAlign:'left'}}
        date={this.state.date}
        mode="date"
        placeholder="Please select date"
        format="YYYY-MM-DD"
        minDate="2019-01-01"
        maxDate="2019-12-31"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36,
            
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}