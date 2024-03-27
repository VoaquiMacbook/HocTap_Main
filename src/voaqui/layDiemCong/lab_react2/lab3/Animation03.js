import {Button, StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withClamp,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const Animation3 = () => {
 
  const width = useSharedValue(-300);
  function onPress() {
    width.value = withSequence(
      withTiming(-300, {
        duration: 1,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
      withTiming(300, {
        duration: 3000,
        easing: Easing.bezier(0.25, 0.1, 0.25, 1),
      }),
    );
  }
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: 'red',
      transform: [{translateY: width.value}],
    };
  });
  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />

      <Button style={styles.button} title="Press" onPress={onPress} />
      
    </Animated.View>
  );
};

export default Animation3;

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
  },
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#b58df1',
    marginVertical: 20,
  },
  containerbutton: {
    marginTop: 50,
    width: '100%',
    height: 40,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnbutton: {
    width: '80%',
    height: '100%',
    backgroundColor: '#00FFCC',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
  },
  textbutton: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});