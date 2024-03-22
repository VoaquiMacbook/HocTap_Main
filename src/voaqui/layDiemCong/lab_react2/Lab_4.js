import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const Lab4 = () => {
    const [selectedImage, setSelectedImage] = useState(false);

    const handleLaunchImageLibrary = () => {
        let options = {
            mediaType: 'photo',
            maxWidth: 500,
            maxHeight: 500,
            quality: 1,
        };
        launchImageLibrary(options, response => {
            setSelectedImage(response.assets[0].uri);
        });
    };

    return (
        <View style={styles.container}>
            <Text>Lab4</Text>
            {
            selectedImage ? 
            (<Image source={{ uri: selectedImage }} style={styles.image} />) : (<Text>No image selected</Text>)
            }
            <Button
                title="Chọn ảnh từ thư viện"
                onPress={handleLaunchImageLibrary}
            />
        </View>
    );
};

export default Lab4;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        marginTop: 20,
    },
});
