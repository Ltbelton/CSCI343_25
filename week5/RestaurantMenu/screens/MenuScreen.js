import { FlatList, StyleSheet, Text, View, Button} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from "../Title";;
import MenuItem from "../MenuItem";
import { useState } from 'react';

export default function MenuScreen(props) {
    // Setting Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();

    const [menuItems, setMenuItems] = useState([
      {
        id: 1,
        name: "ULTIMATE CAJUN PASTA",
        image: require("../assets/images/Pasta.jpeg"),
        price: "21.39",
      },
      {
        id: 2,
        name: "TRIPLE DIPPER",
        image: require("../assets/images/Dipper.jpeg"),
        price: "18.50",
      },
      {
        id: 3,
        name: "CHICKEN CRISPERS COMBO",
        image: require("../assets/images/Chicken.jpeg"),
        price: "16.49",
      },
      {
        id: 4,
        name: "CHICKEN BACON RANCH QUESADILLA",
        image: require("../assets/images/Queso.jpeg"),
        price: "13.25",
      },
      {
        id: 5,
        name: "BACON RANCH BURGER",
        image: require("../assets/images/Burger.jpeg"),
        price: "15.49",
      },
    ]);
    
  return (
    <View style={[
        styles.rootContainer,
        {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
        }

    ]}
    >


   <View style={styles.titleContainer}>
    <Title>Menu</Title>
    </View>
    <View style ={styles.listContainer}>
        <FlatList 
            data={menuItems}
            keyExtractor={(item, index) =>{
                return item.id;
            }}
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            renderItem={(itemData) =>{
                return(
                    <MenuItem
                    name={itemData.item.name}
                    image={itemData.item.image}
                    price={itemData.item.price}
                  />
                )
            }}

        />
        </View>
         <View style={styles.buttonContainer}>
                <Button title="Main Menu" onPress={props.onNext} color="black"/>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({

    rootContainer: {
      flex: 1,
      alignItems: 'center',
    },
  
    titleContainer: {
      flex: 1,
      justifyContent: "center",
    },

    listContainer: {
        flex: 7,
        width: 380,
      },

      
  buttonContainer:{
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    width: 150,

  },
  });