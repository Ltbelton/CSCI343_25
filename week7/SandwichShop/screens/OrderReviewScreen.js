import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View, StyleSheet } from "react-native"
import Colors from "../constants/colors";

import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckBox from "react-native-bouncy-checkbox";





export default function OrderReviewScreen(props){
    //Set Safe Area Screen Boundaries

    const insets = useSafeAreaInsets();


    return (
        <View
        style={[
            styles.container,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            },
    
           ]}
         >
        <View style ={styles.titleContainer}>
            <Title>Order Summary</Title>
        </View>
        
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.accent500,
      alignItems: 'center',
      justifyContent: 'center',
    },

    titleContainer: {
        marginBottom: 10,
        borderWidth: 2,
        orderRadius: 5,
        paddingHorizontal: 30,
        borderColor: Colors.primary500,
    },
})