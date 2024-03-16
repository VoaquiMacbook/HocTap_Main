import React from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
  withRepeat,
} from 'react-native-reanimated';

const initialOffset = 200;
const duration = 1000;

export default function App() {
  const offset = useSharedValue(initialOffset);
  const animatedStyles = useAnimatedStyle(() => ({
    // transform: [{ translateX: offset.value }],
    transform: [{ translateY: offset.value }],
  }));

const handlePress = () => {
            offset.value = withRepeat(
              // highlight-start
              withSequence(
                withTiming(-initialOffset, { duration, easing: Easing.cubic }),
                // withTiming(0, { duration, easing: Easing.cubic }),
                withTiming(initialOffset, { duration, easing: Easing.cubic })
              ),
              // highlight-end
              -0,
              true
            ); 
}

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyles]} />
     <TouchableOpacity onPress={handlePress} style={{backgroundColor:'green',borderRadius:20, width:100,height:50, alignItems:'center',alignSelf:'center',justifyContent:'center'}}>
        <Text style={{ color:'white'}} >click</Text>
     </TouchableOpacity>
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
  },
});
