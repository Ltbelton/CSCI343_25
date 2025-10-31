import { View, StyleSheet, FlatList } from "react-native";
import NewsItem from "./NewsItem";

export default function NewsInfo(props){
    function renderNewsItem(itemData){
        const NewsItemProps = {
            id: itemData.item.id,
            headline: itemData.item.headline,
            date: itemData.item.date,
            author: itemData.item.author,
            agency: itemData.item.agency,
            description: itemData.item.description,
            imageUrl: itemData.item.imageUrl,
            category: itemData.item.category,
            listIndex: itemData.index,
          };
          return <NewsItem {...NewsItemProps}/>
    }



    return(
        <View style ={styles.container}>
            <FlatList 
                data={props.items}
                keyExtractor={(item) => item.id}
                renderItem={renderNewsItem}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles =  StyleSheet.create ({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "black",
    },
});

