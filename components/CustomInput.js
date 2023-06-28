import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput value={value} onChangeText={setValue} placeholder={placeholder} style={styles.input} secureTextEntry={secureTextEntry}/>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        width:'100%',
        borderColor:'#D22323', 
        borderWidth:1,
        borderRadius:5, 
        paddingHorizontal:10,
        marginVertical:5
    },
    input:{
        
    }
})