import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../redux/slices/navSlice";
//import MapScreen from "../screens/MapScreen";


const data = [
  {
    id: "123",
    title: "Book an Ambulance",
    image: "https://www.iconsdb.com/icons/preview/white/ambulance-xxl.png",
    screen: "MapScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  
  return (
    <FlatList 
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={[tw`${!origin && "opacity-20"}`,styles.back]}>
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={[styles.container, styles.shadow]}
            disabled={!origin}
          >
              <View style={styles.first}>
                <Image
                  style={{ marginTop:53, width: 110, height: 150, resizeMode: "contain" }}
                  source={{ uri: item.image }}
                />
              </View>
              <View style={styles.bottom}>
                {/* <Icon name="rightcircleo" >  */}
                <Text style={tw` text-xl text-left text-white font-bold`}>{item.title}</Text>
              </View>
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

export default NavOptions;



const styles = StyleSheet.create({
  back: {
    display:"flex",
    paddingBottom:49,
    paddingTop:49,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    //backgroundColor: "black",
  },

  container: {
    margin:4,
    width:310,
    height:310, 
    borderWidth: 4,
    backgroundColor: "#faf0e6",
    borderColor:  "#D22323",
    borderRadius: 1000,
    display:"flex",
    justifyContent: "center",
    alignItems: "center",
  },

  shadow:{
    shadowColor: '#A50104',
    elevation: 32,
  },

  first: {
    backgroundColor: "#D22323", 
    borderTopLeftRadius: 8000,
    borderTopRightRadius: 8000, 
    width:170,
    height:123, 
    display:"flex",
    justifyContent: "center",
    alignItems: "center"
  },
  bottom: {
    display:"flex",
    flexDirection:"row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#D22323",  
    width:220,
    height:50,
    marginTop:6,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10, 
  }
});