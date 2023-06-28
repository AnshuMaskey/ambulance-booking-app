import React, { useState } from "react";
import { View, StyleSheet, Text, Alert } from "react-native";
import axios from "axios";
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";
import { StackActions } from "@react-navigation/native";

import { Formik } from "formik";
import * as Yup from "yup";

import client from "../api/client";
import { max } from "react-native-reanimated";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, "Invalid name!")
    .required("Name is required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  phone: Yup.string()
    .max(10, "Invalid Phone number!")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required!"),
  usertype: Yup.string()
    .trim()
    .matches(/^(Driver|driver|Passenger|passenger)/, "Invalid UserType!")
    .required("User Type is required!"),
  password: Yup.string()
    .trim()
    .min(8, "Password is too short!")
    .required("Password is required!"),
  confirmPassword: Yup.string().equals(
    [Yup.ref("password"), null],
    "Password does not match!"
  ),
});

const SignupForm = ({ navigation }) => {
  const userInfo = {
    fullname: "",
    email: "",
    phone: "",
    usertype: "",
    password: "",
    confirmPassword: "",
  };

  const [error, setError] = useState("");

  // const { fullname, email, phone, usertype, password, confirmPassword } = userInfo;
  // console.log(userInfo, 'anshu');

  // const handleOnChangeText = (value, fieldName) => {
  //   setUserInfo({ ...userInfo, [fieldName]: value });
  //   console.log(setUserInfo, 'abc');
  // };

  // const isValidForm = () => {
  //   // we will accept only if all of the fields have value
  //   if (!isValidObjField(userInfo))
  //     return updateError('Required all fields!', setError);
  //   // if valid name with 3 or more characters
  //   if (!fullname.trim() || fullname.length < 3)
  //     return updateError('Invalid name!', setError);
  //   // only valid email id is allowed
  //   if (!isValidEmail(email)) return updateError('Invalid email!', setError);
  //   //only valid phone number
  //   if (phone == phoneRegExp) return updateError('Invalid Phone Number', setError)
  //   // password must have 8 or more characters
  //   if (!password.trim() || password.length < 8)
  //     return updateError('Password is less then 8 characters!', setError);
  //   // password and confirm password must be the same
  //   if (password !== confirmPassword)
  //     return updateError('Password does not match!', setError);

  //   return true;
  // };

  // const submitForm = () => {
  //   if (isValidForm()) {
  //     // submit form
  //     console.log(userInfo, 'validated');
  //   }
  // };

  const signUp = async (values, formikActions) => {
    navigation.navigate("HomeScreen");
    // if (values.usertype==="Passenger" || "passenger") {
    //   navigation.navigate('HomeScreen');
    // }
    // else if (values.usertype==="Driver" || "driver") {
    //   navigation.navigate('DriverScreen');
    // }

    // console.log(values, 'try');
    // const res = await client.post('/create-user', {
    //   ...values,
    // });
    // console.log(res.data,'2nd');
    // if (res.data.success) {
    //   const signInRes = await client.post('/sign-in', {
    //     email: values.email,
    //     password: values.password,
    //     phone:values.phone,
    //     usertype:values.usertype,
    //   });
    //   if (signInRes.data.success) {
    //     navigation.dispatch(
    //       StackActions.replace('HomeScreen', {
    //         token: signInRes.data.token,
    //       })
    //     );
    //   }
    // }

    // formikActions.resetForm();
    // formikActions.setSubmitting(false);
  };

  return (
    <FormContainer>
      <Formik
        initialValues={userInfo}
        validationSchema={validationSchema}
        onSubmit={signUp}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => {
          console.log(values, "ANS");
          const {
            fullname,
            email,
            password,
            phone,
            usertype,
            confirmPassword,
          } = values;

          return (
            <View style={{ padding: 20 }}>
              <FormInput
                value={fullname}
                error={touched.fullname && errors.fullname}
                onChangeText={handleChange("fullname")}
                onBlur={handleBlur("fullname")}
                label="Full Name"
                placeholder="John Smith"
              />
              <FormInput
                value={email}
                error={touched.email && errors.email}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                autoCapitalize="none"
                label="Email"
                placeholder="example@email.com"
              />
              <FormInput
                value={phone}
                error={touched.phone && errors.phone}
                onChangeText={handleChange("phone")}
                onBlur={handleBlur("phone")}
                autoCapitalize="none"
                label="Phone Number"
                placeholder="+977 "
              />
              <FormInput
                value={usertype}
                error={touched.usertype && errors.usertype}
                onChangeText={handleChange("usertype")}
                onBlur={handleBlur("usertype")}
                autoCapitalize="none"
                label="User Type"
                placeholder="Driver/Passenger"
              />
              <FormInput
                value={password}
                error={touched.password && errors.password}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                autoCapitalize="none"
                secureTextEntry
                label="Password"
                placeholder="********"
              />
              <FormInput
                value={confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                autoCapitalize="none"
                secureTextEntry
                label="Confirm Password"
                placeholder="********"
              />
              <FormSubmitButton
                submitting={isSubmitting}
                onPress={
                  signUp
                  //   Alert.alert('Registration Successful!')
                  // }
                }
                title="Sign up"
              />
            </View>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

const styles = StyleSheet.create({});

export default SignupForm;
