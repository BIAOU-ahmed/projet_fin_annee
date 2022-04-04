import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Picker, ScrollView, StyleSheet } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { AuthContext } from '../navigation/AuthProvider';
import '../firebase'
// import {AuthContext} from '../navigation/AuthProvider';
// import { getAuth } from 'firebase/auth';

const auth = getAuth();

const SignupScreen = ({ navigation }) => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const { register } = useContext(AuthContext);
  // const handleSignUp = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;
  //       console.log(user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message; 
  //       console.log(error);
  //       // ..
  //     });
  // }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Create an account</Text>

        <FormInput
          labelValue={user.email}
          onChangeText={(userEmail) => setUser({ ...user, ...{ email: userEmail } })}
          placeholderText="Email"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          labelValue={user.firstName}
          onChangeText={(firstName) => setUser({ ...user, ...{ firstName: firstName } })}
          placeholderText="First Name"
          iconType="user"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <FormInput
          labelValue={user.lastName}
          onChangeText={(lastName) => setUser({ ...user, ...{ lastName: lastName } })}
          placeholderText="Last Name"
          iconType="user"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={user.password}
          onChangeText={(userPassword) => setUser({ ...user, ...{ password: userPassword } })}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <FormInput
          labelValue={user.confirmPassword}
          onChangeText={(userPassword) => setUser({ ...user, ...{ confirmPassword: userPassword } })}
          placeholderText="Confirm Password"
          iconType="lock"
          secureTextEntry={true}
        />
        <Picker
          selectedValue={user.type}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setUser({ ...user, ...{ type: itemValue } })}
        >
          <Picker.Item label="Client" value="client" />
          <Picker.Item label="Intervenant" value="intervenant" />
        </Picker>
        <FormButton
          buttonTitle="Sign Up"
          onPress={() => register(user)}
        />

        <View style={styles.textPrivate}>
          <Text style={styles.color_textPrivate}>
            By registering, you confirm that you accept our{' '}
          </Text>
          <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
            <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
              Terms of service
            </Text>
          </TouchableOpacity>
          <Text style={styles.color_textPrivate}> and </Text>
          <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
            Privacy Policy
          </Text>
        </View>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.navButtonText}>Have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    //fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    //fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    //fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
