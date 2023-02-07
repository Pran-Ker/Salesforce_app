import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import RegisterForm from "./register-form/RegisterForm";
import Form from "./register-form/Form-2";

// import ProfilePage from "./profile-page"

const Stack = createNativeStackNavigator();

function list() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="RegisterForm" component={RegisterForm} />
            <Stack.Screen name="Form" component={Form} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default list;

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




