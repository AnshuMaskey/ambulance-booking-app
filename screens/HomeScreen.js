import { Image, View, StyleSheet, Platform, StatusBar, Text, Icon } from "react-native";
// import { GOOGLE_MAPS_APIKEY} from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import NavOptions from "../components/NavOptions";
import React from "react";
// import { SafeAreaView } from "react-native-safe-area-context";  
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../redux/slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();
  
  const map=()=>{
    navigation.dispatch(
      StackActions.replace('MapScreen')
    );
  }
  return (
    <View style={styles.AndroidSafeArea }>
      <View style={{ paddingVertical:0, paddingHorizontal: 10, alignItems:"center", justifyContent:"center"}} >
        <Image
          style={{ marginVertical:30, width: 300, height: 100, resizeMode: "contain" }}
          source={require('../assets/logo1.png')} 
        />
      </View>
      <View style={{paddingVertical:0, paddingHorizontal: 10}}>
        <GooglePlacesAutocomplete 
          styles={{
            container: {
              flex: 0,
              margin:2,
            },
            textInputContainer: {
              flexDirection: 'row',
            },
            textInput: {
              backgroundColor: '#D22323',
              height: 46,
              borderRadius: 5,
              paddingVertical: 5,
              paddingHorizontal: 10,
              fontSize: 17,
              color:'#e9e9e9',
              flex: 1,
            },
            poweredContainer: {
              justifyContent: 'flex-end',
              alignItems: 'center',
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
              borderTopWidth: 0.5,
              
            },
            powered: {},
            listView: {},
            row: {
              backgroundColor: '#D22323',
              color:'#e9e9e9',
              padding: 13,
              height: 44,
              flexDirection: 'row',
              borderBottomRightRadius: 5,
              borderBottomLeftRadius: 5,
            },
            separator: {
              height: 1.5,
              backgroundColor: '#fff',
            },
            description: {},
            loader: {
              flexDirection: 'row',
              justifyContent: 'flex-end',
              height: 20,
            },
            predefinedPlacesDescription: {
              color: '#1faadb',
            },
          }}
          placeholder="Where from?" 
          nearbyPlacesAPI="GooglePlacesSearch" 
          debounce={400} 
          enablePoweredByContainer={false}
          fetchDetails={true}
          returnKeyType={"search"}
          onPress={(data,details=null)=>{
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description
              })
            );

            dispatch(setDestination(null))
          }}
          minLength={2}
          query={{
            key:'AIzaSyA4uGiX5et6FB0G_lqA-aMA4t9jw2CeRm8',
            language:"en",
            components: 'country:np'
          }}
          GooglePlacesSearchQuery={{
            rankby:'distance',
            type:'hospital'
          }}
        />
        
        <Text style ={styles.text1}> Are you in emergency?</Text>  

        
        <NavOptions onPress={map}/>
        
        
      </View>
      <View style={styles.bottom}>
        <Image
          style={{ marginVertical:30, width: 40, height: 35, resizeMode: "contain", justifyContent:"flex-start", alignItems:"flex-start" }}
          source={require('../assets/home.png')} 
        />
        <Image
          style={{ padding:5, marginVertical:30, width: 30, height: 30, resizeMode: "contain" }}
          source={require('../assets/user.png')} 
        />

      </View>
      
    </View>
  );
};

export default HomeScreen;

const styles=StyleSheet.create({
    AndroidSafeArea: {
      margin:0,
      flex: 0,
      width:'100%',
      backgroundColor: '#fff'
      
    },

    text1:{
      padding:10,
      color:"black",
      fontSize: 28,
      fontWeight:"bold",
      textAlign: "center"
    },



    bottom:{
      display:"flex",
      flexDirection:"row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#D22323",  
      width:'100%',
      height:70,
      marginTop:35,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20, 
    },

})
