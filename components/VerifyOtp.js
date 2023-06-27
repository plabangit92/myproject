// Aboutscreen.js
import React, { Component } from "react";
import {Button, View, Text, TextInput, StyleSheet, TouchableOpacity,Image } from "react-native";
export default function VerifyOtp({navigation}) {
  return (
    <View
    style={[
      styles.container,
      {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
      },
    ]}>
    <View style={{flex: 1,alignItems: "center", justifyContent: "center", marginTop: 40, position:'relative'}} >
    <Image source={require('../uploads/mpm.png')} style={{}}/>
    
        <Text style={{textAlign:'center', fontSize: 28,fontWeight:900,color:'#183057',}}>Mysore Pride Members</Text>
        <Text style={{textAlign:'center',fontSize:24,fontWeight:900}}>Welcome!</Text>
    </View>
    <View style={{flex: 2, marginTop: 40,backgroundColor: '#183057', borderTopLeftRadius:30,borderTopRightRadius:30}} >
   <TextInput style={{paddingLeft:20,height: 50,marginLeft:30,marginTop:50,marginRight:30, width:'auto',backgroundColor:'#fff',borderColor:'#006666',borderWidth:2,borderRadius:50}}
      placeholder="Enter OTP"
     />
     <TouchableOpacity style={{marginLeft:70,marginRight:70,paddingTop:15}}>
    <Button
      title="Verify OTP"
      onPress={() => navigation.navigate("Edit Profile")}
    />
    </TouchableOpacity>
    </View>
  </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});