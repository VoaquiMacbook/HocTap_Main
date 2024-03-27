import {Button, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withClamp,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Animation2 = () => {
  
  const width = useSharedValue(1);
  function onPress() {
    // sử dụng withSpring để tạo hiệu ứng phóng to thu nhỏ của box
    width.value = withSequence(
      withTiming((width.value = 0), {duration: 1}),
      withTiming((width.value = 1), {duration: 500}),
    );
  }
  const animatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: 'red',
      transform: [{scale: width.value}],
    };
  });
  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />

      <Button style={styles.button} title="Press" onPress={onPress} />
      <View style={styles.containerbutton}>
       
      </View>
    </Animated.View>
  );
};

export default Animation2;

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
    borderRadius: 10,
  },
  textbutton: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});