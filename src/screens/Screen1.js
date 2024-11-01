import React from 'react';
import { View, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        size={25}
        fillColor="red"
        unfillColor="#FFFFFF"
        text="Custom Checkbox 1"
        iconStyle={{ borderColor: 'red' }}
        innerIconStyle={{ borderWidth: 2 }}
        style={styles.checkbox}
        onPress={(isChecked) => {
          console.log("Checkbox 1 checked:", isChecked);
        }}
      />
      <BouncyCheckbox
        size={25}
        fillColor="green"
        unfillColor="yellow"
        text="Custom Checkbox 2"
        iconStyle={{ borderColor: 'red' }}
        innerIconStyle={{ borderWidth: 2 }}
        style={styles.checkbox}
        onPress={(isChecked) => {
          console.log("Checkbox 2 checked:", isChecked);
        }}
      />
      <BouncyCheckbox
        size={25}
        fillColor="blue"
        unfillColor="#FFFFFF"
        text="Custom Checkbox 3"
        iconStyle={{ borderColor: 'red' }}
        innerIconStyle={{ borderWidth: 2 }}
        style={styles.checkbox}
        onPress={(isChecked) => {
          console.log("Checkbox 3 checked:", isChecked);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 35,
  },
  checkbox: {
    marginBottom: 25, // Adjust gap between checkboxes
  },
});

export default Screen1;
