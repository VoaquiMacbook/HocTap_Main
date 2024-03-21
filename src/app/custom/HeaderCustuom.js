import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HeaderCustuom = ({ leftIcon, title, rightIcon }) => {
    return (
        <View style={styles.container}>
            
            {!!leftIcon && <Image source={leftIcon} style={styles.icon} />}
            <Text>{title}</Text>
            {!!rightIcon && <Image source={rightIcon} style={styles.icon} />}
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
        width: 25, height: 25
        
    },

})