import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import { AppContext } from '../main/AppContext';
const ItemCart = (props) => {
    const { navigation } = props;
    const { product } = props;
    const { cart, setCart } = useContext(AppContext);
    const addToCart = (newItem) => {
        // Kiểm tra xem có sản phẩm có cùng _id trong giỏ hàng chưa
        const existingItem = cart.find(item => item._id === newItem._id);

        if (existingItem) {
            // Nếu đã có, tăng giá trị của biến number lên 1
            const updatedCart = cart.map(item => {
                if (item._id === newItem._id) {
                    return { ...item, number: item.number + 1 };
                }
                return item;
            });

            setCart(updatedCart);
        } else {
            // Nếu chưa có, thêm sản phẩm mới vào giỏ hàng với number là 1
            setCart(prevCart => [...prevCart, { _id: newItem._id, number: 1 }]);
        }

        Alert.alert('Thêm vào giỏ hàng thành công');
    };

    // const product = route.params?.data?.product;
    return (

        <View style={[styles.Container, styles.bg_container]}>
            <TouchableOpacity onPress={() => { navigation.navigate('Detail', { data: { product } }) }}>
                {/* <LinearGradient
                    // colors={['#252A32', 'rgba(38, 43, 51, 0)']}
                    style={styles.linearGradient}> */}
                    <View style={[styles.top]}>
                        <View>
                            <Image
                                style={{ borderRadius: 10, marginBottom: 10, width: 77, height: 77, backgroundColor:'gray'}}
                                // source={{ uri: `${product.image}` }} 
                                />
                        </View>
                        {/* <Text style={{ position: 'absolute', top: 2, right: 5, color: 'white', fontWeight: 'bold', fontSize: 11, right: 11 }}>
                            {product.rating.toFixed(1)}
                        </Text> */}
                   
                    <View style={styles.bottom}>
                        <Text style={styles.name} numberOfLines={1}>{product?.name}</Text>
                        <Text style={styles.info}>{product?.info}</Text>
                        <Text style={{color:'gray'}}>Ưa bóng</Text>
                        <View style={styles.priceContainer}>
                            <Text style={styles.price}>
                                {product?.price}
                            </Text>
                          

                            {/* <TouchableOpacity style={styles.btnAdd} onPress={() => addToCart(product)}>
                                <Image source={require('../../../assets/images/btn_add.png')} />
                            </TouchableOpacity> */}
                        </View>
                    </View>
                {/* </LinearGradient> */}
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ItemCart;

const styles = StyleSheet.create({
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
    bg_container:{
        elevation: 2,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        backgroundColor:'white',
        marginBottom:1
    },
    btnAdd: {

    },
    price: {
        color: '#007537',
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        fontStyle: 'normal',
        lineHeight: 20,
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 6.3,
        justifyContent: 'space-between',
        paddingEnd: 12,
        paddingBottom:10,
    },
    info: {
        color: '#fff',
        fontFamily: 'Poppins',
        fontSize: 9,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 20,
    },
    name: {
        color: '#000',
        fontFamily: 'Lato',
        fontSize: 14,
        fontWeight: '400',
        fontStyle: 'normal',
        lineHeight: 20,
    },
    bottom: {
        display: 'flex',
        flexDirection: 'column',
        paddingStart: 12,
    },
    linearGradient: {
        width: 149,
        height: 245,
        borderRadius: 23,
        paddingTop: 0,
    },
    diemDanhGia: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '700',
        fontStyle: 'normal',
        fontFamily: 'Poppins',
        alignItems: 'center',
        marginStart: 4,
    },
    danhGia: {
        position: 'absolute',
        right: 0,
        top: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.60)',
        borderTopEndRadius: 19,
        borderBottomStartRadius: 26,
        paddingEnd: 11,
        paddingStart: 12,
        paddingVertical: 2,
    },
    image: {
        width: 126,
        height: 126,
        borderRadius: 16,
    },
    Container: {
        width: 375,
        height: 'auto',
        marginEnd: 10,
        borderRadius: 10,
        marginTop:10,
        marginStart:10,
        position:'relative'
        
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    top: {
        position: 'relative',
        // alignItems: 'center',
        // margin: 12,
        flexDirection:'row',
        margin:5
    },
});
