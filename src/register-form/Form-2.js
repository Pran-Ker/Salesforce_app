// import React from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TouchableOpacity,
//   TextInput,
//   Alert,
// } from "react-native";
// import { useState } from 'react';
// // import Display from './Display';
// import { useNavigation } from '@react-navigation/native';

// import { styles } from "./styles";


// const InfoForm = ({route}) => {
// const [cgpa10, setCgpa10] = useState('');
// const [cgpa12, setCgpa12] = useState('');
// const [cgpaGrad, setCgpaGrad] = useState('');

// // const data = route.params.data;

// const navigation = useNavigation();


// // const dataObject = {
// // cgpa10: cgpa10,
// // cgpa12: cgpa12,
// // cgpaGrad: cgpaGrad,
// // fname:data.fname,
// // lname:data.lname,
// // mobile:data.mobile
// // email:data.email
// // };



// const isDisabled = !cgpa10 || !cgpa12 || !cgpaGrad;
// const handleSubmit = () => {
//   if (cgpa10 >=0 && cgpa10 <=10 && cgpa12 >=0 && cgpa12 <=10 && cgpaGrad >=0 && cgpaGrad <=10) {
//   navigation.navigate('Display', {
//   data: dataObject
//   });
//   } else {
//   Alert.alert("Invalid input", "Enter a value between 0 and 10.");
//   }
//   };

// return (
// <View style={styles.container}>
// <Text style={styles.headerText}>Enter your CGPA details:</Text>
// <Text style={styles.label}>10th CGPA:</Text>
// <View style={styles.inputContainer}>
// <TextInput
//        style={styles.input}
//        value={cgpa10}
//        onChangeText={setCgpa10}
//        keyboardType="decimal-pad"
//      />
// </View>
// <Text style={styles.label}>12th CGPA:</Text>
// <View style={styles.inputContainer}>
// <TextInput
//        style={styles.input}
//        value={cgpa12}
//        onChangeText={setCgpa12}
//        keyboardType="decimal-pad"
//      />
// </View>
// <Text style={styles.label}>Graduation CGPA:</Text>
// <View style={styles.inputContainer}>
// <TextInput
//        style={styles.input}
//        value={cgpaGrad}
//        onChangeText={setCgpaGrad}
//        keyboardType="decimal-pad"
//      />
// </View>
// <TouchableOpacity
//         style={[styles.button, isDisabled && { backgroundColor: 'gray' }]}
//         onPress={handleSubmit}
//         disabled={isDisabled}
//       >
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
// </View>
// )
// }

// export default InfoForm;

import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Formik } from "formik";
import { useNavigation } from "@react-navigation/native";

import { validationSchema } from "./validation";
import { styles } from "./styles";
import FormField from "./FormField";




export default function RegisterForm() {
  function onSubmitHandler(values) {
    console.log(values)
    // https://reactnative.dev/docs/alert
    Alert.alert(
      "Register Successfully!",
      "Form data: " + JSON.stringify(values)
    );
  }

  function isFormValid(isValid, touched) {
    return isValid && Object.keys(touched).length !== 0;
  }

  return (
    <>
      <SafeAreaView style={styles.topSafeArea} />

      <StatusBar style="light" />

      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Register</Text>
        </View>

        {/* https://github.com/APSL/react-native-keyboard-aware-scroll-view */}
        <KeyboardAwareScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={150}
        >
          {/* https://formik.org/docs/overview */}
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
            }}
            onSubmit={onSubmitHandler}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <FormField
                  field="firstName"
                  label="Flag"
                  autoCapitalize="words"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <FormField
                  field="lastName"
                  label="Last Name"
                  autoCapitalize="words"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <FormField
                  field="email"
                  label="Email Address"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                <FormField
                  field="phone"
                  label="Phone"
                  values={values}
                  touched={touched}
                  errors={errors}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                />

                

                <TouchableOpacity
                  onPress={() => {handleSubmit}}
                >
                  <View
                    style={[
                      styles.button,
                      {
                        opacity: isFormValid(isValid, touched) ? 1 : 0.5,
                      },
                    ]}
                  >
                    <Text style={styles.buttonText}>SUBMIT</Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </>
  );
}
