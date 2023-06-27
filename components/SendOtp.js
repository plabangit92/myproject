import React from "react";
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity,Image } from "react-native";

export default function SendOtp({ navigation }) {
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
    <Image source={require('../uploads/mpm.png')} style={{}}/>
    </View>
    <View>
        <Text style={{textAlign:'center', fontSize: 28,fontWeight:900,color:'#183057',}}>Mysore Pride Members</Text>
        <Text style={{textAlign:'center',fontSize:24,fontWeight:900}}>Welcome!</Text>
    </View>
    <View style={{flex: 4, marginTop: 40,backgroundColor: '#183057', borderTopLeftRadius:30,borderTopRightRadius:30}} >
   <TextInput style={{paddingLeft:20,height: 50,marginLeft:30,marginTop:50,marginRight:30, width:'auto',backgroundColor:'#fff',borderColor:'#006666',borderWidth:2,borderRadius:50}}
      placeholder="Enter Mobile Number"
     />
     <TouchableOpacity style={{marginLeft:70,marginRight:70,paddingTop:15}}>
    <Button
      title="Send OTP"
      onPress={() => navigation.navigate("VerifyOtp")}
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