import {
  FlatList,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,Alert
} from "react-native";
import React, { useState } from "react";
import "intl";
import "intl/locale-data/jsonp/en";
import { Icon } from "react-native-elements";
// import { SafeAreaView } from "react-native-safe-area-context";
import { selectTravelTimeInformation} from "../redux/slices/navSlice"
import tailwind from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import PaymentScreen from "../screens/PaymentScreen";

const RideOptionsCard = () => {
  const ridesData = [
    {
      id: "ambulance-201",
      title: "Patient Transfer Service(PTS) Ambulance",
      multiplier: 1,
      image:require('../assets/pts.png'),
    },
    {
      id: "ambulance-202",
      title: "Basic Life Saving(BLS) Ambulance",
      multiplier: 1.2,
      image: require('../assets/blss.png'),
    },
    {
      id: "ambulance-203",
      title: "Advanced Life Support (ALS) Ambulance",
      multiplier: 1.75,
      image: require('../assets/als.png'),
    },
    {
      id: "ambulance-204",
      title: "Mortuary Ambulance",
      multiplier: 2.5,
      image: require('../assets/mort.png'),
    },
  ];
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  console.log(travelTimeInformation);
  const isconfirm= () =>{
    Alert.alert("Confirmation",'Your booking request has been sent!');
    setTimeout(() => {
      navigation.navigate(PaymentScreen);
      }, 6000);
    ;
  }
  const pay= new Intl.NumberFormat("ne-NP", {
    currency: "NRP",
    style: "currency",
  }).format(
    (travelTimeInformation?.duration.value *
      SURGE_CHARGE_RATE *
      ridesData.multiplier) /
      100
  )
  return (
    <View style={tailwind`bg-white flex-grow m-0`}>
      <View style={tailwind`m-0`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MapScreen')}
          style={tailwind`absolute top-3 left-5  p-3 rounded-full `}
        >
          {/* <Icon
            name={Platform.OS === "ios" ? "ios-chevron-back" : "md-arrow-back"}
            type="ionicon"
          /> */}
        </TouchableOpacity>
        <Text style={tailwind`text-center py-5 text-xl font-bold`}>
          Select an Ambulance
        </Text>
      </View>
      <FlatList
        data={ridesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tailwind.style(
              `flex-row justify-between items-center px-6`,
              id === selected?.id && "bg-red-100"
            )}
          >
            <Image
              style={{
                width: 70,
                height: 55,
                resizeMode: "contain",
              }}
              source={image}
            />
            <View style={tailwind`m-2 w-1/2 px-6`}>
              <Text style={tailwind` text-base font-bold `}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text}</Text>
            </View>
            <View style={tailwind`m-1 w-1/3`}>
              <Text style={tailwind`text-base  `}>
              {new Intl.NumberFormat("ne-NP", {
                currency: "NRP",
                style: "currency",
              }).format(
                (travelTimeInformation?.duration.value *
                  SURGE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={tailwind`m-2  border-t border-gray-200 `}>
        <TouchableOpacity
          disabled={!selected}
          style={tailwind.style(
            `bg-red-700 py-3 m-1 top-1`,
            !selected && "bg-red-100"
          )}
        >
          <Text style={tailwind`text-center text-white font-bold text-lg`}
            onPress={isconfirm} 
          >
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// const RidesData = {
//   id: string,
//   title: string,
//   multiplier: number,
//   image: string,
// }[];



const SURGE_CHARGE_RATE = 15;


export default RideOptionsCard;
