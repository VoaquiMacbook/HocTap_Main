import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import { AppContext } from '../AppContext';
import AxiosInstance from '../../helper/AxiosInstance';
import { useNavigation } from '@react-navigation/native';

const Cart = ({ route }) => {
  const navigation = useNavigation();
  const { cart } = useContext(AppContext);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      // console.log(cart);
      try {
        // Tạo một mảng các promise từ các yêu cầu API
        const promises = cart.map(async (item) => {
          const response = await AxiosInstance().get(`/products/${item._id}`);
          // console.log(response.product);
          return { item: response.product, number: item.number };
        });
        // Chờ tất cả các promise hoàn thành
        const productsData = await Promise.all(promises);
        // Cập nhật state với dữ liệu từ API
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };
    fetchData();
  }, [cart]);


  const handleQuantityChange = (type = 1, itemIndex) => {
    // type = 1: tăng số lượng
    // type = -1: giảm số lượng
    const updatedProducts = [...products]; // Tạo một bản sao của mảng products để cập nhật state
    const updatedNumber = products[itemIndex].number + type; // Sử dụng number thay vì quantity
    if (updatedNumber <= 0) {
      // Xử lý khi số lượng giảm xuống 0
      return;
    }
    updatedProducts[itemIndex].number = updatedNumber; // Cập nhật số lượng của sản phẩm
    // Cập nhật lại state với sản phẩm có số lượng đã cập nhật
    setProducts(updatedProducts);
  };



  const renderItemCart = ({ item, index }) => {
    return (
      <View style={{ flexDirection: 'row', marginTop: 16, width: '100%', height: 77, backgroundColor: '#fff', borderRadius: 23, padding: 10 }}>
        <View>
          <Image
            style={{ width: 77, height: 77, borderRadius: 8, backgroundColor:'gray' }}
            source={{ uri: `${item?.item.image}` }} />
        </View>

        <View style={{ marginLeft: 10 }}>
          <View style={{flexDirection:'row'}}>
          <Text numberOfLines={1} style={{ width: '60%', color: 'black', fontSize: 12, fontWeight: '400' }}>{item?.item.name} |</Text>
          <Text style={{ color: '#AEAEAE', fontSize: 9 }}>Ưa bóng</Text>
          </View>
        
          <Text style={{
            fontSize: 20,
            marginTop: 16,
            marginBottom: 15,
            fontWeight: '400',
            color: 'green'
          }}>
            {item?.item.price}.000đ<Text style={{
              color: 'green',
            }}></Text>
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => handleQuantityChange(-1, index)}
              style={{ width: 30, height: 30, backgroundColor: '#D17842', alignItems: 'center', borderRadius: 5 }}>
              <Text style={{ paddingVertical: 3, fontSize: 18, color: 'white' }}>-</Text>
            </TouchableOpacity>
            <Text style={{ width: 50, height: 30, borderColor: '#D17842', borderWidth: 1, borderRadius: 5, textAlign: 'center', marginHorizontal: 15, paddingVertical: 5, color: 'white' }}>{item.number}</Text>
            <TouchableOpacity
              onPress={() => handleQuantityChange(1, index)}
              style={{ width: 30, height: 30, backgroundColor: '#D17842', alignItems: 'center', borderRadius: 5 }}>
              <Text style={{ paddingVertical: 3, fontSize: 18, color: 'white' }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const total = products.reduce((total, item) => {
    return total + item.number * item.item.price;
  }, 0);


  const payMent = async () => {

    const totalPrice = products.reduce((acc, curr) => acc + (curr.item.price * curr.number), 0);

    console.log('Total: ' + totalPrice)
    navigation.navigate('Payment', { totalPrice });
  }





  return (
    <View style={styles.container}>
      {/* <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
      }}>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('Settings') }}>
            <View>
              <Image
                style={{ position: 'relative' }}
                source={require('../../../../assets/images/backgroudlogo.png')} />
              <Image
                style={{ position: 'absolute', top: 7, left: 8 }}
                source={require('../../../../assets/images/logomenu.png')} />
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600' }}>Cart</Text>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('PersonalDetails') }}>
            <Image
              style={{ width: 30, height: 30, borderRadius: 10 }}
              source={require('../../../../assets/images/ic_user.png')} />
          </TouchableOpacity>
        </View>
      </View> */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.goBack()}>
          <Image style={[styles.imgHeader, { width: 28, height: 28 }]} source={require('../../../../assets/images/chevron-left.png')} />
        </TouchableOpacity>
        <Text style={styles.txt_header}>GIỎI HÀNG</Text>
        <TouchableOpacity style={styles.btnMenu} >
          <Image style={styles.imgHeader} source={require('../../../../assets/images/delete.png')} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={{ marginTop: 30 }}
        data={products}
        renderItem={renderItemCart}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{
              color: 'black',
              fontSize: 14,
              fontWeight: 250,
            }}>Tạm tính</Text>
          </View>

          <View>
            <Text style={{
              color: 'white',
              fontSize: 20,
              fontWeight: 600
            }}>
              <Text style={{
                color: 'black',
                fontSize: 20,
                fontWeight: 400
              }}>
                0 </Text>
              {total}</Text>
          </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={payMent}
          style={{ width: '100%', height: 60, backgroundColor: '#007537', borderRadius: 12, marginTop:15}}>
            <View style={{flexDirection:'row'}}>
            <Text style={[styles.txt_pay, {paddingHorizontal:25}]}>
            Tiến hành thanh toán
          </Text>
          <View style={styles.txt_pay2}>
          <Image source={require('../../../../assets/images/chevron-right.png')}/>
          </View>
        
            </View>
        
        </TouchableOpacity>
      </View>
      {/* <Text>Cart</Text> */}
    </View>
  );
}
export default Cart;
const styles = StyleSheet.create({
  txt_pay:{
      paddingVertical: 20,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 600,
      color: 'white',
      // backgroundColor:'red',
  },
  txt_pay2:{
    paddingVertical: 18,
    textAlign: 'center',
    width:25,height:25,
    paddingHorizontal:110,
},
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
  container: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    padding: 30,
  },
  header: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgHeader: {
    width: 24,
    height: 24,
    tintColor: 'black',
  },
});
