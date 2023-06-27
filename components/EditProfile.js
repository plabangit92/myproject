import React from "react";
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity,Image } from "react-native";


export default function EditProfile() {
  return (
    
  
    <View style={{flex: 1,backgroundColor: '#183057'}}>
     <View style={{alignItems: "center", justifyContent: "center"}} >
    <Image source={require('../uploads/mpm.png')} style={{width:100,height:100}}/>
    </View>
    <View style={{flex: 4, marginTop: 40,backgroundColor: '#183057', borderTopLeftRadius:30,borderTopRightRadius:30}} >
   <TextInput style={{paddingLeft:20,height: 50,marginLeft:30,marginTop:50,marginRight:30, width:'auto',backgroundColor:'#fff',borderColor:'#006666',borderWidth:2,borderRadius:50}}
      placeholder="Phone Number"
     />
      <TextInput style={{paddingLeft:20,height: 50,marginLeft:30,marginTop:5,marginRight:30, width:'auto',backgroundColor:'#fff',borderColor:'#006666',borderWidth:2,borderRadius:50}}
      placeholder="First Name"
     />
      <TextInput style={{paddingLeft:20,height: 50,marginLeft:30,marginTop:5,marginRight:30, width:'auto',backgroundColor:'#fff',borderColor:'#006666',borderWidth:2,borderRadius:50}}
      placeholder="Last Name"
     />
      <TextInput style={{paddingLeft:20,height: 50,marginLeft:30,marginTop:5,marginRight:30, width:'auto',backgroundColor:'#fff',borderColor:'#006666',borderWidth:2,borderRadius:50}}
      placeholder="Address"
     />
      <TextInput style={{paddingLeft:20,height: 50,marginLeft:30,marginTop:5,marginRight:30, width:'auto',backgroundColor:'#fff',borderColor:'#006666',borderWidth:2,borderRadius:50}}
      placeholder="Area"
     />
      <TextInput style={{paddingLeft:20,height: 50,marginLeft:30,marginTop:5,marginRight:30, width:'auto',backgroundColor:'#fff',borderColor:'#006666',borderWidth:2,borderRadius:50}}
      placeholder="City"
     />
     
    </View>
      
    </View>
    
  
  );
}
