import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { usePlayTrack } from './trackService';
import { State } from 'react-native-track-player';

const songs = [
  {
    id: 1,
    title: 'Nắng Ấm Xa Dần',
    artist: 'Sơn Tùng MTP',
    artwork:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtyXmONclpe83Z81fqRs1MRRLBfkYSPqZLjCS0psG9hQ&s',
    url: require('./dienvientoi.mp3'),
  },
  {
    id: 2,
    title: 'Awful',
    artist: 'josh pan',
    artwork:
      'https://m.media-amazon.com/images/I/61aRJmGLnyL._AC_UF350,350_QL80_.jpg',
    url: require('./dienvientoi.mp3'),
  },
  {
    id: 3,
    title: 'Something is Going On',
    artist: 'Godmode',
    artwork: 'https://m.media-amazon.com/images/I/71e5XKCIO6L.jpg',
    url: require('./dienvientoi.mp3'),
  },
  {
    id: 4,
    title: 'Book The Rental Wit It',
    artist: 'RAGE',
    artwork: 'https://m.media-amazon.com/images/I/71e5XKCIO6L.jpg',
    url: require('./dienvientoi.mp3'),
  },
  {
    id: 5,
    title: 'Crimson Fly',
    artist: 'Huma-Huma',
    artwork:
      'https://onarbermano.com/wp-content/uploads/2021/07/D838C62F-B9BA-4DAD-A227-1F491AB5EEFB.jpeg',
      url: require('./dienvientoi.mp3'),
  },
];


const Lab4_2 = () => {
const {trackTitle,
  trackArtist,
  trackArtwork,
  onTogglePlayTrack,
  onSkipToNext,
  onSkipToPrevious,
  playBackState
}
  =usePlayTrack(songs);

  return (
    <View style={styles.container}>
     <View style={styles.content}>
     <Image 
      source={{uri : trackArtwork}}
style={styles.artworkImage}
      />
      
      
      <Text style={styles.title}>{trackTitle}</Text>
      <Text style={styles.artist}>{trackArtist}</Text>
     </View>
      
      <View style={styles.controls}>
        
      <TouchableOpacity
      onPress={()=>onTogglePlayTrack()}
      >
        {
          playBackState == State.Playing ?
          <Text style={styles.controlButton}> ⏸️ </Text>:
          <Text style={styles.controlButton}> ▶️</Text>
        }
        
      </TouchableOpacity>
      <TouchableOpacity
       onPress={()=>onSkipToNext()}>
        <Text style={styles.controlButton}>⏭️ </Text>
      </TouchableOpacity>
      <TouchableOpacity
       onPress={()=>onSkipToPrevious()}>
        <Text style={styles.controlButton}>⏮️ </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default Lab4_2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    marginBottom: 20,
  },
  artworkImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  artist: {
    fontSize: 18,
    marginTop: 5,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  controlButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
})