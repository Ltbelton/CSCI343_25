import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { COUNTRIES, DESTINATIONS } from "../data/dummy-data";
import DestinationItem from "../components/DestinationItem";



export default function DestinationsOverviewScreen(props){
    const countryId = props.route.params.countryId;
    
    useLayoutEffect(()=>{
        const country = COUNTRIES.find((country) => country.id == countryId);
        props.navigation.setOptions({title: country ? country.name : null })
    }, [countryId, props.navigation]
);

    const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
        return destinationItem.countryId === countryId;
    })

    function renderDestinationItem({item, index}){
        const destinationItemProps = {
            name: item.name,
            imageUrl: item.imageUrl,
            capacity: item.capacity,
            yearEstablished: item.yearEstablished,
            rating: item.rating,
            listIndex: item.listIndex,
        };

        return <DestinationItem {...destinationItemProps}/>

    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={displayedDestinations}
                keyExtractor={(item) => item.id}
                renderItem={renderDestinationItem}

            />
        </View>
    )
    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:16,
    },
});