import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderCustuom from './HeaderCustuom'

const Bai1 = () => {
    return (
        <View>
            <HeaderCustuom
                leftIcon={require('../../../assets/images/ic_cart.png')}
                title={'Header'}
                rightIcon={require('../../../assets/images/ic_user.png')}
            />
            <HeaderCustuom
                leftIcon={require('../../../assets/images/ic_cart.png')}
                title={'Trang chủ'}
                rightIcon={require('../../../assets/images/ic_cart.png')}
                />
            <HeaderCustuom
                leftIcon={require('../../../assets/images/ic_cart.png')}/>
        </View>
    )
}

export default Bai1

const styles = StyleSheet.create({})