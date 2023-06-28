import React, { useRef, useState } from 'react';
import {Image,
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Dimensions,
} from 'react-native';

import FormHeader from './FormHeader';
import FormSelectorBtn from './FormSelectorBtn';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';

const { width } = Dimensions.get('window');

export default function AppForm({ navigation }) {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();
  console.log(navigation);
  // const rightHeaderOpacity = animation.interpolate({
  //   inputRange: [0, width],
  //   outputRange: [1, 0],
  // });

  // const leftHeaderTranslateX = animation.interpolate({
  //   inputRange: [0, width],
  //   outputRange: [0, 40],
  // });
  // const rightHeaderTranslateY = animation.interpolate({
  //   inputRange: [0, width],
  //   outputRange: [0, -20],
  // });
  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(210, 35, 35, 1)', 'rgba(210, 35, 35, 0.3)'],
  });
  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange: ['rgba(210, 35, 35, 0.3)', 'rgba(210, 35, 35, 1)'],
  });

  return (
    <View style={{ flex: 1, paddingTop:20, backgroundColor:'#fff' }}>
      <View style={{ height: 170 }}>
        <Image
          style={{ marginHorizontal:40, marginVertical:7, width: 300, height: 150, resizeMode: "contain", flexDirection:'row', justifyContent:'center', alignItems:'center' }}
          source={require('../assets/logo1.png')} 
        />      
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginBottom: 20,
          
        }}
      >
        <FormSelectorBtn
          style={styles.borderLeft}
          backgroundColor={loginColorInterpolate}
          title='Login'
          onPress={() => scrollView.current.scrollTo({ x: 0 })}
        />
        <FormSelectorBtn
          style={styles.borderRight}
          backgroundColor={signupColorInterpolate}
          title='Sign up'
          onPress={() => scrollView.current.scrollTo({ x: width })}
        />
      </View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
        style={styles.scroll}
      >
        <LoginForm navigation={navigation} />
        <ScrollView>
          <SignupForm navigation={navigation}  />
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,

  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  scroll:{
    marginTop:20,
    margin:0,
    backgroundColor:'rgba(210, 35, 35, 1)',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60, 
  }
});