import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Animated,
  Dimensions,
  Alert,
} from "react-native";
import client from "../api/client";
import { useLogin } from "../context/LoginProvider";
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";
import FormHeader from "./FormHeader";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import HomeScreen from "../screens/HomeScreen";

const { width } = Dimensions.get("window");

const LoginForm = () => {
  const { setIsLoggedIn, setProfile } = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = userInfo;

  // const handleSignUp=()=>{
  //   auth
  //   .createUserWithEmailandPassword(email,password)
  //   .then(userCredentials => {
  //     const user = userCredentials.user;
  //     console.log(user.email);
  //   })
  //   .catch(error =>alert(error.message))
  // }

  const handleOnChangeText = (value, fieldName) => {
    // console.log(value);
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    console.log(userInfo);
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);
    // Yup.object({
    //   email: Yup.string().email('Invalid email!').required('Email is required!'),
    //   password: Yup.string()
    //     .trim()
    //     .min(8, 'Password is too short!')
    //     .required('Password is required!'),
    // });

    if (!isValidObjField(email)) return updateError("Invalid Email!", setError);

    if (!password.trim() || password.length < 8)
      return updateError("Password is too short!", setError);
    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      Alert.alert("Logged In Successfully!");
      navigation.navigate("HomeScreen");
      // console.log(userInfo,'a');
      // try {
      //   const res = await client.post('/sign-in', { ...userInfo });
      //   console.log(res,'a');
      //   if (res.data.success) {
      //     setUserInfo({ email: '', password: '' });
      //     setProfile(res.data.user);
      //     setIsLoggedIn(true);

      //   }
      //   // console.log(res.data, 'abhi');
      // } catch (error) {
      //   console.log(error);
      // }
    }
  };

  //Header
  const animation = useRef(new Animated.Value(0)).current;

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });
  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });
  const navigation = useNavigation();

  return (
    <FormContainer>
      <Formik
        initialValues={userInfo}
        // validationSchema={validationSchema}
        onSubmit={isValidForm}
      >
        <View style={{ paddingTop: 20 }}>
          <FormHeader
            leftHeading="Welcome "
            rightHeading="Back"
            rightHeaderOpacity={rightHeaderOpacity}
            leftHeaderTranslateX={leftHeaderTranslateX}
            rightHeaderTranslateY={rightHeaderTranslateY}
          />
          {error ? (
            <Text
              style={{
                margin: 3,
                marginBottom: 9,
                color: "red",
                fontSize: 16,
                height: "12%",
                textAlign: "left",
                borderRadius: 10,
                padding: 8,
                backgroundColor: "pink",
              }}
            >
              {error}
            </Text>
          ) : null}
          <FormInput
            value={email}
            onChangeText={(value) => handleOnChangeText(value, "email")}
            label="Email"
            placeholder="example@email.com"
            autoCapitalize="none"
          />

          <FormInput
            value={password}
            onChangeText={(value) => handleOnChangeText(value, "password")}
            label="Password"
            placeholder="********"
            autoCapitalize="none"
            secureTextEntry
          />
          {/* <Dropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item
            }}
          /> */}
          <Text
            style={{
              margin: 0,
              marginBottom: 9,
              color: "pink",
              fontSize: 15,
              height: "12%",
              textAlign: "right",
              textDecorationLine: "underline",
            }}
          >
            Forgot Password?
          </Text>
          {/* <FormSubmitButton onPress={submitForm} title='Login' /> */}
          <FormSubmitButton onPress={submitForm} title="Login" />
        </View>
      </Formik>
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default LoginForm;
