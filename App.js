import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Lightbox from 'react-native-lightbox-v2';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native';


export default function App() {
  const clickHandler = () => {
alert('None')
  }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.bottomIcon}>
        <View style={styles.iconRowUpper}>
        <View style={styles.logoWrapper}>
            </View>
            <Entypo name="twitter" size={30} color="#40DFEF" />

            <MaterialCommunityIcons name="star-four-points-outline" size={24} color="white" />
          </View>
        </View>




      <ScrollView style={styles.container}>
       {data.map(val => {
         return(<View style={styles.wrapper}>
          <View style={styles.hederWrapper}>
            <View style={styles.iconWrapper}>
              <View style={styles.logoWrapper}>
               <View style={styles.logoContainer}>


                  <Text>{val.id}</Text>
              </View>
            </View>
              <Text style={styles.usernameText}>{val.author}</Text>
            </View>
            <View>
            <Entypo name="dots-three-horizontal" size={22} color="white" />
            </View>
          </View>
          <Lightbox>
          <View style={styles.box}>
          <Image
        style={styles.tinyLogo}
        source={{
          uri: val.url,
        }}
      />
        </View>
        </Lightbox>
        <View>
          <View style={styles.iconRow}>
          <EvilIcons name="comment" size={24} color="white" />
          <EvilIcons name="retweet" size={24} color="white" />
          <EvilIcons name="heart" size={24} color="white" />
          <EvilIcons name="share-google" size={24} color="white" />
          </View>
        </View>
          </View>)
       })}
      </ScrollView>
      
          <TouchableOpacity 
          style={styles.TouchableOpacity}
          onPress={clickHandler}>
            
            <Image
            style={styles.floatingButton}
            source={{uri: 'https://is2-ssl.mzstatic.com/image/thumb/Purple128/v4/79/fd/aa/79fdaaaa-4b93-4d66-89e9-3d8b721fff16/source/512x512bb.jpg'}} />




          </TouchableOpacity>
        <View style={styles.bottomIcon}>
        <View style={styles.iconRowBottom}>



        <Entypo name="home" size={24} color="white" />
        <EvilIcons name="search" size={24} color="white" />
        <EvilIcons name="bell" size={24} color="white" />
        <MaterialCommunityIcons name="email-outline" size={24} color="white" />
          </View>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: 2,
    paddingTop: 20,

  },
  wrapper:{
    marginTop: 10
  },
  scroll:{
    height: 150,
    backgroundColor: '#000',
  },
  box:{
    width: '100%',
    height: 300,
    backgroundColor: '#C2C',
    marginTop: 10,
    marginLeft: 60,
    marginRight: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  touch:{
    backgroundColor: '#F54',
    marginTop: 10,
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 10
  },
  tinyLogo:{
    width: '100%',
    height: '100%',
    
  },
  text: {
    fontSize: 30
  },
  iconWrapper:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  logoContainer:{
    backgroundColor: '#C2C2C2',
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100

  },

  hederWrapper:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  usernameText:{
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 5,
    fontSize: 16
  },

  iconRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 60,
    marginRight: 10,
    marginTop: 10
  },
  TouchableOpacity:{
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    bottom: 70

  },
  floatingButton:{
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 100,
   
  },
  bottomIcon:{
    padding: 10
  },
  iconRowBottom:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
  },
  iconRowUpper:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
});

const data=[
  {
    id: 'R',
    author: 'Raffi Ahmad',
    width: 5616,
    height: 3744,
    url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Raffi-Ahmad-2020.jpg",
  },
  {
    id: 'C',
    author: 'Cester Benington',
    width: 5616,
    height: 3744,
    url: "https://cdn0-production-images-kly.akamaized.net/WK6h030zNbSifw3ZJWNVByamnxI=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1654919/original/026124000_1500599941-1.jpg",
  },
  {
    id: 'P',
    author: 'Paul Walker',
    width: 5616,
    height: 3744,
    url: "https://cdn1-production-images-kly.akamaized.net/brNf7pkM47bsRYVLBhO0QmeKs7c=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2025532/original/002289400_1521813475-Paul-Walker-1024x576.jpg",
  },

]