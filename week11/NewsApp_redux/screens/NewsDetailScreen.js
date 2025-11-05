import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { useLayoutEffect, useState } from 'react';
import Colors from '../constants/colors';
import { NEWS } from '../data/dummy_data';
import BookmarkButton from '../components/BookmarkButton';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite, addFavorite } from '../store/redux/favorites';

export default function NewsDetailScreen({ route, navigation }) {
  const favoriteNewsIds = useSelector((state) => state.favoriteNews.ids);
  const dispatch = useDispatch();

  const { newsId } = route.params;                 
  const selectedNews = NEWS.find((n) => n.id === newsId); 

  const newsIsFavorite = favoriteNewsIds.includes(newsId);

  function changeFavoriteStatusHandler(){
    if (newsIsFavorite){
      dispatch(removeFavorite({id: newsId}));
    } else {
      dispatch(addFavorite({id: newsId}));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "", 
      headerRight: () => {
        return (
            <BookmarkButton
            isFavorite={newsIsFavorite}
            onPress={changeFavoriteStatusHandler}
            />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);


  return (
    <ScrollView contentContainerStyle={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedNews.imageUrl }} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.headline}>{selectedNews.headline}</Text>
        <Text style={styles.space}>
          Date: {selectedNews.date} | Author: {selectedNews.author} | Agency: {selectedNews.agency}
        </Text>
        <Text style={styles.description}>{selectedNews.description}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: { 
    padding: 16, 
    backgroundColor: "black" 
},
  
    imageContainer: { 
     marginVertical: 10, 
    height: 300 
    },

  image: { 
    height: "100%", 
    resizeMode: "cover", 
    borderRadius: 7 
},

  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary50008,   
    padding: 12,
  },

  headline: {
    color: Colors.primary300,
    fontSize: 28,
    fontFamily: "playfairBold",           
    marginBottom: 8,
  },
  space: {
    color: Colors.primary300,
    fontSize: 16,
    fontFamily: "playfair",
    marginBottom: 8,
  },
  description: {
    color: Colors.primary300,
    fontSize: 15,
    fontFamily: "playfair",               
  },
  center: { 
    flex: 1,
    alignItems: "center", 
    justifyContent: "center" 
},
});
