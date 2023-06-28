import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import {GOOGLE_MAPS_APIKEY} from "@env";
import { setDestination } from '../redux/slices/navSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { selectDestination} from '../redux/slices/navSlice';
import { useSelector } from 'react-redux';

const NavigateCard = () => {
    const dispatch=useDispatch();
    const navigation = useNavigation();
    const destination=useSelector(selectDestination)
  return (
    <View style={{backgroundColor:'transparent',position:'absolute', height:275, width:'90%',  flexDirection:'row', elevation:7, zIndex:9,top:70, left:20,}}>
        <GooglePlacesAutocomplete 
            styles={{
            
            textInputContainer: {
                flexDirection: 'row',
            },
            textInput: {
                backgroundColor: '#D22323',
                height: 46,
                width:'90%',
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
            placeholder='Where to?' nearbyPlacesAPI='GooglePlaceSearch' 
            fetchDetails={true}
            enablePoweredByContainer={false}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details=null)=>{
                dispatch(
                    setDestination({
                        location:details.geometry.location,
                        description:data.description
                    })
                );   
                setTimeout(() => {
                    navigation.navigate('RideScreen');
                    }, 4000);
                // navigation.navigate('RideScreen');
                 
            }}
            // onPress={() => navigation.navigate(RideScreen)}
            query={{
                key:'AIzaSyA4uGiX5et6FB0G_lqA-aMA4t9jw2CeRm8',
                language:"en",
                components: 'country:np'
            }}      
            debounce={400}
        />
        
    </View>
    //   <View style={{backgroundColor:'red', position:'absolute', zIndex:9,
    //   height:45,
    //   width:'90%', flexDirection:'row',top:90,
    //   left:20,
    //   elevation:7}}>
    //     {/* <View> */}
    //         <GooglePlacesAutocomplete 
    //             styles={{
                   
    //                 textInput:{
    //                     backgroundColor: '#D22323',
    //                     height: 46,
    //                     borderRadius: 5,
    //                     paddingVertical: 5,
    //                     paddingHorizontal: 10,
    //                     fontSize: 17,
    //                     color:'#e9e9e9',
    //                     flex: 1
    //                 },

                    
                
    //             }}
    //             placeholder='Where to?' nearbyPlacesAPI='GooglePlaceSearch' 
    //             fetchDetails={true}
    //             enablePoweredByContainer={false}
    //             returnKeyType={"search"}
    //             minLength={2}
    //             onPress={(data, details=null)=>{
    //                 dispatch(
    //                     setDestination({
    //                         location:details.geometry.location,
    //                         description:data.description
    //                     })
    //                 );     
    //             }}
    //             query={{
    //                 key:'AIzaSyAEV8CtLrvUoprx-ecROZV4NsFIAVRLAOg',
    //                 language:"en",
    //                 components: 'country:np'
    //             }}      
    //             debounce={400}
    //         />
    //     {/* </View> */}
    //   </View>
    // // </SafeAreaView>
  )
}

export default NavigateCard
