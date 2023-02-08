import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  BackHandler,
  Image,
  Text
} from "react-native";



import Constants from "expo-constants";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import RegisterForm from "./src/register-form/RegisterForm";
import Form from "./src/register-form/Form-2";
import Display from "./src/register-form/Display";

// import ProfilePage from "./profile-page"

const Stack = createNativeStackNavigator();

export default function App() {

    return (
      <SafeAreaView style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.icon} />
      <Text h4 style={styles.heading}>
        Aethereus
      </Text>
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="RegisterForm" component={RegisterForm} />
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="Display" component={Display} />
            </Stack.Navigator>
        </NavigationContainer>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  heading: {
    textAlign: "center",
    padding: 12,
  },
  title: {
    fontWeight: "bold",
  },
  icon: {
    position: 'absolute',
    top: 30,
    left: 50,
    zIndex: 999,
    width: 50,
    height: 50,
  },
});


// export const FEATURES = [
  
//   {
//     name: "Register Form",
//     component: <RegisterForm />,
//   },
//   // {
//   //   name: "Profile",
//   //   component: <ProfilePage/>,
//   // }
// ];




