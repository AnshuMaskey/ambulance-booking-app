import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import tailwind from "tailwind-react-native-classnames";
import FormSubmitButton from '../components/FormSubmitButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const DRequestScreen = () => {
  const navigation=useNavigation();

  const alert1=()=>{
    Alert.alert('Confirmation', "You have accepted Anshu Makey's booking!")
    navigation.navigate('DriverScreen')
  }
  const alert2=()=>{
    Alert.alert('Declination', "You cancelled Anshu Makey's booking!")
    navigation.navigate('DriverScreen')
  }
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Text style={styles.text12}>Requests</Text>
      </View>
      <TouchableOpacity style={styles.container2}>
        <View style={tailwind`m-2 w-14`}>
          <Ionicons name="person" size={29} color="black" style={ styles.icon} />
        </View>
        <View style={tailwind`m-2  `}>
          <Text style={{fontSize:26, fontWeight:'700'}}> Anshu Maskey</Text>
            
          <Text style={ styles.text} >From:   Salesberry Department, Satdobato</Text>
          <Text style={ styles.text}>To:    Norvic Hospital, Thapathali</Text>

          <Text style={ styles.text}>Distance:  1.3km away</Text>
          <Text style={ styles.text}>Rate: NPR 200</Text>
        </View>
        
      </TouchableOpacity>
      <TouchableOpacity style={styles.container3}>
        <View style={tailwind`m-2 w-40`}>
          <FormSubmitButton onPress={alert1} title='Accept ' />
        </View>
        <View style={tailwind`m-2 w-40`}>
            <FormSubmitButton  onPress={alert2} title='Cancel' />
        </View> 
      </TouchableOpacity>
      
    </View>
  )
}

export default DRequestScreen

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(52, 52, 52, 0.1)',
    marginTop: 40,
  },
  container1: {
    display:"flex",
    // margin:17,
    // paddingBottom:49,
    height:70,
    marginTop:3,
    marginHorizontal:20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    // backgroundColor: "white",
    backgroundColor: "rgba(210, 35, 35, 0.9)",
    borderRadius: 8,
    elevation:10,
    shadowColor: "#000",
    shadowOpacity: 0.9,
    shadowRadius: 5,
    shadowOffset: {
      height: 6,
      width: 4
    }
   
  },
  text12:{
    padding:10,
    color:"black",
    fontSize: 28,
    fontWeight:"bold",
    textAlign: "center"
  },
  icon:{ 
    paddingHorizontal:15, 
    marginVertical:1,
    alignItems:'flex-end'
  },
  container2: {
    marginTop:40,
    margin:20,
    display:"flex",
    paddingBottom:10,
    paddingTop:10,
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(210, 35, 35, 0.9)",
    borderRadius: 8,
    elevation:6
    // `flex-row justify-between items-center px-6 `,
  },
  container3: {
    margin:20,
    display:"flex",
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "row",
    backgroundColor: "transparent",
    // `flex-row justify-between items-center px-6 `,
  },
  text:{
    padding:5, 
    paddingHorizontal:10,
    textDecorationColor: "#fff",
    borderBottomWidth:1.5,
    marginVertical:5,
    fontSize:16,
    width:'80%',borderColor:'white'
  },
})