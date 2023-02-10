import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { styles } from "./styles";


const InfoForm = ({route}) => {
const [cgpa10, setCgpa10] = useState('');
const [cgpa12, setCgpa12] = useState('');
const [cgpaGrad, setCgpaGrad] = useState('');

// const data = route.params.data;

const navigation = useNavigation();


// const dataObject = {
// cgpa10: cgpa10,
// cgpa12: cgpa12,
// cgpaGrad: cgpaGrad,
// fname:data.fname,
// lname:data.lname,
// mobile:data.mobile
// email:data.email
// };



const isDisabled = !cgpa10 || !cgpa12 || !cgpaGrad;
const handleSubmit = () => {
  if (cgpa10 >=0 && cgpa10 <=10 && cgpa12 >=0 && cgpa12 <=10 && cgpaGrad >=0 && cgpaGrad <=10) {
  navigation.navigate('Display'); //, {    data: dataObject    }
  } else {
  Alert.alert("Invalid input", "Enter a value between 0 and 10.");
  }
  };

return (
  <>
  <SafeAreaView style={styles.topSafeArea} />
    
      
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Details</Text>
        </View>
        
<KeyboardAwareScrollView
          style={styles.content}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          extraScrollHeight={150}
        >
<Text style={styles.headerText}>Enter your CGPA details:</Text>

<Text style={styles.label}>10th CGPA:</Text>
<TextInput
       style={styles.input}
       value={cgpa10}
       onChangeText={setCgpa10}
       keyboardType="decimal-pad"
     />

<Text style={styles.label}>12th CGPA:</Text>
<View style={styles.inputContainer}>
<TextInput
       style={styles.input}
       value={cgpa12}
       onChangeText={setCgpa12}
       keyboardType="decimal-pad"
     />
</View>
<Text style={styles.label}>Graduation CGPA:</Text>
<View style={styles.inputContainer}>
<TextInput
       style={styles.input}
       value={cgpaGrad}
       onChangeText={setCgpaGrad}
       keyboardType="decimal-pad"
     />
</View>
<TouchableOpacity
        style={[styles.button, isDisabled && { backgroundColor: 'gray' }]}
        onPress={handleSubmit}
        disabled={isDisabled}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      </KeyboardAwareScrollView>
 </SafeAreaView>
 </>
)
}

export default InfoForm;
