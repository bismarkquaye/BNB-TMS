import React, {Component} from 'react';
import {StyleSheet, Text,Dimensions, Image,View,TouchableOpacity,FlatList,Picker} from 'react-native';
import Button from 'react-native-button'
import Modal from 'react-native-modalbox'
import { CheckBox } from 'react-native-elements'

const {height,width} = Dimensions.get('window')

export default class Available extends Component {
    state={
        checked1:false,
        checked2:false,
        From:'VIP CIRCLE',
        To:'KUMASI',
        date:'',
      quotes:[
         {
          id: 'GHC 80',
          quote_id: "ML-00029",
          type: "VIP Circle Express",
          author: "vip premium",
          quote:'4:00pm',
          created_at: "2018-12-09 22:35:37",
          urt: require('../images/bus.png'),
          updated_at: "2018-12-09 23:29:03",
          pic: require('../images/bus.png'),

        },
        {
          id: 'GHC 90',
          quote_id: "ML-00029",
          type: "VIP Circle Express",
          author: "vip premium",
          quote:'4:00pm',
          created_at: "2018-12-09 22:35:37",
          urt: require('../images/bus.jpeg'),
          updated_at: "2018-12-09 23:29:03",
          pic: require('../images/bus.png'),

        },
        {
            id: 'GHC 100',
            quote_id: "ML-00029",
            type: "VIP Circle Express",
            author: "vip premium",
            quote:'4:00pm',
            created_at: "2018-12-09 22:35:37",
            urt: require('../images/ab.jpg'),
            updated_at: "2018-12-09 23:29:03",
            pic: require('../images/bus.png'),
  
          },
          {
            id: 'GHC 110',
            quote_id: "ML-00029",
            type: "VIP Circle Express",
            author: "vip premium",
            quote:'4:00pm',
            created_at: "2018-12-09 22:35:37",
            urt: require('../images/bus.jpeg'),
            updated_at: "2018-12-09 23:29:03",
            pic: require('../images/bus.png'),
  
          }
         
        
      ],
    }
    updateFrom=(text)=>{
        this.setState({From:text})
    }
    updateFrom=(text)=>{
        this.setState({To:text})
    }
  //   Checker1=()=>{
  //     this.setState({
  //       checked1:!this.state.checked1,
  //     })
  //     this.setState({
  //       checked2:true
  //     })
      
  // }
  //   Checker2(){
  //   this.setState({
  //     checked2:!this.state.checked2,
  //     checked1:true
  //   })
    
    

    componentDidMount() {
        setInterval( () => {
            this.setState({
              date : new Date().toLocaleString()
            })
          },1000)
      }
     
  
  FlatListItemSeparator = () => {
    return (
      <View style={{
         height: 1,
         width:"100%",
         backgroundColor:"rgba(0,0,0,0.5)",
    }}
    />
    )}
    
  
  renderItem=({item,index})=>
    <TouchableOpacity style={styles.list}>
          <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
              <View style={{marginRight:0.02*width}}>
                  <Image source={item.urt} style={{width:70,height:70,borderRadius:400/2}}/>
              </View>
              <View style={{marginRight:0.015*width}}>
                  <Text style={{fontSize:17,fontWeight:'bold'}}>{item.type}</Text>
                  <Text style={{fontSize:13.,marginTop:3,marginBottom:5}}>{item.author}</Text>
                  <Text style={{fontSize:13,marginBottom:8,}}>{item.quote} - 8:30pm | 04h30mins</Text>
                  <Button onPress={() =>this.refs.modal4.open()} style={styles.btn}>Book</Button>
                  
              </View>
              <View style={{marginTop:20}}>
                <Text style={{fontSize:17,fontWeight:'bold'}}>{item.id}</Text>
                <Image source={item.pic} style={{width:50,height:50,alignSelf:"center"}}/>
              </View>
          </View>
          
    </TouchableOpacity>
  
 

