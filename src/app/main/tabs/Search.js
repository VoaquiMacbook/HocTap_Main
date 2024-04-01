import { StyleSheet, Text, View,Image } from 'react-native'
import React, { useState, useEffect, useCallback, useContext,TextInput } from 'react'

const Search = () => {
  const [isSearch, setIsSearch] = useState(false);
const [search, setSearch] = useState('');
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
  return (
    <View>
       <View style={styles.search}>
          {!isSearch &&
            <Image style={styles.imgSearch} source={require('../../../../assets/images/ic_search.png')} />}
          <TextInput
            style={styles.textInput}
            placeholder='Find Your Coffee...'
            placeholderTextColor={'#52555A'}
            onChangeText={find}
            value={search}
          />
        </View>
      <Text>Search</Text>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  search: {
    width: '100%',
    height: 45,
    backgroundColor: '#141921',
    borderRadius: 15,
    marginTop: 28,
    display: 'flex',
    flexDirection: 'row',
  },
 imgSearch: {
    marginTop: 13,
    marginStart: 18,
    width: 18,
    height: 18,
  },
 textInput: {
    marginStart: 19,
    color: '#52555A',
    fontFamily: 'Poppins',
    fontWeight: '500',
  },
})