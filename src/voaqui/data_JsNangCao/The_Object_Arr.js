import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const The_Object_Arr = () => {
    // Object and Array
    // 2 cách tạo obj cũ :

    // M1:
    let obj = new Object();
    console.log(typeof (obj)); // check kiểu dữ liệu của data 
    obj.Name = "AQuiVo";
    obj.age = 22;
    obj.display = function () {
        console.log(`Name: ${this.Name}, ${this.age}`);
    }
    obj.display();

    // M2:
    // function constructor
    function SinhVien(id, name, age) {
        this.Id = id;
        this.Name = name;
        this.Age = age;
        this.display = function () {
            console.log(this.Id, this.Name, this.Age);
        }
    }
    let sv = new SinhVien("ps001", "Tèo", 18);
    let arr = [];
    console.log(sv);
    console.log(sv.Id);
    sv.display();

    let Sv = {Id: "ps0001", Name: "Tí tởn", Age: 20};
    console.log(Sv.Id);

    const arrSv = [
        {Id: "ps0001", Name: "Tí tởn 1", Age: 21},
        {Id: "ps0002", Name: "Tí tởn 2", Age: 22},
        {Id: "ps0003", Name: "Tí tởn 3", Age: 23},
        {Id: "ps0004", Name: "Tí tởn 4", Age: 24},
    ];
    const svToFind = arrSv.find(sv => sv.Id === "ps0003");  // lấy obj trong mảng array 
    const tenSv = svToFind ? svToFind.Name : "Không tìm thấy"; // lấy 1 phần tử trong obj 
    console.log(tenSv);

    //ES6 
    class Person{
        constructor(id, name, age){
            this.id = id;
            this.name = name;
            this.age = age;
        }
        setId(id){
            this.id = id;
        };
        setName(name){
            this.name = name;
        }
    };
    let myObj = new Person("ps0001", "qui", 22);
    console.log(myObj);
    myObj.setId("ps0002");
    console.log(myObj);
    myObj.setName("hoa");
    console.log(myObj);
    return (
        <View>
            <Text>The_Object_Arr</Text>
            <Text>name: {obj.Name}</Text>
            <Text>name: {tenSv}</Text>
        </View>
    )
}

export default The_Object_Arr

const styles = StyleSheet.create({})