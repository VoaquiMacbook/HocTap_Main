import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, Alert } from 'react-native'
import React from 'react'

const Detail = ({ navigation, route }) => {

  const { data } = route.params;
  const { product } = data;

  const showData = () => {
    const itemData = {
      product_photo: product.photo,
      product_postion: product.postion,
      product_name: product.name,
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.horizontal}>
        <View style={[styles.align_center, styles.horizontal]}>
          <TouchableOpacity style={{ marginEnd: 10 }} onPress={() => { navigation.navigate('HomePage') }}>
            <Image style={styles.img_avt} source={require('../../voaqui/daNenTang2/assets/image/Arrow.png')}></Image>
          </TouchableOpacity>
          <View style={[styles.container_txt_postion]}>
            <Text style={styles.txt_postion}>{product.postion}</Text>
          </View>
          <View>
            <Image style={[styles.img_avt]} source={require('../../voaqui/daNenTang2/assets/image/MoreSquare.png')}></Image>
          </View>
        </View>
      </View>
      <View style={styles.container_img}>
        <Image source={{ uri: product.photo }} style={styles.image} />
      </View>
      <Text style={styles.txt_tiltie}>{product.postion}</Text>
      <Text style={styles.txt_tiltie2}>{product.name}</Text>
      <Image style={styles.txt_tiltie3} source={require('../../voaqui/daNenTang2/assets/image/Rating.png')}></Image>
      <View style={[styles.horizontal, styles.container_btn_postion]}>
        <TouchableOpacity style={styles.btn_postion}>
          <Text style={{ fontSize: 12 }}>Fantasy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_postion}>
          <Text style={{ fontSize: 12 }}>Fantasy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn_postion}>
          <Text style={{ fontSize: 12 }}>Fantasy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.horizontal}>
        <TouchableOpacity style={styles.btn_container}>
          <View style={styles.horizontal}>
            <View style={{ marginEnd: 10 }}>
              <Image style={styles.img_avt} source={require('../../voaqui/daNenTang2/assets/image/Play.png')}></Image>
            </View>
            <Text style={styles.txt_myActivity}>Play Audio</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn_container2}>
          <View style={[styles.horizontal]}>
            <View style={{ marginEnd: 10 }}>
              <Image source={require('../../voaqui/daNenTang2/assets/image/Document.png')}></Image>
            </View>
            <Text style={styles.txt_myActivity2}>Read Book</Text>
          </View>
        </TouchableOpacity>

      </View>

    </ScrollView>
  )
}

export default Detail

const styles = StyleSheet.create({
  test: {
    width: '100%',
    backgroundColor: 'red',
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    padding: 50,
  },
  // cloumn, row
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',

  },
  // align Items
  align_center: {
    width: '100%',
    alignItems: 'center'
  },
  // flex
  flex: {
    flex: 1,
  },
  img_avt: {
    width: 24,
    height: 24,
  },
  container_img: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 28,
  },
  image: {
    width: 260,
    height: 360,
    resizeMode: 'stretch',
  },
  container_txt_postion: {
    width: 222,
    height: 24,
    flexShrink: 0,
    marginEnd: 16
  },
  txt_postion: {
    fontSize: 16,
    color: '#9292A3',
    textAlign: 'center'
  },
  txt_tiltie: {
    fontSize: 20,
    shadowColor: '#010104',
    shadowOpacity: 0.5,
    fontFamily: 'Raleway-Black',
    marginStart: 20,
    width: 287,
    height: 30,
  },
  txt_tiltie2: {
    fontSize: 16,
    marginStart: 20,
    width: 287,
    height: 30,
    color: 'gray',
  },
  txt_tiltie3: {
    marginStart: 20,
  },
  btn_postion: {
    width: 80,
    padding: 5,
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 0.5,
    marginEnd: 8,
    marginTop: 10,
  },
  container_btn_postion: {
    marginStart: 20,
    marginBottom: 32,
  },
  btn_container: {
    backgroundColor: '#4838D1',
    width: 148,
    height: 53,
    borderRadius: 5,
    justifyContent: 'center',
    marginEnd: 10,
    paddingStart: 10
  },
  btn_container2: {
    width: 148,
    height: 53,
    borderRadius: 5,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4838D1',
    paddingStart: 10,
  },
  txt_myActivity: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  txt_myActivity2: {
    color: '#4838D1',
    textAlign: 'center',
    fontSize: 16,

  },


})