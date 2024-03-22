import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect, useCallback, useContext } from 'react'
import AxiosInstance from '../../helper/AxiosInstance'
import ItemProduct from '../../item/ItemProduct'
import { AppContext } from '../AppContext'
// import { ScrollView } from 'react-native-virtualized-view'
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
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const selectCategory = (item, index) => {
    setSelectedItemIndex(index);
    setSelectedCategories(item);
    setSelected(index);
    setProducts([]);
    // Các xử lý khác nếu cần
  }
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
  // const selectCategory = (item, index) => {
  //   // console.log(index);
  //   setSelectedCategories(item);
  //   setSelected(index);
  //   setProducts([]);
  //   // console.log(item?._id);
  //   // setProducts(item.products);
  // }

  return (
    <View style={styles.Container}>
      <StatusBar backgroundColor={'#0C0F14'} />

      {/* <View style={styles.header}>
        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => navigation.navigate('Settings')}
        >
          <Image style={styles.imgHeader} source={require('../../../../assets/images/ic_menu.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnMenu}
          onPress={() => navigation.navigate('Personal')}
        >
          <Image style={styles.imgHeader} source={require('../../../../assets/images/ic_user.png')} />
        </TouchableOpacity>
      </View> */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.btnMenu} onPress={() => navigation.goBack()}>
          <Image style={[styles.imgHeader, { width: 28, height: 28 }]} source={require('../../../../assets/images/chevron-left.png')} />
        </TouchableOpacity>
        <Text style={styles.txt_header}>CÂY TRỒNG</Text>
        <TouchableOpacity style={styles.btnMenu} >
          <Image style={styles.imgHeader} source={require('../../../../assets/images/shopping-cart.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.listLoai}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {categories.map((item, index) => (

            <TouchableOpacity
              key={index}
              style={styles.itemLoai}
              onPress={() => selectCategory(item, index)}>






              {/* <Text style={[styles.txtLoai, index === selected && styles.txtLoaiSeleted]}>
                {item?.name}
              </Text> */}
              <View style={index === selected ? styles.txtLoaiSeleted : styles.txtLoai}>
              <Text style={index === selected ? styles.txtLoaiSeleted : styles.txtLoai}>
                {item?.name}
              </Text>
              </View>


              {/* {
                index == selected &&
                <View style={styles.selectedLoai}></View>
              } */}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.listCoffee}>
          <FlatList
            numColumns={2}
            data={products}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ItemProduct
                navigation={navigation}
                product={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <Text style={styles.textCoffeeBean}>Coffee beans</Text>

        <View style={styles.listCoffeeBean}>
          <FlatList
            data={products}
            numColumns={2}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ItemProduct
                navigation={navigation}
                product={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  itemLoai: {
    // Style mặc định
    // Màu chữ đen
    color: 'black',
  },
  selectedItemLoai: {
    // Style khi mục được chọn
    // Màu nền xanh
    backgroundColor: 'lightgreen',
  },
  selectedTxtLoai: {
    // Style cho văn bản khi mục được chọn
    // Màu chữ trắng
    color: 'white',
    backgroundColor: 'green',
    borderRadius: 20,
  },
  txt_header: {
    fontSize: 16,
    fontWeight: '500',
  },
  Container_body: {
    margin: 15
  },
  // cloumn, row
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
    height: 24,
    marginVertical: 100,
  },
  // flex
  flex: {
    flex: 1,
  },
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
    marginTop: 5,
  },
  txtLoaiSeleted: {
    color: 'white',
    fontFamily: 'Poppins',
    fontSize: 14,
    padding:3,
    backgroundColor: 'green',
    borderRadius: 5,
    fontWeight:'500',

  },
  txtLoai: {
    color: '#52555A',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedLoai: {
    width: 100,
    height: 50,
    borderRadius: 4,
    position: 'absolute',
    borderWidth: 1,
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
    paddingBottom: 10,
  },
  textInput: {
    marginStart: 19,
    color: '#52555A',
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
  imgSearch: {
    marginTop: 13,
    marginStart: 18,
    width: 18,
    height: 18,
  },
  search: {
    width: '100%',
    height: 45,
    backgroundColor: '#141921',
    borderRadius: 15,
    marginTop: 28,
    display: 'flex',
    flexDirection: 'row',
  },
  txtHeader: {
    fontSize: 24,
    fontFamily: 'Semibold',
    color: '#221F1F'
  },
  textHeader: {
    marginTop: 10,
  },
  imgHeader: {
    width: 26,
    height: 26,
    marginEnd: 10,
  },
  header: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0,
  },
  Container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    paddingHorizontal: '2%',
    paddingVertical: 20,
  }
})