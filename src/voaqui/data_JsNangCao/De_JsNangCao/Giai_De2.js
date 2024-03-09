import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Giai_De2 = () => {
    async function logSanPham() {
        const response = await fetch("https://fakestoreapi.com/products?limit=10");
        const sanpham = await response.json();

        // console.log(sanpham);
        const highRatedProducts = sanpham.filter(product => product.rating.rate > 3);
        console.log(`Số lượng sản phẩm có điểm rate > 3 là: ${highRatedProducts.length}`);


        const electronics = sanpham.filter(product => product.category === "electronics");
        electronics.forEach(product => {
            product.discount = '30%';
        });
        console.log("Các sản phẩm electronics sau khi thêm thuộc tính discount:", electronics);

        // // Lọc mảng để tìm các sản phẩm thuộc danh mục "electronics" và "jewelery"
        // const electronics = sanpham.filter(sanpham => sanpham.category === "electronics");
        // const jewelery = sanpham.filter(sanpham => sanpham.category === "jewelery");

        // console.log(sanpham);
        // // In ra số lượng sản phẩm của mỗi danh mục
        // console.log("Số lượng sản phẩm trong danh mục electronics:", electronics.length);
        // console.log("Số lượng sản phẩm trong danh mục jewelery:", jewelery.length);
    }

    logSanPham();


    return (
        <View>
            <Text>Giai_De2</Text>
        </View>
    )
}

export default Giai_De2

const styles = StyleSheet.create({})