  render(){
    // if(this.state.loading){
    //   return( 
    //     <View style={styles.loader}> 
    //       <ActivityIndicator size="large" color="#0c9"/>
    //     </View>
    // )}
    // const {quotes} = this.state
    const {checked1,checked2}=this.state
    
    return (
      <View style={styles.container}>
          <View style={{height:.3*height,backgroundColor:'cornflowerblue',justifyContent:'center',alignItems:'center'}}>
                <View style={{display:'flex',flexDirection:'row'}}>
                    <View>
                        <Image source={require('../images/arrow.png')}/>
                    </View>
                    <View style={{marginRight:0.05*width,marginLeft:0.05*width,marginBottom:50}}>
                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                            <Text style={{color:'#ffff',textAlign:'center',lineHeight:18,marginRight:1}}>From</Text>
                            <Text style={{color:'#ffff',textAlign:'center',lineHeight:30,fontWeight:'bold'}}>{this.state.From}</Text>
                        </View>
                        <View style={{borderBottomWidth:1,borderColor:'#ffff',width:0.5*width,marginTop:3,marginBottom:3}}/>
                        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                            <Text style={{color:'#ffff',textAlign:'center',lineHeight:18,marginRight:1}}>To</Text>
                            <Text style={{color:'#ffff',textAlign:'center',lineHeight:30,fontWeight:'bold'}}>{this.state.To}</Text>
                        </View>
                    </View>
                    <View>
                        <Image source={require('../images/ElipV.png')}/>
                    </View>
                </View>
                <View style={{justifyContent:'flex-end',}}>
                    {/* <Text style={{color:'#ffff',textAlignVertical:'bottom',fontWeight:'bold'}}>{this.state.date}</Text> */}
                    <Button style={{color:'#ffff'}}>{this.state.date}</Button>
                </View>
                
          </View>
        <FlatList
            data= {this.state.quotes}
            ItemSeparatorComponent = {this.FlatListItemSeparator}
            renderItem= {(item)=>this.renderItem(item)}
            keyExtractor= {(item)=>item.id.toString()}
        />
        <Modal style={[styles.modal, styles.modal2]} backdrop={true}  position={"center"} ref={"modal4"}>
            <Text style={ {color: "#1081E0",fontWeight:'bold',marginTop:10,textAlign:'center', fontSize:18}}>Choose who you want 
            to Purchase for</Text>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                <View>
                    <CheckBox
                        left
                        title='Self'
                        fontSize={18}
                        fontWeight={'bold'}
                        size={45}
                        checkedIcon='stop'
                        checkedColor='cornflowerblue'
                        checked={this.state.checked1}
                        onPress={()=>this.setState({checked1:!checked1,checked2:false})}/>
                        
                    <CheckBox
                        left
                        title='Another Person'
                        fontSize={18}
                        fontWeight={'bold'}
                        size={45}
                        checked={this.state.checked2}
                        checkedIcon='stop'
                        checkedColor='cornflowerblue'
                        onPress={()=>this.setState({checked2:!checked2,checked1:false})}/>

                </View>
                <View style={{justifyContent:'flex-end'}}>
                    <Button onPress={()=>this.props.navigation.navigate('BookingPage')} style={styles.botn}>Proceed</Button>
                </View>
            </View>
            
        </Modal>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  input:{
    borderWidth:1,
    width:200,
    padding:10,
    margin:15

  },
  list:{
    paddingVertical:4 ,
    margin: 5,
    backgroundColor: "#fff"
   },
   btn:{
       textAlign:'center',
       backgroundColor:'cornflowerblue',
       width:0.2*width,
       borderRadius:10,
       height:0.05*height,
       color:'#ffff',
       textAlignVertical:'center'
    },
    modal: {
        
      },
    
      modal2: {
        height: 230,
        backgroundColor: "#ffff"
      },
      botn:{
          color:'#fff',
          textAlignVertical:'center',
          backgroundColor:'#1081E0',
          width:0.30*width,
          height:0.1*height, 
          alignSelf:'flex-end',
          borderTopLeftRadius: 15,
          borderBottomLeftRadius: 15}
});
