import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
    <StatusBar style="dark"/>
    <SafeAreaView style={styles.root}>
    <View style={styles.imageContainer}>
      <Image
      style={styles.image}
      source={require("./assets/images/dog_image.jpeg")}
      />
    </View>
     <View style={styles.textContainer}>
      <Text style={styles.name}> Le'Niya Belton</Text>
      <Text 
      style={styles.text}
      onPress={ () => {
        Linking.openURL("tel:8438029287");
      } }
      > 843-802-9287</Text>
      <Text 
      style={styles.text}
      onPress={ () => {
        Linking.openURL("https://outlook.office.com/mail/ltbelton@coastal.edu/");
      } }
    
      > ltbelton@coastal.edu</Text>
    <Text 
    style={styles.text}
    onPress={ () => {
      Linking.openURL("https://github.com/Ltbelton/CSCI343_25.git");
    } }
    > Open in GitHub
    </Text>
     </View>
     
    </SafeAreaView>
    </>
 
);
}

const styles = StyleSheet.create ({

 root:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#B2AC88",
 },

 imageContainer:{
  
  marginTop: 100,
  width: "100%",
  
 },
 image:{
  height: 300,
  width: "100%",
  resizeMode: "cover",
  borderColor:"white",
  borderWidth: 5,
 },

 textContainer: {
    flex: 10,
    width: "100%",
   alignItems: "center",
   
 },

 text:{
  fontSize: 25,
  fontStyle:"italic",
  marginBottom: 15,

 },
 name: {
  fontSize: 55,
  textAlign:"center",
  fontWeight:"bold",
  marginBottom: 50,
  
 },
})





 


