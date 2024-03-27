import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Lab4_1 = (props) => {
  const { navigation } = props;
  const [images, setImages] = useState();

  const commonOptions = {
    mediaType: 'photo',
    maxWidth: 500,
    maxHeight: 500,
  };
  
  const cameraOptions = {
    cameraType: 'front',
    saveToPhotos: true,
    // selectionLimit:3,
    ...commonOptions,
  };
const openCamera =async()=>{
const response =await launchCamera(cameraOptions);
// const response =await launchImageLibrary(cameraOptions);
if(response?.assets){
    console.log(response.assets);
    setImages(response.assets);
}else{
    console.log("hông có j ");
}
}   

  return (
    <View style={styles.container}>
      {/* Hiển thị hình ảnh được chụp từ camera */}
      <Image
        style={styles.image}
        source={{
          uri:
            images?.[0]?.uri ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png',
        }}
      />
      <Text style={styles.title}>Avatar</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={openCamera}
      >
        <Text style={styles.buttonText}>Chụp ảnh</Text>
      </TouchableOpacity>
      
    
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Lab4_2')}
      >
        <Text style={styles.buttonText}>Music</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lab4_1;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  image: {
    width: 150, 
    height: 150,
    
    marginBottom: 20, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20, 
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});
