import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import AppForm from "../components/AppForm";
// import ImageUpload from '../components/ImageUpload';
// import UserProfile from '../components/UserProfile';
import { useLogin } from "../context/LoginProvider";
import DrawerNavigator from "./DrawerNaviagtor";
import HomeScreen from "../screens/HomeScreen";
import { store } from "../redux/store";
import MapScreen from "../screens/MapScreen";
import RideScreen from "../screens/RideScreen";
import PaymentScreen from "../screens/PaymentScreen";
import DriverScreen from "../screens/DriverScreen";
import DRequestScreen from "../screens/DRequestScreen";
// import OrScreen from "../screens/OrScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Provider store={store}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={AppForm} name="AppForm" />
        {/* <Stack.Screen component={ImageUpload} name='ImageUpload' /> */}
        <Stack.Screen component={HomeScreen} name="HomeScreen" />
        <Stack.Screen component={DriverScreen} name="DriverScreen" />
        <Stack.Screen component={DRequestScreen} name="DRequestScreen" />
        <Stack.Screen component={MapScreen} name="MapScreen" />
        <Stack.Screen component={RideScreen} name="RideScreen" />
        <Stack.Screen component={PaymentScreen} name="PaymentScreen" />
        {/* <Stack.Screen component={OrScreen} name='OrScreen' /> */}
      </Stack.Navigator>
    </Provider>
  );
};

const MainNavigator = () => {
  const { isLoggedIn } = useLogin();
  return <StackNavigator />;
};
export default MainNavigator;
