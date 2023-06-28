import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import {MaterialCommunityIcons} from '@expo/vector-icons';
// import { Icon } from 'react-native-elements';
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const FormInput = props => {
  const { placeholder, label, error } = props;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 7,
        }}
      >
        <Text style={{ fontWeight: 'bold', fontSize:17 }}>{label}</Text>
        {error ? (
          <Text style={{ color: 'pink', fontSize: 16}}>{error}</Text>
        ) : null}
        
      </View>
      {/* <Icon name='user'/> */}
      <TextInput {...props} placeholder={placeholder} style={styles.input} />
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#1b1b33',
    height: 40,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
});

export default FormInput;
