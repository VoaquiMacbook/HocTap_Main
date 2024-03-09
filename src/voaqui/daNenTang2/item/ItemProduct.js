import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemProduct = (props) => {
  const { navigation } = props;
  const { product } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={() => { navigation.navigate('Detail', { data: { product } }) }} >
    <Image style={styles.productImage} source={{ uri: product.photo }} />
    {/* <Text style={styles.productName}>{product.name}</Text> */}
  </TouchableOpacity>
  )
}

export default ItemProduct

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
      
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
      productImage: {
        borderRadius: 5,
        backgroundColor: 'gray',
        width: 200,
        height: 300,
      },
      productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
      },
})