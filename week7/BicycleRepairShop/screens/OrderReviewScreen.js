import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, View, StyleSheet, ScrollView, ImageBackground} from "react-native";
import Colors from "../constants/colors";

import Title from "../components/Title";
import NavButton from "../components/NavButton";

export default function OrderReviewScreen(props) {
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
    source= {require("../assets/images/b.jpg")}   
    resizeMode="cover"      
    style={styles.container}    
    imageStyle={styles.backgroundImage}
     >
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
      <View style={styles.titleContainer}>
        <Title>Order Summary</Title>
      </View>

            <ScrollView style={styles.scrollContainer}> 
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>
            Your repair order has been placed with your order details below
            </Text>
        </View>


        <View style={styles.repairsContainer}>
             <Text style={styles.repairs}>Service Time</Text>
             <Text style={styles.subRepairs}>
             {props.repairTime} (${props.repairTimePrice})
            </Text>
        </View>

        <View style={styles.repairsContainer}>
            <Text style={styles.repairs}>Service Options</Text>
            {props.services.some(s => s.value) ? (
            props.services.map(item =>
            item.value ? (
            <Text key={item.id} style={styles.subRepairs}>
            {item.name} (${item.price})
            </Text>
      ) : null
    )
  ) : (
    <Text style={styles.subRepairs}>None</Text>
  )}
</View>

<View style={styles.repairsContainer}>
  <Text style={styles.repairs}>Add Ons:</Text>
  <Text style={styles.subRepairs}>
    {props.newsletter ? "Newsletter Signup ($0)\n" : ""}
    {props.rentalMembership ? "Rental Membership ($100)" : ""}
  </Text>
</View>


<View style={styles.subTitleContainer}>
  <Text style={styles.subTitle}>
    SubTotal: ${props.price.toFixed(2)}
  </Text>
  <Text style={styles.subTitle}>
    Sales Tax (6%): ${(props.price * 0.06).toFixed(2)}
  </Text>
  <Text style={styles.subTitle}>
    Total: ${(props.price + props.price * 0.06).toFixed(2)}
  </Text>
</View>

 <View style={styles.buttonContainer}>
    <NavButton onNext={props.onNext}>Return Home</NavButton>
 </View>
</ScrollView>
</View>
</ImageBackground>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  backgroundImage:{
    opacity: 0.3,
  },
  
  titleContainer: {
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 5,         
    paddingHorizontal: 30,
    borderColor: Colors.primary500,
  },

  scrollContainer: {
    flex: 1,
  },

  subTitleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primary500,
  },

  repairsContainer:{
    flex: 3,
  },

  repairs:{
    fontSize: 20,
    color: Colors.primary300,
    fontFamily: "AmaticSCBold",
  },

  subRepairs:{
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.primary500
  },

  buttonContainer: {
    alignItems: "center",
  },
});
