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


// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ThirdPage = ({route}) => {
// const data = route.params.data;
// return (
// <View style={styles.container}>
// <Text style={styles.text}>FIRST NAME: {data.fname}</Text>
// <Text style={styles.text}>Last NAME: {data.lname}</Text>
// <Text style={styles.text}>CONTACT NUMBER: {data.mobile}</Text>
// <Text style={styles.text}>10th CGPA: {data.cgpa10}</Text>
// <Text style={styles.text}>12th CGPA: {data.cgpa12}</Text>
// <Text style={styles.text}>Graduation CGPA: {data.cgpaGrad}</Text>

// </View>
// );
// };


export default DisplayPage;
