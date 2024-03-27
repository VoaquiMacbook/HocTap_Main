// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Animated, { Easing } from 'react-native-reanimated';

// const { Value, timing } = Animated;

// export default function     () {
//   const opacity = new Value(1);
//   const animate = () => {
//     timing(opacity, {
//       toValue: 0,
//       duration: 500,
//       easing: Easing.inOut(Easing.ease),
//     }).start();
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.box, { opacity }]}>
//         <Text style={styles.text}>Hello World!</Text>
//       </Animated.View>
//       <TouchableOpacity onPress={animate}>
//         <Text>Start Animation</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   box: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'blue',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 20,
//     color: 'white',
//   },
// });