import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const C6 = () => {
    async function logSanPham() {
        const response = await fetch("https://fakestoreapi.com/products?limit=10");
        const sanpham = await response.json();

        const electronics = sanpham.filter(product => product.price >=100);
        electronics.forEach(product => {
            product.discount = '30%';
        });
        console.log("Các sản phẩm electronics sau khi thêm thuộc tính discount:", electronics);
    }

    logSanPham();

  return (
    <View>
      <Text>C6</Text>
    </View>
  )
}

export default C6

const styles = StyleSheet.create({})