import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { AppContext } from '../AppContext';
import HeaderCustuom from '../../custom/HeaderCustuom';

const Detail = ({ navigation, route }, props) => {
  const { data } = route.params;
  const { product } = data;
  const { cart, setCart, heart, setHeart } = useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(false); // Define isFavorite state
  const [productFavorites, setProductFavorites] = useState([]); // Define productFavorites state

  const addFavorite = () => {
    const itemFavorite = {
      product_id: product._id,
      product_name: product.name,
      product_image: product.image,
      product_description: product.description,
      product_voting: product.voting,
      prodct_rating: product.rating
    };

    if (isFavorite) {
      const updatedFavorites = productFavorites.filter(
        (favoriteItem) => favoriteItem.product_id !== itemFavorite.product_id
      );

      setProductFavorites(updatedFavorites);
      setIsFavorite(false);
      Alert.alert('Removed from Favorites!');
    } else {

      const isAlreadyInFavorites = productFavorites.some(
        (favoriteItem) => favoriteItem.product_id === itemFavorite.product_id
      );

      if (isAlreadyInFavorites) {

        const updatedFavorites = productFavorites.filter(
          (favoriteItem) => favoriteItem.product_id !== itemFavorite.product_id
        );

        setProductFavorites(updatedFavorites);
        setIsFavorite(false);
        Alert.alert('Removed from Favorites!');
      } else {

        setProductFavorites([...productFavorites, itemFavorite]);
        setIsFavorite(true);
        Alert.alert('Added to Favorites!');

        const existingItemheart = heart.find(item => item._id === product._id);
        if (existingItemheart) {
          const updatedHeart = heart.map(item => {
            if (item._id === product._id) {
              return { ...item, number: item.number + 1 };
            }
            return item;
          });
          setHeart(updatedHeart);
        } else {
          setHeart(prevHeart => [...prevHeart, { _id: product._id, number: 1 }]);
        }
      }
    }
  };



  const addToCart = () => {
    const existingItem = cart.find(item => item._id === product._id);

    if (existingItem) {
      const updatedCart = cart.map(item => {
        if (item._id === product._id) {
          return { ...item, number: item.number + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart(prevCart => [...prevCart, { _id: product._id, number: 1 }]);
    }
    Alert.alert('Added to Cart!');
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar backgroundColor="transparent" translucent />
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.goBack()}>
          <Image style={[styles.imgHeader, { width: 28, height: 28 }]} source={require('../../../../assets/images/chevron-left.png')} />
        </TouchableOpacity>
        <Text style={styles.txt_header}>Spider Plant</Text>
        <TouchableOpacity style={styles.btnMenu} onPress={addFavorite}>
          <Image style={styles.imgHeader} source={require('../../../../assets/images/shopping-cart.png')} />
        </TouchableOpacity>
      </View>
      <View style={{ backgroundColor: '#F6F6F6', padding: 5, position: 'relative' }}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.horizontal_leftRight}>
          <View style={styles.flex}>
            <Image style={styles.btn_left} source={require('../../../../assets/images/fi_chevron-left.png')} />
          </View>
          <View>
            <Image style={styles.btn_left} source={require('../../../../assets/images/fi_chevron-right.png')} />
          </View>
        </View>
      </View>
      <View style={styles.horizontal}>
        <TouchableOpacity style={styles.btnBottom}>
          <Text style={styles.txtBtnRight}>Cây trồng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnBottom}>
          <Text style={styles.txtBtnRight}>Ưa bóng</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.txtPrice}>{product.price}.000đ</Text>


      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.goBack()}>
          <Image style={styles.imgHeader} source={require('../../../../assets/images/ic_back.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnMenu} onPress={addFavorite}>
          <Image style={styles.imgHeader} source={require('../../../../assets/images/ic_favorite_red.png')} />
        </TouchableOpacity>
      </View> */}


      {/* <View style={styles.containerProduct}>
        <View style={styles.left}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.location}>{product.location} From Africa</Text>

            <View style={styles.ratingC}>
              <Image style={styles.imgRating} source={require('../../../../assets/images/ic_star.png')} />
              <Text style={styles.txtRating}>{product.rating} <Text style={styles.numberRating}>({product.voting})</Text></Text>
            </View>
          </View>
        </View>

        <View style={styles.right}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.btn} onPress={() => addToCart(product)}>
              <Image style={styles.imgBtn} source={require('../../../../assets/images/ic_coffee.png')} />
              <Text style={styles.txtBtn}>Bean</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, { marginStart: 20 }]}>
              <Image style={styles.imgBtn} source={require('../../../../assets/images/ic_location.png')} />
              <Text style={styles.txtBtn}>Africa</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.btnBottom}>
            <Text style={styles.txtBtnRight}>Medium Roasted</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {/* <View style={styles.body}>
        <Text style={styles.Description}>Description</Text>
        <Text style={styles.textBody}>{product.description}</Text>
        <View style={styles.outerView}>
          <Text style={styles.textLabel}>Size</Text>
          <View style={styles.btnSizeContainer}>
            <TouchableOpacity style={styles.btnSize}><Text style={styles.btnText}>M</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}><Text style={styles.btnText}>L</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btnSize}><Text style={styles.btnText}>XL</Text></TouchableOpacity>
          </View>
        </View>
      </View> */}
      {/* <View style={styles.detailProContainer}>
        <Text style={styles.title}>Description</Text>

            <Text style={styles.detailPro}>
           gjahsdsjfbzcg</Text>
        </View> */}
      <View style={{margin:20}}>
        <View style={styles.detail}>
          <Text style={styles.detailPro}>Chi tiết sản phẩm </Text>
        </View>
        <View style={styles.detail1}>
          <Text style={styles.detailPro}>Kích cỡ  </Text>
          <Text style={styles.detailPro}>Nhỏ  </Text>
        </View>
        <View style={styles.detail1}>
          <Text style={styles.detailPro}>Xuất sứ </Text>
          <Text style={styles.detailPro}>Châu Phi </Text>
        </View>
        <View style={styles.detail1}>
          <Text style={styles.detailPro}>Tình trạng  </Text>
          <Text style={styles.qly}>Còn 156 sp </Text>
        </View>
        <View style={styles.horizontal_tamTinh}>
        <Text style={styles.textPrice}>Đã chọn 0 sản phẩm</Text>
        <Text style={styles.textPrice2}>Tạm tính</Text>
        </View>      
        <View style={styles.footer_container} >
          <View style={styles.tong}>
            <Image source={require('../../../../assets/images/minus-square.png')}/>
            <Text style={styles.price}>1</Text>
            <Image source={require('../../../../assets/images/minus-square.png')}/>
          </View>
          <Text style={{fontSize:24,fontWeight:'400'}}><Text>0</Text>đ</Text>
        </View>
      </View>
      <View style={styles.payMent}>
        {/* <View style={styles.Paymentleft}>
          <Text style={styles.textPrice}>Price</Text>
          <Text style={styles.txtPrice}>${product.price}</Text>
        </View> */}
        <View style={styles.Paymentright}>
          <TouchableOpacity style={styles.btnCart} onPress={addToCart}>
            <Text style={styles.txtCart}>CHỌN MUA</Text>
          </TouchableOpacity>
        </View>
      </View>


    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  ///
  tong: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  head: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,

    justifyContent: 'space-between',
    alignItems: 'center'
  },
  footer_container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detail: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor:'gray',
    margin: 10,

  },
  detail1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 0.5,
    margin: 10,
    borderBottomColor:'gray',
  },
  title:
  {
    fontFamily: 'Raleway-Bold',
    fontSize: 17,
    lineHeight: 21,

    color: '#000',


  },
  buy:
  {
    backgroundColor: '#004CFF',
    width: 128,
    height: 40,
    alignItems: 'center',
    borderRadius: 11,
    justifyContent: 'center',

  },
  textCart:
  {
    fontSize: 17,
    lineHeight: 21,
    color: 'white'
  },
  addToCart:
  {
    backgroundColor: '#009245',
    width: '100%',
    height: 40,
    alignItems: 'center',
    borderRadius: 11,
    justifyContent: 'center',

  },
  like:
  {
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
    width: 47,
    borderRadius: 11,
    height: 40,
  },

  inputText:
  {

    fontFamily: 'Raleway-Medium',
    fontSize: 29,
    color: '#1A3168'

  },
  inputContainer:
  {
    alignItems: 'center',

    backgroundColor: '#E5EBFC',
    width: 74,
    height: 50,
    borderRadius: 16,
    marginHorizontal: 10
  },
  plusDecre:
  {

    flexDirection: 'row'
  },
  titleQuantily:
  {
    fontFamily: 'Raleway-Bold',
    fontSize: 17,
    lineHeight: 21,
    color: 'black',


  },
  btnValue:
  {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#004BFE'
  },

  textSizeDiable:
  {
    fontFamily: 'Raleway-Medium',
    color: '#BEC8E5',
    lineHeight: 18,
    fontSize: 14,

  },
  textSize:
  {
    fontFamily: 'Raleway-Medium',
    color: '#fff',
    lineHeight: 18,
    fontSize: 14,

  },
  btnSize:
  {
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 25,
    margin: 10,
    backgroundColor: '#009245'
  },

  sizeContainer:
  {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },

  detailPro:
  {
    color: '#000',
    fontSize: 14,
    fontWeight:'400',
    lineHeight: 21,
  },
  qly:
  {
    color: 'green',
    fontSize: 14,
    fontWeight:'400',
    lineHeight: 21,
  },
  detailProContainer:
  {
    marginVertical: 14
  },

  btnShare:
  {
    paddingTop: 4,
    justifyContent: 'center',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#FFEBEB'
  },
  price:
  {
    color: '#000',
    fontSize: 16,
    lineHeight: 31,
    marginEnd:32,
    marginStart:32,

  },
  priceAnd:
  {
    
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  body: {
    paddingVertical: 15,
    flexDirection: 'column',
    flex: 3,
    paddingHorizontal: 26,
    // backgroundColor: 'white'
    backgroundColor: '#fff'
  },
  headerImage:
  {
    flex: 2,
    width: '80%'
  },

  footer:
  {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,

  },


  /////

  // cloumn, row
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
    marginEnd: 30,
    marginStart: 30,
    marginTop: 30,
    marginBottom: 10,
  },
  horizontal_tamTinh: {
    flexDirection: 'row',
    marginTop: 30,
    marginBottom: 10,
  },
  // flex
  flex: {
    flex: 1,
  },
  horizontal_leftRight: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    paddingEnd: 22,
    paddingStart: 22,
    marginVertical: 110,
  },

  txt_header: {
    fontSize: 16,
    fontWeight: '500',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  outerView: {
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  textLabel: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
    color: '#AEAEAE'
  },
  btnSizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btnSize: {
    width: 103,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    borderColor: '#AEAEAE'
  },
  btnText: {
    fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    color: '#AEAEAE'
  },
  txtCart: {
    width: '100%',
    height: 'auto',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    alignItems: 'center',
  },
  btnCart: {
    width: '100%',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007537',
    borderRadius: 10,
    marginEnd: 10,
    marginStart: 10,
  },
  Paymentright: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
  },
  txtPrice: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'Poppins',
    color: '#007537',
    marginStart: 30,
  },
  dola: {
    color: '#D17842',
  },
  textPrice: {
   flex:1,
    color: 'black',
    fontSize: 13.2,
    fontWeight: '200',
    alignItems: 'center',
    marginTop:15,
    marginBottom:3,
  },
  textPrice2: {
    color: 'black',
    fontSize: 13.2,
    fontWeight: '200',
    alignItems: 'center',
    marginTop:15,
    marginBottom:3,
  },
  Paymentleft: {
    flexDirection: 'row',
  },
  payMent: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
    bottom: 1,
    position: 'absolute',
  },
  textSize: {
    color: '#AEAEAE',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    marginTop: 8,
  },
  textBody: {
    color: '#fff',
    fontSize: 12,
    marginTop: 15,
    fontFamily: 'Poppins',
    fontWeight: '400',
  },
  Description: {
    color: '#AEAEAE',
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    lineHeight: 20,
  },
  body: {
    top: 350,
    height: 'auto',
    paddingHorizontal: 18.5,
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: 19.8,
  },
  numberRating: {
    color: '#AEAEAE',
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Poppins',
    lineHeight: 20,
  },
  btnBottom: {
    backgroundColor: '#007537',
    width: 76,
    height: 28,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    marginEnd: 5

  },
  txtRating: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 20,
    marginStart: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgRating: {
    width: 22.29,
    height: 22.29,
  },
  ratingC: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25.43,
  },
  rating_buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  txtBtn: {
    color: '#aeaeae',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
  },
  imgBtn: {
    width: 32,
    height: 32,
  },
  btn: {
    backgroundColor: '#141921',
    padding: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    width: '100%',
    height: 'auto',
    marginTop: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  right: {
    width: '40%',
    top: 0,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // marginTop: 0,
  },
  location: {
    color: '#AEAEAE',
    fontFamily: 'Poppins',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 20,
  },
  name: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 20,
  },
  nameContainer: {
    width: '100%',
    paddingTop: 31,
    display: 'flex',
    flexDirection: 'column',
  },
  left: {
    width: '60%',
    display: 'flex',
    flexDirection: 'row',
  },

  containerProduct: {
    width: '100%',
    height: 148,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
    position: 'absolute',
    top: 293,
    paddingStart: 22.5,
    display: 'flex',
    flexDirection: 'row',
  },
  txtHeader: {
    fontSize: 28,
    fontFamily: 'Semibold',
    color: '#fff'
  },
  textHeader: {
    marginTop: 31,
  },
  imgHeader: {
    width: 24,
    height: 24,
    tintColor: 'black',
  },
  btn_left: {
    width: 24,
    height: 24,
  },
  btn_right: {
    width: 24,
    height: 24,
  },
  header: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    padding: 22,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  image: {
    height: 268.31,
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'stretch',
    position: 'relative',
  },
  txtBtnRight: {
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  }
});
