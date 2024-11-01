import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  const handlePress = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Screen1')}>
        <Text style={styles.buttonText}>Bouncy Checkbox</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Screen2')}>
        <Text style={styles.buttonText}>BottomSheet</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Screen3')}>
        <Text style={styles.buttonText}>gifted-chat</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Screen4')}>
        <Text style={styles.buttonText}>Button 4</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Screen5')}>
        <Text style={styles.buttonText}>Button 5</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Screen6')}>
        <Text style={styles.buttonText}>Button 6</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Screen7')}>
        <Text style={styles.buttonText}>Button 7</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Screen8')}>
        <Text style={styles.buttonText}>Button 8</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Screen9')}>
        <Text style={styles.buttonText}>Button 9</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => handlePress('Screen10')}>
        <Text style={styles.buttonText}>Button 10</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
