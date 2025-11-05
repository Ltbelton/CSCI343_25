import { useNavigation } from "@react-navigation/native";
import { View , Text, StyleSheet, Pressable, Image} from "react-native";



export default function NewsItem(props) {
    const navigation = useNavigation();
  
    function selectedNewsHandler() {
        navigation.navigate("NewsDetail", { newsId: props.id }); }
  
    return (
        <View
        style={[
            styles.itemContainer,
            { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#fff" },
          ]}          
        >
            <Pressable onPress ={selectedNewsHandler}>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: props.imageUrl}} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.headline}>{props.headline}</Text>
                    <Text style={styles.space}>
                    Date: {props.date} | Author: {props.author} | Agency: {props.agency}   
                    </Text>
                    <Text style={styles.description}> Description: {props.description}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal: 5,
        paddingTop: 5,
        marginBottom: 10,
        borderRadius: 7,
    },

    imageContainer: {
        height: 300,
    },

    image: {
        height: "100%",
        resizeMode: "cover",
        borderRadius: 7,
    },

    infoContainer: {
        flex: 1,
        alignItems: "center",
    },

    headline: {
        fontSize: 35,
        fontFamily: "playfairBold",
        paddingBottom: 5,
    },

    space: {
        fontSize: 25,
        fontFamily: "playfair",
        paddingBottom: 5,
    },

    description: {
        fontSize: 14,
        fontFamily: "playfair",
        paddingBottom: 5,
    },

});
