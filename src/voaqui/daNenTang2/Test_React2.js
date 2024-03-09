import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Test_React2 = (props) => {
    const { navigation } = props;
    const next_HomePage = () => {
        navigation.navigate('HomePage');
      }
    return (
        <View style={styles.contaiter}>
            <View style={styles.v_center}>
                <Image style={styles.img_avt} source={require('../../voaqui/daNenTang2/assets/image/logo.png')}></Image>
            </View>
            <Text style={styles.txt_or}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
            />
            <TextInput
                style={styles.input}
                placeholder="Date of Birth"
            />
            <Text style={styles.txt_or2}>
                By signing up, you agree to our{' '}
                <Text style={styles.orangeText}>Terms</Text>, {' '}
                <Text style={styles.orangeText}>Data Policy</Text>, and{' '}
                <Text style={styles.orangeText}>Cookies Policy</Text>.
            </Text>
            <View style={styles.v_center}>           
            <TouchableOpacity style={styles.btn_container} onPress={next_HomePage}>
                <Text style={styles.txt_myActivity}>Register</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.v_center}>           
            <TouchableOpacity style={styles.btn_container2}>
                <Text style={styles.txt_myActivity2}>Cancel</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Test_React2

const styles = StyleSheet.create({
    contaiter: {
        padding: 51,
    },
    img_avt: {
        width: 110,
        height: 110,
    },
    v_center: {
        width: '100%',
        alignItems: 'center'
    },
    txt_or: {
        fontWeight: 'bold',
        fontSize: 18, marginTop: '5%',
        color: 'black',
        marginStart: 20,
    },
    txt_or2: {
        fontSize: 14,
        marginTop: '5%',
        color: 'black',
        marginStart: 28,
        fontWeight: 400,
        width: 267,
    },
    input: {
        height: 53,
        margin: 12,
        padding: 20,
        backgroundColor: '#EBEBF5',
        borderRadius: 10,
    },
    orangeText: {
        color: '#F77A55',
        fontWeight: 'bold'
    },
    btn_container: {
        backgroundColor: '#4838D1',
        width: 295,
        height: 55,
        borderRadius: 5,
        justifyContent: 'center',
        marginVertical: '6%',
    },
    btn_container2: {
        width: 295,
        height: 55,
        borderRadius: 5,
        justifyContent: 'center',
        borderWidth:1,
        borderColor:'#4838D1',
    },

    txt_myActivity: {
        color: 'white',
        textAlign: 'center',
        fontWeight:'500',
        fontSize:16,
    },
    txt_myActivity2: {
        color: '#4838D1',
        textAlign: 'center',
        fontWeight:'500',
        fontSize:16,
       
    },
})