import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState} from 'react';
import { SafeAreaView } from 'react-native';
import Movies from './components/Movies';
import { FlatList } from 'react-native';

export default function App() {
  const [MoviesItems, setMoviesItems] = useState([
    {
      name: "The 5th Wave",
      image: require("./assets/images/5.jpeg"),
      rating: "5.2",
      id: 1,
    },
    {
      name: "The Maze Runner",
      image: require("./assets/images/MR.jpeg"),
      rating: "6.8",
      id: 2,
    },
    {
      name: "Divergent",
      image: require("./assets/images/D.jpeg"),
      rating: "6.6",
      id: 3,
    },
    {
      name: "Forrest Gump",
      image: require("./assets/images/FG.jpeg"),
      rating: "8.8",
      id: 4,
    },
    {
      name: "The Matrix",
      image: require("./assets/images/Mx.jpeg"),
      rating: "8.7",
      id: 5,
    },
    {
      name: "Wicked",
      image: require("./assets/images/W.jpeg"),
      rating: "7.4",
      id: 6,
    },
    {
      name: "Mufasa: The Lion King",
      image: require("./assets/images/M.jpeg"),
      rating: "6.8",
      id: 7,
    },
    {
      name: "Avatar: The Way of Water",
      image: require("./assets/images/A.jpeg"),
      rating: "7.5",
      id: 8,
    },
    {
      name: "Black Panther",
      image: require("./assets/images/BP.jpeg"),
      rating: "7.3",
      id: 9,
    },
    {
      name: "Jurassic World",
      image: require("./assets/images/JWorld.jpeg"),
      rating: "6.9",
      id: 10,
    },

  ]);

  return (
    <>
     <StatusBar style="dark" />
     <SafeAreaView style={styles.rootContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Top 10 Movies</Text>
      </View>

      <View style={styles.listContainer}>
      <FlatList
        data={MoviesItems}
        keyExtractor={(item, index) => item.name}
        renderItem={(itemData) =>{
          return<Movies
          name={itemData.item.name}
          image={itemData.item.image}
          rating={itemData.item.rating}
          />
      }}
      />
    
      </View>
     </SafeAreaView>
    
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#d4a017',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    justifyContent: "center",
    marginBottom: 20,
    paddingHorizontal: 5,
    borderWidth: 5,
    borderRadius: 10,
    marginTop: 50,
  },

  title:{
    fontSize: 35,
    fontWeight: "bold",
  },
  
  listContainer:{
    flex: 8,
    width: "90%",
  }
});