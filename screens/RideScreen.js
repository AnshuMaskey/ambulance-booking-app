import { StyleSheet, Text, View , Dimensions} from 'react-native'
import React from 'react'
import RideOptionsCard from '../components/RideOptionsCard'
import Map from '../components/Map'

const RideScreen = () => {
  return (
      <View style={{height:'78%'}} >
        <View style={{height:'65%'}}>        
            <Map/>
        </View>
        <View style={{height:'35%'}}>        
            <RideOptionsCard/>
        </View>
      </View>
    
  )
}

export default RideScreen

const styles = StyleSheet.create({})