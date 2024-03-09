import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const C3 = () => {
  // c3
  const arr3 = [4, 6, 8, 2, 7, 9, 3];
  const nunber = arr3.filter(item => item % 2 === 0);
  const soLonNhatNguyen = Math.max(...nunber);

  arr3.forEach(item => {
    if (item % 2 == 0) {
      return item;
    } else {
      return 0;
    }

  });
  console.log(soLonNhatNguyen);
  return (
    <View>
      <Text>C3</Text>
    </View>
  )
}

export default C3

const styles = StyleSheet.create({})