import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Thi = () => {
const arr = [4,6,8,2,7,9,3];
const Number = 12;
let sum = 0;
//c1
for (let i = 0; i < arr.length; i++) {
    if (Number % arr[i] === 0) {
        sum += arr[i];
    }
}
console.log(`Tổng các phần tử là ước của 12 trong mảng là: ${sum}`);

  return (
    <View>
      <Text>Thi</Text>
    </View>
  )
}

export default Thi

const styles = StyleSheet.create({})