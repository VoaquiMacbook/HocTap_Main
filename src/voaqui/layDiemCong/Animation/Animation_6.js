import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Animation_6 = () => {
    
  return (
    <View>
          <Animated.View style={styles.box} />
      <Text>Animation_6</Text>
    </View>
  )
}

export default Animation_6

const styles = StyleSheet.create({
    box:{
        width:100,
        height:100,
        backgroundColor:'green'

    }
})