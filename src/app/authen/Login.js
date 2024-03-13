import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../main/AppContext';
import AxiosInstance from '../helper/AxiosInstance';
import LinearGradient from 'react-native-linear-gradient';


const Login = (props) => {
    const { isLogin, setIsLogin } = useContext(AppContext)
    const [secureTextEntry, secure] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bugEmail, setBugEmail] = useState('');
    const [bugPassword, setBugPassword] = useState('');
    const [canLogIn, setCanLogin] = useState(false);
    const { navigation } = props;
    const [eyeImage, setEyeImage] = useState(require('../../../assets/images/ic_eye.png'));

    const changeEmail = (email) => {
        setEmail(email);
        if (email !== '') {
            setBugEmail('');

        } else {
            setBugEmail('Please input Email');
            setCanLogin(false);
        }
    };

    const changePassword = (password) => {
        setPassword(password);
        if (password !== '') {
            setBugPassword('');
        } else {
            setBugPassword('Please input Password');
            setCanLogin(false);
        }
    };

    const login = async () => {
        changeEmail(email);
        changePassword(password);

        if (email !== '' && password !== '') {
            setCanLogin(true);
            try {
                const body = {
                    email: email,
                    password: password
                };
                const response = await AxiosInstance().post(`/users/login`, body);

                console.log(response);

                if (response.status) {
                    setIsLogin(true);
                    // Chuyển hướng đến màn hình Home
                    navigation.navigate('Home');
                } else {
                    Alert.alert('Tài khoản hoặc mật khẩu sai');
                }
            } catch (error) {
                console.log(error.response);
                if (!error.status) {
                    Alert.alert('Tài khoản hoặc mật khẩu sai');
                }
            }
        }
    };


    const register = () => {
        navigation.navigate('Register');
    };

    const resetPassword = () => {
        navigation.navigate('ResetPass');
    };

    const toggleSecureTextEntry = () => {
        secure(!secureTextEntry);
        setEyeImage(secureTextEntry ? require('../../../assets/images/ic_eye_lock.png') : require('../../../assets/images/ic_eye.png'));
    };


    return (
        <ImageBackground
            style={styles.bgContainer}
            source={require('../../../assets/images/backgroud.png')}>
            <View style={styles.container}>
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcome}>Chào mừng bạn</Text>
                </View>
                <View style={styles.loginContainer}>
                    <Text style={styles.login}>Đăng nhập tài khoảng</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, bugEmail !== '' && styles.inputBug]}
                        placeholder="Email"
                        placeholderTextColor="#828282"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={changeEmail}
                    />
                    {bugEmail !== '' &&
                        <Text style={styles.textBug}>
                            {bugEmail}
                        </Text>}
                </View>
                <View style={[styles.inputContainer, { marginTop: 15 }]}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#828282"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={secureTextEntry}
                        value={password}
                        onChangeText={changePassword}
                    />
                    <TouchableOpacity
                        style={styles.eyeImg}
                        onPress={toggleSecureTextEntry}>
                        <Image
                            source={eyeImage}
                        />
                    </TouchableOpacity>
                    {bugPassword !== '' && <Text style={styles.textBug}>
                        {bugPassword}
                    </Text>}
                </View>
                <View style={styles.forgotPasswordContainer} >
                    <View style={styles.container_checkbox}>
                    <Image style={{width:22,height:22,}} source={require('../../../assets/images/ri_checkbox-circle-line.png')}/> 
                    <Text style={styles.forgotPassword}>Nhớ tài khoản</Text>
                    </View>
                   
                    <TouchableOpacity onPress={resetPassword}>
                        <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={[styles.buttonContainer, { marginTop: 0 }]}
                    onPress={login} >
                    <LinearGradient
                    start={{x:0, y:0}}
                    end={{x:1, y:1}}
                    colors={[ '#007537','#36C077']}
                    style={[styles.buttonContainer]}>
                        <Text style={styles.buttonText}>Đăng nhập</Text>
                    </LinearGradient>
                </TouchableOpacity>

                {/* <TouchableOpacity
                    style={[styles.buttonContainerLoginGG, { marginTop: 9 }]}
                    onPress={null} >
                    <Image
                        source={require('../../../assets/images/ic_google.png')}
                        style={styles.imgButtonGG} />

                    <Text style={styles.buttonTextGG}>Sign in with Google</Text>
                </TouchableOpacity> */}
                <View style={[styles.horizontal, {marginTop:15}]}>
                    <Text style={styles.line}></Text>
                    <Text style={styles.txt_line}>Hoặc</Text>
                    <Text style={styles.line}></Text>
                </View>
                <View style={styles.registerContainer}>
                    <Text style={styles.register}>Bạn không có tài khoảng </Text>
                    <TouchableOpacity onPress={register}>
                        <Text style={styles.registerText}>  Tạo tài khoản</Text>
                    </TouchableOpacity>
                </View>
                

            </View >
        </ImageBackground>
    )
}

