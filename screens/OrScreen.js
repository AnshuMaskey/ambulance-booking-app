import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'
import { useNavigation } from "@react-navigation/native";

const OrScreen = () => {
    const navigation = useNavigation();
  return (
    <View  style={{backgroundColor:'#D22323', height:'100%'}}>
        
        <TouchableOpacity 
            onPress={() => navigation.navigate('HomeScreen')}
            style={[styles.container]}
        >
            
            <Text style ={styles.text1}> Passenger</Text>
            <Image
                  style={{ marginTop:45, width: 180, height: 150, resizeMode: "contain" }}
                  source={require('../assets/pass.png')}
            />
        </TouchableOpacity>
        <TouchableOpacity 
            onPress={() => navigation.navigate('DriverScreen')}
            style={[styles.container]}
        >
            <Text style ={styles.text1}> Driver</Text>
            <Image
                  style={{ marginTop:53, width: 170, height: 150, resizeMode: "contain" }}
                  source={require('../assets/driver.png')}
            />
        </TouchableOpacity>
    </View>
  )
}

export default OrScreen

const styles = StyleSheet.create({
    container: {
        margin:47,
        marginBottom:0,
        width:310,
        height:310, 
        borderWidth: 4,
        backgroundColor: "#faf0e6",
        borderColor:  '#000',
        borderRadius: 1000,
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text1:{
        padding:10,
        color:"black",
        fontSize: 28,
        fontWeight:"bold",
        textAlign: "center"
      },
})