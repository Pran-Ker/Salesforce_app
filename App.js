import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  BackHandler,
} from "react-native";
import { Text, ListItem } from "react-native-elements";
import Constants from "expo-constants";
import { FEATURES } from "./src/feature-list";

export default function App() {
  const [featureIndex, setfeatureIndex] = useState(null);

  // Handle when user press Hardware Back Button
  useEffect(() => {
    const backAction = () => {
      // Go back to feature List
      if (featureIndex !== null) {
        setfeatureIndex(null);
      } 
      // Exit app if user currently in feature List
      else {
        BackHandler.exitApp();
      }

      return true;
    };

    // https://reactnative.dev/docs/backhandler
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [featureIndex]);

  if (featureIndex !== null) return FEATURES[featureIndex].component;

  return (
    <SafeAreaView style={styles.container}>
      <Text h4 style={styles.heading}>
        Aethereus Login Page
      </Text>

      <ScrollView>
        {FEATURES.map((l, i) => (
          <ListItem key={i} bottomDivider onPress={() => setfeatureIndex(i)}>
            

            <ListItem.Content>
              <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
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
});
