import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const C4 = () => {
    async function logSanPham() {
        const response = await fetch("https://fakestoreapi.com/products?limit=10");
        const sanpham = await response.json();
    
        console.log(sanpham);
    
        // const electronics = sanpham.filter(sanpham => sanpham.category === "electronics");
        // const jewelery = sanpham.filter(sanpham => sanpham.category === "jewelery");
        // console.log("Số lượng sản phẩm trong danh mục electronics:", electronics.length);
        // console.log("Số lượng sản phẩm trong danh mục jewelery:", jewelery.length);
    
        
      }
    
      logSanPham();
  return (
    <View>
      <Text>C4</Text>
    </View>
  )
}

export default C4

const styles = StyleSheet.create({})