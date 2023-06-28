import React,{useState,useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';
// import DRequest from './DRequestScreen';
import DRequestScreen from './DRequestScreen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRef } from 'react';

const DriverScreen = () => {
    
    const [location, setLocation] = useState(null);
    const mapRef=useRef(null);
    // const [errorMsg, setErrorMsg] = useState(null);
    const [pin,setPin]=React.useState({
        latitude:27.6580282, 
        longitude:85.3252030,
    })

    React.useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          console.log({
              location,
              latitude:location.coords.latitude,
              longitude:location.coords.longitude,
          });

          setPin({
              latitude:location.coords.latitude,
              longitude:location.coords.longitude,
          })
        })();
    }, []);

    useEffect(() => {
      if (pin)return;
      mapRef.current.fitToSuppliedMarkers(["pin"], {
        edgePadding: {top:120,  right: 50, bottom:50, left:50},
      });
    }, [pin])

    // let text = 'Waiting..';
    // if (errorMsg) {
    //     text = errorMsg;
    // } else if (location) {
    //     text = JSON.stringify(location);
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <MapView style={styles.map} 
            initialregion={{
                latitude: 27.6580282,
                longitude: 85.3252030,
                latitudeDelta: 0.005,
                longitudeDelta: 0.0005,
            }}
        >
            <Marker
              coordinate={{latitude: 27.6580282,
                longitude: 85.3252030}}
              draggable={true}
              description='Your location'
              pinColor='red'
              onDragStart={(e)=>{
                  console.log("Drag Start", e.nativeEvent.coordinate);
              }}
              onDragEnd={(e)=>{
                  console.log("Drag End",e.nativeEvent.coordinate);
                  setPin({
                    latitude:e.nativeEvent.latitude,
                    longitude:e.nativeEvent.longitude,
                  })
              }}
              
            />
        </MapView>
        <View style={styles.bottom}>
        <Image
          style={{ marginVertical:30, width: 40, height: 35, resizeMode: "contain", justifyContent:"flex-start", alignItems:"flex-start" }}
          source={require('../assets/home.png')} 
        />
        <TouchableOpacity
              onPress={() => navigation.navigate('DRequestScreen')}
        >
          <Text style={{borderRadius:8, borderWidth:5, padding:7, textAlign:'center', fontWeight:'700'}}>Driver</Text>
        </TouchableOpacity>
        <Image
          style={{ padding:5, marginVertical:30, width: 30, height: 30, resizeMode: "contain" }}
          source={require('../assets/user.png')} 
        />

      </View>
    </View>
  );
}


//       <Map/>
//       <Button  title="Cancel Booking" color="black" onPress={() => navigation.navigate('DriverScreen')}/>
//     </View>
//   )
// }

export default DriverScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    bottom:{
      display:"flex",
      flexDirection:"row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#D22323",  
      width:'100%',
      height:70,
      marginTop:0,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20, 
    },
  });


