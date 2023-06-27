import React from "react";
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity,Image } from "react-native";

export default function Welcome({ navigation }) {
  return (
    
  
    <View
    style={[
      styles.container,
      {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: 'column',
      },
    ]}>
    <View style={{flex: 2,alignItems: "center", justifyContent: "center"}} >
    <Image source={require('../uploads/mpm.png')} style={{width:100,height:100}}/>
    </View>
    <View>
        <Text style={{textAlign:'center', fontSize: 28,fontWeight:900,color:'#183057'}}>Mysore Pride Members</Text>
       
    </View>
    <View style={{flex: 4, backgroundColor: '#183057', marginTop: 40,borderTopLeftRadius:30,borderTopRightRadius:30}} >
    <View style={{marginTop:50}}>
    <Text style={{marginLeft:50,fontSize:24,fontWeight:900,color:'#fff'}}>Welcome !</Text>
    <Text style={{marginLeft:50,fontSize:12,fontWeight:900,color:'#fff'}}>Get Started</Text>
    </View>
    <View>
   
     <TouchableOpacity style={{marginLeft:120,marginRight:50,paddingTop:15}}>
    <Button
      title="Sign in"
      onPress={() => navigation.navigate("SendOtp")}
    />
    </TouchableOpacity>
  
    </View>
    </View>
  </View>
    
  
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
  });