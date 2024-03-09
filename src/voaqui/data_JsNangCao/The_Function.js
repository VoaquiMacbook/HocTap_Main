import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

const The_Function = () => {

    //  Classic function
    // funtion là một khối mã chương trình được đặt tên có thể tái sử dụng 
    function tenham(Doiso) {
        // thân hàm 
        return 0; // trả về kết quả cuối cùng
    };
    // M1
    function tinhTongClassic(a, b) {
        const phepTinh = a + b;
        return phepTinh;
    };
    // M2
    const tinhTongClassic2 = function (a, b) {
        return a - b;
    };

    // Arrow function
    // Arrow function là một cú pháp ngắn gọn để định nghĩa hàm trong js , trong ECMAScript 6 (ES6) 
    const tenham_Arrow = (a, b) => {
        return a + b;
    };
    // nếu như Arrow có một câu lệnh return thì ta viết gọn lại như sau:
    const ArrowFunction = (a, b) => a + b;
    // nếu như Arrow có một đối số thì ta viết gọn lại như sau:
    const ArrFunction1 = a => a * a;
    // và muốn viết lại hàm function bình thường ta viết lại như sau:
    const ArrFunction1_1 = (a) => {
        return a * a;
    }

    // Callback function
    const arr = [1, 2, 3, 4, 5];
    // const tong = arr.reduce((total, currentValue) => total + currentValue);
    // console.log(`Tổng của mảng là: ${tong}`);
    arr.forEach(item => {
        // do anything
        let result = item + 1;
        console.log(`Giá trị mới của item ${item} sau khi cộng thêm 1 là: ${result}`);
    });

    // Test

    // => test classic function 
    const tongClassic1 = tinhTongClassic(10, 10);
    const tongClassic2 = tinhTongClassic2(10, 3);
    console.log(tongClassic1, tongClassic2);
    // => test Arrow function
    const tongArrow = tenham_Arrow(8, 8);
    const tongArrow_1return = ArrowFunction(8, 5);
    const tongArrow_1doiSo = ArrFunction1(5);
    console.log(tongArrow, tongArrow_1return, tongArrow_1doiSo);
    // => test CallBack function
    function myCalculator(a, b, myCallback) {
        let tong = a + b;
        myCallback(tong);
    };
    myCalculator(3, 4, (sum) => {
        console.log(`Tong = ${sum}`);
      
    })
    return (
        <View>
            <Text>The_Function</Text>
           <FlatList
                data={arr}
                renderItem={({ item }) => (
                    <Text>{item}</Text>
                )}
            />
        </View>
    )
}

export default The_Function

const styles = StyleSheet.create({})