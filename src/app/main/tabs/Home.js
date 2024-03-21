import {
  StyleSheet, Text, View, TouchableOpacity,
  Image, StatusBar, TextInput, FlatList, SectionList, SafeAreaView
} from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import React, { useState, useEffect, useCallback, useContext } from 'react'
import AxiosInstance from '../../helper/AxiosInstance'
import ItemProduct from '../../item/ItemProduct'
import ItemCombo from '../../item/ItemCombo'
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

  // item combo new
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View >
        <Image
          style={styles.avt_container}
          source={{ uri: item.photo }} />
      </View>
      <View style={styles.txt_container_item}>
        <Text style={styles.txt_itemM} >{item.name}</Text>
        <Text style={styles.txt_item}>{item.postion}</Text>
      </View>

      <Text style={styles.txt_itemM}>{item.rice}</Text>

    </View>
  );
  const sections = [
    { data: products.slice(0, 4) }, // Thay đổi data cho phù hợp với Section 1
    // Thêm các section khác nếu cần
  ];

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionHeader}></Text> // Thay đổi style cho phù hợp với section header
  );


  return (
    <SafeAreaView style={styles.Container}>
      <ScrollView>
        <StatusBar backgroundColor={'#0C0F14'} />
        {/* <ScrollView> */}
        <View style={styles.header}>
          {/* <TouchableOpacity
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
        </TouchableOpacity> */}
          <Image style={{ width: '100%', height: 318 }} source={require('../../../../assets/images/img_carosel.png')} ></Image>
          <TouchableOpacity style={{ position: 'absolute', width: '100%', alignItems: 'flex-end', padding: 20 }} onPress={() => navigation.navigate('Cart')}>
            <Image source={require('../../../../assets/images/ic_cart_.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{ position: 'absolute', width: '100%', padding: 28 }} onPress={() => navigation.navigate('ListProduct')}>
            <View style={styles.horizontal}>
              <Text style={{ fontSize: 16, color: '#007537', fontWeight: '500' }}>Xem hàng mới về</Text>
              <Image style={{width:24,height:18 }} source={require('../../../../assets/images/fi_arrow-right.png')}/>
            </View>

          </TouchableOpacity>
        </View>
        <View style={styles.Container_body}>
        <View style={styles.textHeader}>
          <Text style={styles.txtHeader}>Cây trồng</Text>
        </View>
        <View style={styles.listCoffee}>
          <FlatList
            numColumns={2}
            data={products.slice(0, 4)}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={false}
            renderItem={({ item }) => (
              <ItemProduct
                navigation={navigation}
                product={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, lineHeight: 20, fontWeight: '500', marginEnd: 14, }}>Xem Thêm Cây trồng</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textHeader}>
          <Text style={styles.txtHeader}>Chậu cây trồng</Text>
        </View>
        <View style={styles.listCoffee}>
          <FlatList
            numColumns={2}
            data={products.slice(0, 4)}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={false}
            renderItem={({ item }) => (
              <ItemProduct
                navigation={navigation}
                product={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, lineHeight: 20, fontWeight: '500', marginEnd: 14, }}>Xem Thêm Cây trồng</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textHeader}>
          <Text style={styles.txtHeader}>Phụ kiện</Text>
        </View>
        <View style={styles.listCoffee}>
          <FlatList
            numColumns={2}
            data={products.slice(0, 4)}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={false}
            renderItem={({ item }) => (
              <ItemProduct
                navigation={navigation}
                product={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, lineHeight: 20, fontWeight: '500', marginEnd: 14, }}>Xem Thêm Cây trồng</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textHeader}>
          <Text style={styles.txtHeader}>Combo chăm sóc (mới)</Text>
        </View>
        <View style={styles.listCoffee}>
          <FlatList
            data={products.slice(0, 3)}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            nestedScrollEnabled={false}
            renderItem={({ item }) => (
              <ItemCombo
                navigation={navigation}
                product={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        </View>

      </ScrollView>
    </SafeAreaView>

  )
}

export default Home

const styles = StyleSheet.create({
  Container_body:{
    margin:15
  },
  // cloumn, row
  vertical: {
    flexDirection: 'column',
  },
  horizontal: {
    flexDirection: 'row',
    height:24,
    marginVertical:100,
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
    position: 'relative',
  },
  Container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    paddingHorizontal: '2%',
    paddingVertical: 20,
  }
})