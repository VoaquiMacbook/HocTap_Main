import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const C5 = () => {
    async function logSanPham() {
        const response = await fetch("https://fakestoreapi.com/products?limit=10");
        const sanpham = await response.json();
        
        const electronics = sanpham.filter(sanpham => sanpham.category === "electronics");
        const jewelery = sanpham.filter(sanpham => sanpham.category === "jewelery");
        console.log("Số lượng sản phẩm  electronics:", electronics.length);
        console.log("Số lượng sản phẩm  jewelery:", jewelery.length);


    }
    logSanPham();
    return (
        <View>
            <Text>C5</Text>
        </View>
    )
}

export default C5

const styles = StyleSheet.create({})