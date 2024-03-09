import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Kt01_JsNangCao = () => {
    // c1
    const ageOne = [5, 2, 4, 1, 15, 8, 3, 10, 20];
    const ageTwo = [16, 6, 10, 5, 6, 1, 4];
    const ageAll = [...new Set(ageOne.concat(ageTwo))];
    console.log(ageAll);

    // c2
    const ageArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const ageFinal = ageArray.map(item => {
        if (item % 2 === 0) {
            return item;
        } else {
            return item ** 2;
        }
    });
    console.log(ageFinal);

    // c3
    const ageSort = ageFinal.sort((a, b) => a - b);
    console.log(ageSort);

    // c4
    const resultArray = ageOne.length > ageTwo.length ? ageOne : ageTwo;
    console.log(resultArray);

    // c5
    let sum = 0;
    ageFinal.forEach(item => {
        if (item >= 10) {
            sum += item;
        }
    });
    console.log(sum);

    // c6 => html

    // c9
    const Menber = function (name, address, phone, cccd) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.cccd = cccd;
    }

    class Person {
        constructor(name, address, phone, cccd) {
            this.name = name;
            this.address = address;
            this.phone = phone;
            this.cccd = cccd;
        }


        info() {
            return `Tôi tên là ${this.name}, 
                    đang sống tại ${this.address},
                    số điện thoại ${this.phone}, 
                    số CMND là ${this.cccd}`;
        }
    };
    class User extends Person {
        constructor(name, address, phone, cccd, dateSalary) {
            super(name, address, phone, cccd);
            this.dateSalary = dateSalary;
        }
        info(){
            return `Tôi tên là ${this.name}, 
            đang sống tại ${this.address},
            số điện thoại ${this.phone}, 
            số CMND là ${this.cccd},
            ngày ${this.dateSalary}`;
        }
    }
    const thongTinUser = new User('qui', '123 tan binh', '0908732558', '12355678','5/12/2002');
    console.log(thongTinUser.info());







   

    return (
        <View>
            <Text>Kt01_JsNangCao</Text>
        </View>
    )
}

export default Kt01_JsNangCao

const styles = StyleSheet.create({})