export default Login;

const styles = StyleSheet.create({
    txt_line:{
        marginStart:5,
        marginEnd:5,
        fontSize:12,
        lineHeight:18,
        color:'#000000'
    },
    line:{
        backgroundColor: '#4CAF50',
        height:1,
        width:120,
        alignSelf:'center',
    },
    container_checkbox:{
        flexDirection:'row',
        flex:1,
        
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
    bgContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 14,
        paddingEnd:14,
        paddingStart:14,
        paddingTop:10,
    },
    forgotPasswordText: {
        color: '#009245',
        fontSize: 11,
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: '500',
        lineHeight: 16.5,
        letterSpacing: 0.50,
        justifyContent: 'center',
    },
    forgotPassword: {
        width: 'auto',
        color: '#828282',
        fontSize: 11,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 16.5,
        letterSpacing: 0.50,
        marginStart:5,
    },
    forgotPasswordContainer: {
        width: '100%',
        height: 46,
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
    },
    registerText: {
        color: '#D17842',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.50,
        justifyContent: 'center',
    },
    register: {
        width: 'auto',
        color: '#828282',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.50,
        justifyContent: 'center',
    },
    registerContainer: {
        width: 'auto',
        height: 'auto',
        marginTop: 31,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    eyeImg: {
        width: 30,
        height: 18,
        position: 'absolute',
        right: 17,
        top: 15,
    },
    buttonTextGG: {
        color: '#121212',
        fontSize: 14,
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 26,
        letterSpacing: 0.50,
        marginTop: 16,
        justifyContent: 'center',
    },
    imgButtonGG: {
        width: 15,
        height: 15,
        marginLeft: 25,
        marginTop: 19,
        position: 'absolute'
    },
    buttonContainerLoginGG: {
        width: '100%',
        display: 'flex',
        height: 57,
        backgroundColor: 'white',
        borderRadius: 20,
        border: '1px black solid',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins',
        fontWeight: '700',
        lineHeight: 30,
        letterSpacing: 0.50,
        // wordWrap: 'break-word',
    },
    buttonContainer: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0,
        borderRadius: 20,
        // backgroundColor: '#007537',
    },
    textBug: {
        color: '#FB7181',
        fontFamily: 'Poppins',
        fontWeight: '700',
        marginStart: 6,
        marginTop: 3,
    },
    inputBug: {
        borderColor: '#FB7181',
    },
    input: {
        width: '100%',
        height: 48,
        // backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#8B8B8B',
        fontFamily: 'Poppins',
        fontWeight: '700',
        paddingHorizontal: 17,
        paddingVertical: 11,
        // backgroundColor: '#0C0F14',
        color: '#828282'
    },
    inputContainer: {
        width: '100%',
        height:'auto',
        marginTop: 31,
    },
    loginContainer: {
        marginTop: 0,
    },
    login: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 27,
        letterSpacing: 0.5,
    },
    welcomeContainer: {
        marginTop: 230,
    },
    welcome: {
        color: 'black',
        fontSize: 30,
        fontWeight: '700',
        fontStyle: 'normal',
        lineHeight: 45,
        letterSpacing: 0.5,
    },
    logoImage: {
        width: 93,
        height: 78,
    },
    container: {
        width: '100%',
        height: '100%',
        // backgroundColor: '#0c0f14',

        alignItems: 'center',
        justifyContent: 'center',
        padding: 14,
    },
})