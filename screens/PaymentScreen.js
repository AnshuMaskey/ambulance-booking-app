import React, {useState} from 'react'
import Khalti from '../Payment/Khalti';
import { StyleSheet, Text, View, Alert } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tailwind from "tailwind-react-native-classnames";
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import FormSubmitButton from '../components/FormSubmitButton';
const paydata = [
  {
    id: "123",
    name: "Anish Shrestha",
    phone: "9871165689",
    gender: "Male",
    vehicle: "Advance Life Support Ambulance",
    vehicleNo: "BA121 24"
  },
];



const PaymentScreen = props  => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const alert=()=>{
    Alert.alert('Payment via Cash on Delivery','Thank you for using our app')
  }

  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
      <View style={styles.container}>
        <Text style={styles.text1}>Rider Details</Text>
      </View>
      <View >
        <FlatList
          data={paydata}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, name, phone, gender, vehicle, vehicleNo}, item }) => (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              style={styles.container2}
            >
              <View style={tailwind`m-2 `}>
                <Ionicons name="person" size={29} color="black" style={ styles.icon}/>
                {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                <MaterialCommunityIcons name="gender-male-female" size={29} color="black" style={ styles.icon}/>
                <Ionicons name="call" size={29} color="black" style={ styles.icon}/>
                <MaterialCommunityIcons name="ambulance" size={29} color="black" style={ styles.icon}/>
                <Ionicons name="card" size={29} color="black" style={ styles.icon}/>
              </View>
              <View style={tailwind`m-0 py-2 w-2/3`}>
                
                <Text style={ styles.text}>{name}</Text>
                <Text style={ styles.text}>{gender}</Text>
                <Text style={ styles.text}>{phone}</Text>
                <Text style={ styles.text}>{vehicle}</Text>
                <Text style={ styles.text}>{vehicleNo}</Text>
                
                <FormSubmitButton onPress={()=>navigation.navigate('HomeScreen')} title='Cancel Booking' />
              
              </View>
              
              
            </TouchableOpacity>
            
          )}
        />
      </View>
      
      
      <View style={styles.container} >   
        <Text style={styles.text1}>Payment Details</Text>     
        
      </View>
      <View>
        <FlatList
          data={paydata}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { id, name, phone, gender, vehicle, vehicleNo}, item }) => (
            <TouchableOpacity
              onPress={() => setSelected(item)}
              style={styles.container2}
            >
                <View>
          
                  <Text style={ styles.text}>Ambulance Fare Rate:   NPR. 349.39</Text>
                  <View style={{width:'130%' , height:'75%', paddingHorizontal:20, paddingVertical:5}}>
                    <Text style={{fontSize:16}}>Payment Methods:</Text>
                    <Khalti  /> 
                    <FormSubmitButton onPress={alert} title='Cash on Delivery' /> 
                  </View> 
                            
                </View>
            </TouchableOpacity>
          )}
        />
        
      </View>
    </SafeAreaView>
    
     
  );
}

export default PaymentScreen

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: "rgba(210, 35, 35, 1)",
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
  container2: {
    margin:20,
    display:"flex",
    paddingBottom:10,
    paddingTop:10,
    // justifyContent: "center",
    // alignItems: "center",
    flexDirection: "row",
    backgroundColor: "rgba(210, 35, 35, 0.25)",
    borderRadius: 8,
    // `flex-row justify-between items-center px-6 `,
  },
  container3: {
    display:"flex",
    // paddingBottom:49,
    paddingTop:20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: 'transparent',
   
  },
  container4: {
    margin: 20,
    display:"flex",
    // paddingBottom:49,
    paddingTop:20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "grey",
    borderRadius: 25,
  },
  text:{
    padding:5, 
    paddingHorizontal:10,
    textDecorationColor: "#fff",
    borderBottomWidth:1.5,
    marginVertical:5,
    fontSize:16,
    width:'300%',borderColor:'white'
  },

  icon:{ 
    padding:5, 
    marginVertical:1,
    alignItems:'flex-end'
  },
  text1:{
    padding:10,
    color:"black",
    fontSize: 28,
    fontWeight:"bold",
    textAlign: "center"
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 42,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    height:'50', 
    
  }

})