import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Search = () => {
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

const styles = StyleSheet.create({})