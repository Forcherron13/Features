import React, { useRef } from 'react';
import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const Screen2 = () => {
  const translateY = useSharedValue(SCREEN_HEIGHT);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  const openBottomSheet = () => {
    translateY.value = withSpring(SCREEN_HEIGHT / 2); // Aadha screen se upar
  };

  const closeBottomSheet = () => {
    translateY.value = withSpring(SCREEN_HEIGHT); // Pura neeche
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Button title="Open Bottom Sheet" onPress={openBottomSheet} />
      <PanGestureHandler
        onGestureEvent={(event) => {
          translateY.value = withSpring(Math.max(event.nativeEvent.translationY, 0));
        }}
        onEnded={() => {
          if (translateY.value > SCREEN_HEIGHT / 2) {
            closeBottomSheet();
          } else {
            openBottomSheet();
          }
        }}
      >
        <Animated.View style={[styles.bottomSheet, animatedStyle]}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Swipe down to close</Text>
          </View>
          <View style={styles.content}>
            <Text>This is the Bottom Sheet content.</Text>
          </View>
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: SCREEN_HEIGHT / 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
});

export default Screen2;
