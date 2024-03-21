import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext } from 'react'

const HeaderCustuom = ({ leftIcon, title, rightIcon },props) => {
    const { navigation } = props;
    const register = () => {

    };
    return (
       
            <View style={styles.horizontal}>
                <TouchableOpacity style={styles.flex} onPress={() => navigation.navigate('Cart')}>
                {!!leftIcon && <Image source={leftIcon} style={styles.icon} />}
                </TouchableOpacity>
                <View style={styles.flex2}>
                <Text style={styles.txt_header}>{title}</Text>
                </View>
                <View>
                {!!rightIcon && <Image source={rightIcon} style={styles.icon} />}
                </View>
            </View> 
       
    )
}

export default HeaderCustuom

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        margin: 10,
        padding: 10
    },
    icon: {
        width: 25, height: 25,
        tintColor:'black',

    },
    txt_header:{
        fontSize:16,
        fontWeight:'500',
    },
    // cloumn, row
    vertical: {
        flexDirection: 'column',
    },
    horizontal: {
        flexDirection: 'row',
        marginEnd: 10,
        marginStart: 10,
        margin: 10,   
      
    },
    // flex
    flex: {
        flex: 1,
        alignSelf:'center'
    },
    flex2: {
        flex: 1.3,
        alignSelf:'center',
        
    },

})