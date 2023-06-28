import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Map from "../components/Map";
import {createStackNavigator} from "@react-navigation/stack";
import NavigateCard from '../components/NavigateCard';

const MapScreen = () => {
  const Stack= createStackNavigator();
  return (
    <View>
      {/* <View style={{height:'20%'}}>
        <Stack.Navigator>
          <Stack.Screen name="NavigateCard" component={NavigateCard} options={{headerShown: false}}/>
        </Stack.Navigator> 
      </View> */}
      <View style={{height:'100%'}}>
        <NavigateCard />
        <Map/>
      </View>
      {/* <Stack.Navigator>
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{headerShown: false}}/>
      </Stack.Navigator>  */}
      
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})