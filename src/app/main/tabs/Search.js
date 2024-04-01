import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect, useCallback, useContext } from 'react'
import AxiosInstance from '../../helper/AxiosInstance'
import ItemProduct from '../../item/ItemProduct'
import ItemCart from '../../item/ItemCart'
import { AppContext } from '../AppContext'
import HeaderCustuom from '../../custom/HeaderCustuom'
const Home = (props) => {
  const { navigation } = props;
  const [isSearch, setIsSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(useContext(AppContext));
  const [numberCart, setNumberCart] = useState(cart.length);
  const [selectedCategories, setSelectedCategories] = useState(null);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Thêm state để lưu trữ danh sách sản phẩm đã lọc

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await AxiosInstance().get('/categories');
        setCategories(response.categories);
        setSelectedCategories(response.categories[0]);
      } catch (error) {
        console.log('Lấy danh sách danh mục lỗi', error);
      }
    }
    getCategories();
  }, []);



  //lấy danh sách sản phẩm theo danh mục dc chọn

  useCallback(useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await AxiosInstance().get(`/products?category=${selectedCategories?._id}`);
        console.log('Products response:', response.products); // Log the products array
        setProducts(response.products);
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    }

    getProducts();
  }, [selectedCategories]));
  
  const find = (text) => {
    setSearch(text);
    if (text === '') {
      setIsSearch(false);
      setFilteredProducts(products);
    } else {
      setIsSearch(true);
      const filtered = products.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }
  const selectCategory = (item, index) => {
    // console.log(index);
    setSelectedCategories(item);
    setSelected(index);
    setProducts([]);
    // console.log(item?._id);
    // setProducts(item.products);
  }

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={'#0C0F14'} />
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.goBack()}>
          <Image style={[styles.imgHeader, { width: 28, height: 28 }]} source={require('../../../../assets/images/chevron-left.png')} />
        </TouchableOpacity>
        <Text style={styles.txt_header}>Tìm kiếm</Text>
        <TouchableOpacity style={styles.btnMenu}>
        
        </TouchableOpacity>
      </View>



      <ScrollView showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>

        <View style={styles.search}>
         
          <TextInput
            style={styles.textInput}
            placeholder='Find...'
            placeholderTextColor={'#52555A'}
            onChangeText={find}
            value={search}
          />
           {!isSearch &&
            <Image style={styles.imgSearch} source={require('../../../../assets/images/search.png')} />}
        </View>

        
        {/* <View style={styles.listLoai}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {categories.map((item, index) => (

              <TouchableOpacity
                key={index}
                style={styles.itemLoai}
                onPress={() => selectCategory(item, index)}>

                <Text style={[styles.txtLoai, index === selected && styles.txtLoaiSeleted]}>
                  {item?.name}
                </Text>

                {index == selected &&
                  <View style={styles.selectedLoai}></View>
                }
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View> */}

        <View style={styles.listCoffee}>
          <FlatList
            data={products}
            horizontal={false}
            numColumns={1}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ItemCart
                navigation={navigation}
                product={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <Text style={styles.textCoffeeBean}>Coffee beans</Text>

        {/* <View style={styles.listCoffeeBean}>
          <FlatList
            data={products}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ItemProduct
                navigation={navigation}
                product={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View> */}
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  listCoffeeBean: {
    marginTop: 19,
  },
  textCoffeeBean: {
    marginTop: 23.32,
    color: '#fff',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  listCoffee: {
    marginTop: 22,
  },
  txtLoaiSeleted: {
    color: '#D17842',
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  txtLoai: {
    color: '#52555A',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedLoai: {
    width: 8,
    height: 8,
    backgroundColor: '#D17842',
    borderRadius: 4,
  },
  itemLoai: {
    width: 'auto',
    marginHorizontal: 9,
    marginTop: 28,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listLoai: {

  },
  textInput: {
    marginStart: 19,
    color: '#52555A',
    fontFamily: 'Poppins',
    fontWeight: '500',
    flex:1,
  },
  imgSearch: {
    marginTop: 13,
    marginEnd:10,
    width: 18,
    height: 18,
  },
  search: {
    width: '100%',
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 28,
    display: 'flex',
    flexDirection: 'row',
    borderBottomColor:'black',
    borderBottomWidth:1,
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
    width: 30,
    height: 30,
    borderRadius: 10,
  },
  header: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    paddingVertical: 20,
  }
})