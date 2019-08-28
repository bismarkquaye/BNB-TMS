import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight
} from 'react-native';

import ModalDropdown from 'react-native-modal-dropdown';

const Location = [
  {"name": "VIP Executive"},
  {"name": "VIP Standard"},
  {"name": "STC"},
  {"name": "Intercity"},
  
];

const {height,width} = Dimensions.get('window')

export default class Buses extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <ModalDropdown ref="dropdown_2"
                           style={styles.dropdown_2}
                           textStyle={styles.dropdown_2_text}
                           dropdownStyle={styles.dropdown_2_dropdown}
                           defaultValue={'Select Bus'}
                           options={Location}
                           renderButtonText={(rowData) => this.dropdown_2_renderButtonText(rowData)}
                           renderRow={this.dropdown_2_renderRow.bind(this)}
            />
          </View>
        </View>
      </View>
    );
  }
dropdown_2_renderButtonText(rowData) {
    const {name} = rowData;
    return `${name}`;
  }
dropdown_2_renderRow(rowData, rowID, highlighted) {
    let evenRow = rowID % 2;
    return (
      <TouchableHighlight underlayColor='cornflowerblue'>
        <View style={[styles.dropdown_2_row, {backgroundColor: evenRow ? 'lemonchiffon' : 'white'}]}>
          <Text style={[styles.dropdown_2_row_text, highlighted && {color: 'mediumaquamarine'}]}>
            {`${rowData.name}`}
          </Text>
        </View>
      </TouchableHighlight>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
      marginBottom:25
    // flex: 1,
  },
  row: {
    // flex: 1,
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
  },
  contentContainer: {
    height: 500,
    paddingVertical: 100,
    paddingLeft: 20,
  },
  textButton: {
    // color: 'deepskyblue',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'deepskyblue',
    margin: 2,
  },
  dropdown_2: {
    alignSelf: 'center',
    width: 0.7*width,
    marginTop: 32,
    right: 8,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'cornflowerblue',
  },
  dropdown_2_text: {
    marginVertical: 10,
    marginHorizontal: 6,
    fontSize: 18,
    color: 'cornflowerblue',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  dropdown_2_dropdown: {
    width: 0.7*width,
    height: 300,
    borderColor: 'cornflowerblue',
    borderWidth: 2,
    borderRadius: 3,
  },
  dropdown_2_row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  dropdown_2_image: {
    marginLeft: 4,
    width: 30,
    height: 30,
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: 'navy',
    textAlignVertical: 'center',
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: 'cornflowerblue',
  },
 
});

AppRegistry.registerComponent('Destination', () => Destination);
