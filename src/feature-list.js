import React from "react";
import RegisterForm from "./register-form/RegisterForm";
// import ProfilePage from "./profile-page"

// // Navigation (temp)
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createDrawerNavigator } from "@react-navigation/drawer";

// const AuthStack = createStackNavigator();
// const AuthStackScreen = () => (
//   <AuthStack.Navigator>
//     <AuthStack.Screen
//       name="SignIn"
//       component={RegisterForm}
//       options={{ title: "Sign In" }}
//     />
//     {/* <AuthStack.Screen
//       name="CreateAccount"
//       component={ProfilePage}
//       options={{ title: "Create Account" }}
//     /> */}
//   </AuthStack.Navigator>
// );


export const FEATURES = [
  
  {
    name: "Register Form",
    component: <RegisterForm />,
  },
  // {
  //   name: "Profile",
  //   component: <ProfilePage/>,
  // }
];
