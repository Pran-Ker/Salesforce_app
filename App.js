import React, { useState, useEffect } from "react";
import {
  Image
} from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts } from '@use-expo/font';
import { Asset } from "expo-asset";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";

// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

import Screens from "./navigation/Screens";
import { Images, articles, argonTheme } from "./constants";

// cache app images
const assetImages = [
  Images.Onboarding,
  Images.LogoOnboarding,
  Images.Logo,
  Images.ArgonLogo,
  Images.iOSLogo,
  Images.androidLogo
];

articles.map(article => assetImages.push(article.image));

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
  export default props => {
    const [isLoadingComplete, setLoading] = useState(false);
    let [fontsLoaded] = useFonts({
      'ArgonExtra': require('./assets/font/argon.ttf'),
    });
  
    function _loadResourcesAsync() {
      return Promise.all([...cacheImages(assetImages)]);
    }
  
    function _handleLoadingError(error) {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(error);
    };
  
   function _handleFinishLoading() {
      setLoading(true);
    };
  
    if(!fontsLoaded && !isLoadingComplete) {
      return (
        <AppLoading
          startAsync={_loadResourcesAsync}
          onError={_handleLoadingError}
          onFinish={_handleFinishLoading}
        />
      );
    } else if(fontsLoaded) {
      return (
        <NavigationContainer>
          <GalioProvider theme={argonTheme}>
            <Block flex>
              <Screens />
            </Block>
          </GalioProvider>
        </NavigationContainer>
      );
    } else {
      return null
    }
  }


// import Constants from "expo-constants";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';



// import RegisterForm from "./src/register-form/RegisterForm";
// import Form from "./src/register-form/Form-2";
// import Display from "./src/register-form/Display";

// // import ProfilePage from "./profile-page"

// const Stack = createNativeStackNavigator();

// export default function App() {

//     return (
//       <SafeAreaView style={styles.container}>
//       <Image source={require('./assets/icon.png')} style={styles.icon} />
//       <Text h4 style={styles.heading}>
//         Aethereus
//       </Text>
//         <NavigationContainer>
//             <Stack.Navigator>
//             <Stack.Screen name="RegisterForm" component={RegisterForm} />
//             <Stack.Screen name="Form" component={Form} />
//             <Stack.Screen name="Display" component={Display} />
//             </Stack.Navigator>
//         </NavigationContainer>
//         </SafeAreaView>
//     );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: Constants.statusBarHeight,
//   },
//   heading: {
//     textAlign: "center",
//     padding: 12,
//   },
//   title: {
//     fontWeight: "bold",
//   },
//   icon: {
//     position: 'absolute',
//     top: 30,
//     left: 50,
//     zIndex: 999,
//     width: 50,
//     height: 50,
//   },
// });


// // export const FEATURES = [
  
// //   {
// //     name: "Register Form",
// //     component: <RegisterForm />,
// //   },
// //   // {
// //   //   name: "Profile",
// //   //   component: <ProfilePage/>,
// //   // }
// // ];
