import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen8 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Screen 8</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default Screen8;