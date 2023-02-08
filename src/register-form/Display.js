import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Alert,
  } from "react-native";
import { styles } from "./styles";


const DisplayPage = () => {
  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />


      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Displayed</Text>
        </View>
        </SafeAreaView>
    </>
  );
};

export default DisplayPage;
