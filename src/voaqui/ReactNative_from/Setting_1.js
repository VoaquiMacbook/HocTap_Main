import { View, Text, FlatList, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Setting_1 = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.txt_tilte}>Settings</Text>
                <Text style={styles.txt_tilte_m}>Personal</Text>
                <TouchableOpacity style={styles.horizontal}>
                    <Text style={[styles.txt_tilte_s, styles.flex]}>Profile</Text>
                    <Image style={styles.ic_right} source={require('../../assets/image/ic_right2.png')} />
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.horizontal}>
                    <Text style={[styles.txt_tilte_s, styles.flex]}>Shipping Address</Text>
                    <Image style={styles.ic_right} source={require('../../assets/image/ic_right2.png')} />
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.horizontal}>
                    <Text style={[styles.txt_tilte_s, styles.flex]}>Payment methods</Text>
                    <Image style={styles.ic_right} source={require('../../assets/image/ic_right2.png')} />
                </TouchableOpacity>
                <View style={styles.line}></View>
                <Text style={styles.txt_tilte_m}>Shop</Text>
                <TouchableOpacity style={styles.horizontal}>
                    <Text style={[styles.txt_tilte_s, styles.flex]}>Country</Text>
                    <Text style={styles.txt_tilte_xs}>Vietnam</Text>
                    <Image style={styles.ic_right} source={require('../../assets/image/ic_right2.png')} />
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.horizontal}>
                    <Text style={[styles.txt_tilte_s, styles.flex]}>Currency</Text>
                    <Text style={styles.txt_tilte_xs}>$ USD</Text>
                    <Image style={styles.ic_right} source={require('../../assets/image/ic_right2.png')} />
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.horizontal}>
                    <Text style={[styles.txt_tilte_s, styles.flex]}>Sizes</Text>
                    <Text style={styles.txt_tilte_xs}>UK</Text>
                    <Image style={styles.ic_right} source={require('../../assets/image/ic_right2.png')} />
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.horizontal}>
                    <Text style={[styles.txt_tilte_s, styles.flex]}>Terms and Conditions</Text>
                    <Image style={styles.ic_right} source={require('../../assets/image/ic_right2.png')} />
                </TouchableOpacity>
                <View style={styles.line}></View>
                <Text style={styles.txt_tilte_m}>Account</Text>
                <TouchableOpacity style={styles.horizontal}>
                    <Text style={[styles.txt_tilte_s, styles.flex]}>Language</Text>
                    <Text style={styles.txt_tilte_xs}>English</Text>
                    <Image style={styles.ic_right} source={require('../../assets/image/ic_right2.png')} />
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity style={styles.horizontal}>
                    <Text style={[styles.txt_tilte_s, styles.flex]}>About Slada</Text>
                    <Image style={styles.ic_right} source={require('../../assets/image/ic_right2.png')} />
                </TouchableOpacity>
                <View style={styles.line}></View>
                <Text style={styles.txt_tilte_xs_2}>Delete My Account</Text>
                <Text style={styles.txt_tilte_m_2}>Slada</Text>
                <Text style={styles.txt_tilte_xss}>Version 1.0 April, 2020</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Setting_1
const styles = StyleSheet.create({
    // container
    container: {
        paddingEnd: '8%',
        paddingStart: '8%',
        maxHeight:'95%',
    },
    // cloumn, row
    vertical: {
        flexDirection: 'column',
    },
    horizontal: {
        flexDirection: 'row',
    },
    // flex
    flex: {
        flex: 1,
    },
    // item
    item: {
        padding: 20,
        margin: 2,
        borderColor: "pink",
    },
    // line
    line: {
        width: '100%',
        height: 0.5,
        backgroundColor: 'gray',
        marginTop: '2%',
        marginBottom: '8%',
    },
    // custom tilte
    txt_tilte: {
        fontSize: 28,
        lineHeight: 85,
        fontWeight: '700',
        fontFamily: 'raleway',
        color: '#202020',
        letterspacing: -0.28,
    },
    txt_tilte_xs_2:{
        paddingBottom: '8%',
        fontSize: 13,
        fontWeight: 'bold',
        marginEnd:'2%',
        color:'#D97474',
    },
    txt_tilte_xs:{
        fontSize: 12,
        fontWeight: '400',
      color:'black',
      marginRight:16,
        alignSelf:'center'
        
    },
    txt_tilte_xss:{
        fontSize: 12,
        fontWeight: '400',
        color:'black'
    },
    txt_tilte_s: {
        fontSize: 16,
        fontWeight: '750',
        fontFamily: 'raleway',
        color: '#202020',
        
        paddingBottom: '4%',
        textAlignVertical:'center',
    },
    txt_tilte_m_2: {
        fontSize: 20,
        fontWeight: '900',
        
        fontFamily: 'raleway',
        color: '#202020',
      
    },
    txt_tilte_m: {
        fontSize: 20,
        fontWeight: '800',
        fontFamily: 'raleway',
        color: '#202020',
        paddingBottom: '10%'
    },
    ic_right: {
        width: 16,
        height: 15,
        alignSelf:'center',
        marginVertical:'2%',
    }

})