import React from 'react';
import {StyleSheet, View, Button,TouchableOpacity,Text} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';

const Animation5 = () => {
  
  const rotateZ = useSharedValue(0);

  const onPress = () => {
    rotateZ.value = withSequence(
      withTiming(90, {duration: 200, easing: Easing.linear}), // Xoay sang phải 45 độ
      withTiming(0, {duration: 100, easing: Easing.linear}), // Trả về vị trí ban đầu
    );
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotateZ: `${rotateZ.value}deg`}],
      backgroundColor: 'red',
      width: 100,
      height: 100,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Button title="Press" onPress={onPress} />
      
    </View>
  );
};

export default Animation5;

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
    height: 100,
    width: 100,
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