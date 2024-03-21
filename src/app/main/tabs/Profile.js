import { StyleSheet, Text, View, TouchableOpacity, Image,Alert} from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../AppContext'
import HeaderCustuom from '../../custom/HeaderCustuom'
const Profile = (props) => {
  const { isLogin, setIsLogin } = useContext(AppContext)
  const { navigation } = props;
  const Personal_Deltails = () => {
    navigation.navigate('Personal');
  };
  const History_Deltails = () => {
    navigation.navigate('Notification');
  };
  const Address_Deltails = () => {
    navigation.navigate('Address');
  };
  const handleLogin = () => {
    navigation.navigate('Login');
  }
  

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure want to logout!',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: handleLogin
        },
      ],
      { cancelable: false }
    );
  };
  const About = () => {
    navigation.navigate('About');
  };
  const Help = () => {
    navigation.navigate('Help');
  };
  return (
    <View style={styles.container}>
        
      {/* <View style={styles.bar_navigation}>
        <TouchableOpacity style={styles.back_navigation} onPress={navigation.goBack}>
          <Image source={require('../../../../assets/images/ic_back.png')} />
        </TouchableOpacity>
        <Text style={styles.text_navigation}>Setting</Text>
      </View> */}
      <View>
            <HeaderCustuom
                leftIcon={require('../../../../assets/images/btn_back.png')}
                title={'Header'}
                rightIcon={require('../../../../assets/images/btn_back.png')}
            />
           
        </View>

    <View style={{height:42}}>
        <Text style={styles.txt_conatainer_scuryte}>Chung</Text>
        <View style={{height:0.5, width:'auto', backgroundColor:'gray',marginStart: 37,marginEnd:37}}></View>
    </View>
    <View>
      <TouchableOpacity style={styles.item} onPress={Personal_Deltails}>
        <Text style={styles.textItem}>Chỉnh sửa thông tin</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.item}>
        <Text style={styles.textItem}>Cẩm nang trồng cây</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.item} onPress={History_Deltails}>
        <Text style={styles.textItem}>Lịch sử giao dịch</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.item} onPress={Address_Deltails}>
        <Text style={styles.textItem}>Q & A</Text>  
      </TouchableOpacity>
    </View>
    <View style={{height:42}}>
        <Text style={styles.txt_conatainer_scuryte}>Bảo mật và Điều khoản</Text>
        <View style={{height:0.5, width:'auto', backgroundColor:'gray',marginStart: 37,marginEnd:37}}></View>
    </View>
    <View>
      <TouchableOpacity style={styles.item} onPress={About}>
        <Text style={styles.textItem}>Điều khoản và điều kiện</Text>
      </TouchableOpacity>
    </View>
    <View>
      <TouchableOpacity style={styles.item} onPress={Help}>
        <Text style={styles.textItem}>Chính sách quyền riêng tư</Text>
      </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={styles.item} onPress={handleLogout}>
         
          <Text style={styles.txt_logout}>Đăng xuất</Text>
      
        </TouchableOpacity> 
      </View>

    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  arrow: {
    width: 9,
    height: 16,
    position: 'absolute',
    right: 30,
  },
  txt_conatainer_scuryte:{
    color: 'gray',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Lato',
    alignItems: 'center',
    paddingStart: 37,
    paddingVertical: 8,
  },
  textItem: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Lato',
    alignItems: 'center',
    paddingStart: 37,
  },
  txt_logout: {
    color: '#FF0000',
    fontSize: 16,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Lato',
    alignItems: 'center',
    paddingStart: 37,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    // backgroundColor: '#0C0F14',
    // borderColor: '#252a32',
    fontFamily: 'Poppins',
    fontWeight: '700',
    paddingVertical: 11,
  },
  text_navigation: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Poppins',
    alignItems: 'center',
    lineHeight: 36,
  },
  back_navigation: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  bar_navigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingStart: 20,
    paddingTop: 21,
    paddingEnd: 20,
  }
})