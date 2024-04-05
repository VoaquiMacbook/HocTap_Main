import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert, ImageBackground, ScrollView, Button } from 'react-native'
import React, { useState } from 'react'
import AxiosInstance from '../helper/AxiosInstance';
import LinearGradient from 'react-native-linear-gradient';

const Register = (props) => {
  const { navigation } = props;
  const [secureTextEntry, secure] = useState(true);
  const [ResecureTextEntry, setResecureTextEntry] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const showPassword = () => {
    secure(!secureTextEntry);
  }

  const showPasswordConfirm = () => {
    setResecureTextEntry(!ResecureTextEntry);
  }

  const register = async () => {
    if (password === confirmPassword) {
      try {
        const body = {
          email: email,
          password: password,
          name: name,
        }

        const response = await AxiosInstance().post('/users/register', body);
        console.log(response);
        if (response.status == true) {
          Alert.alert('Đăng ký thành công');
          navigation.goBack();
        } else {
          Alert.alert('Đăng ký thất bại');
        }

      } catch (error) {
        console.log('Đăng ký lỗi' + error);
        // Alert.alert('Đăng ký lỗi' + error);
        Alert.alert('Đăng ký thất bại')
      }
    }
  };
  const handleRegister = () => {
    // Gửi dữ liệu đăng ký đến server
    fetch('http://localhost:9999/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Xử lý phản hồi từ server nếu cần
      })
      .catch(error => {
        console.error(error);
        // Xử lý lỗi nếu có
      });
  };

  return (
    <ScrollView>
      <ImageBackground
        style={styles.bgContainer}
        source={require('../../../assets/images/bg_register.png')}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn_back} onPress={navigation.goBack} >
            <Image style={{ width: 32, height: 32 }} source={require('../../../assets/images/btn_back.png')}></Image>
          </TouchableOpacity>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>Đăng ký</Text>
          </View>
          <View style={styles.loginContainer}>
            <Text style={styles.login}>Tạo tài khoảng</Text>
          </View>
          <View style={[styles.inputContainer, { marginTop: 10, }]}>
          <TextInput
            style={styles.input}
            placeholder="Họ tên"
            placeholderTextColor="#828282"
            autoCapitalize="characters"
            autoCorrect={true}
            keyboardType="default"
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#828282"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Số điện thoại"
            placeholderTextColor="#828282"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType='numeric'
            // value={email}
            // onChangeText={setEmail}
          />
        </View>
        <View style={[styles.inputContainer, { marginTop: 16 }]}>
          <TextInput
            style={styles.input}
            placeholder="Mật khẩu"
            placeholderTextColor="#828282"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
            value={password}
           onChangeText={text => setPassword(text)}/>
          <TouchableOpacity
            style={styles.eyeImg}
            onPress={showPassword}>
            <Image
              source={require('../../../assets/images/ic_eye.png')}/>
          </TouchableOpacity>
        </View>
        <View style={[styles.inputContainer, { marginTop: 16, marginBottom:16 }]}>
          <TextInput
            style={styles.input}
            placeholder="Nhập lại mật khẩu"
            placeholderTextColor="#828282"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={ResecureTextEntry}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.eyeImg}
            onPress={showPasswordConfirm}>
            <Image
              source={require('../../../assets/images/ic_eye.png')}
            />
          </TouchableOpacity>
          </View>

          <Text style={styles.signIn}>
            Để đăng ký tài khoản, bạn đồng ý{" "}
            <Text style={styles.termsAndPolicy}>
              <Text style={[styles.linkText]}>Terms &</Text>{"\n"}Conditions
            </Text>{" "}
            and{" "}
            <Text style={styles.termsAndPolicy}>
              <Text style={[styles.linkText]}>Privacy Policy</Text>
            </Text>
          </Text>
          <TouchableOpacity
            style={[styles.buttonContainer, { marginTop: 21 }]}
            onPress={handleRegister} >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={['#007537', '#36C077']}
              style={[styles.buttonContainer]}>
              <Text style={styles.buttonText}>Đăng ký</Text>
            </LinearGradient>
          </TouchableOpacity>
          <View style={[styles.horizontal, { marginTop: 15 }]}>
            <Text style={styles.line}></Text>
            <Text style={styles.txt_line}>Hoặc</Text>
            <Text style={styles.line}></Text>
          </View>
          <View style={[styles.horizontal, { marginTop: 20 }]}>
            <TouchableOpacity>
              <Image style={styles.ic_gg} source={require('../../../assets/images/ic_gg.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{ width: 32, height: 32 }} source={require('../../../assets/images/ic_fb.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.sigInContainer}>
            <Text style={styles.signIn}>Tôi đã có tài khoảng </Text>
            {/* <TouchableOpacity onPress={navigation.goBack}>
          <Text style={styles.signInText}>Sign in</Text>
        </TouchableOpacity> */}
            <TouchableOpacity onPress={navigation.goBack}>
              <Text style={styles.signInText}> Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </View >
      </ImageBackground>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
  termsAndPolicy: {
    color: 'green', // Màu xanh lá cho phần "Terms & Conditions" và "Privacy Policy"
    textDecorationLine: 'underline',
  },
  linkText: {
    color: 'green', // Màu xanh lá cho phần "Terms" trong "Terms & Conditions"
  },
  ic_gg: {
    width: 32,
    height: 32,
    marginEnd: 30,
  },
  txt_line: {
    marginStart: 5,
    marginEnd: 5,
    fontSize: 12,
    lineHeight: 18,
    color: '#000000'
  },
  line: {
    backgroundColor: '#4CAF50',
    height: 1,
    width: 120,
    alignSelf: 'center',
  },
  loginContainer: {
    marginTop: '1%',
  },
  btn_back: {
    position: 'absolute',
    left: 10,
    top: 20,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 10,
    shadowColor: '9px 9px 9px #F4AAB9',
  },
  bgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingEnd: 14,
    paddingStart: 14,
    paddingTop: 10,
    position: 'relative',
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
  signInText: {
    color: '#009245',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.50,
    justifyContent: 'center',
  },
  signIn: {
    width: 'auto',
    color: '#000000',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.50,
    justifyContent: 'center',
  },
  sigInContainer: {
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
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '700',
    lineHeight: 26,
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
  },
  input: {
    width: '100%',
    height: 48,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#8B8B8B',
    fontFamily: 'Poppins',
    fontWeight: '700',
    paddingHorizontal: 17,
    paddingVertical: 11,
    color: '#828282'

  },
  inputContainer: {
    width: '100%',
    marginTop: 16,
  },
  registerContainer: {
    marginTop: 16,
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
    // marginTop: 80,
    marginTop: '40%',
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
  },
})