import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {FavoritesContext} from "../store/context/favorites-context";
import {NEWS} from "../data/dummy_data"; 
import NewsInfo from '../components/NewsArticle/NewsInfo';
import Colors from '../constants/colors';

export default function BookmarksScreen() {
  const favoriteNewsCtx = useContext(FavoritesContext);
  const favoritesNews = NEWS.filter((newsItem) => {
    return favoriteNewsCtx.ids.includes(newsItem.id);
  });

  if ( favoritesNews.length === 0){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no saved News Articles yet!</Text>
      </View>
    );
  } else {
    return <NewsInfo items={favoritesNews} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  text:{
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary300,
  },
});