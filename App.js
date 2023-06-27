// App.js
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SendOtp from "./components/SendOtp";
import VerifyOtp from "./components/VerifyOtp";
import Welcome from "./components/Welcome";
import EditProfile from "./components/EditProfile";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
      <Stack.Screen options={{headerShown: false}} name="Welcome" component={Welcome} />
        <Stack.Screen options={{headerShown: false}} name="SendOtp" component={SendOtp} />
        <Stack.Screen options={{headerShown: false}} name="VerifyOtp" component={VerifyOtp} />
        <Stack.Screen name="Edit Profile" component={EditProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}