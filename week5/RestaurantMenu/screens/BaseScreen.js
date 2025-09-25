BaseScreen.js
import { StyleSheet, Text, View, Image, Button, Linking } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from "../Title";
import Colors from "../constants/Colors";      


export default function BaseScreen(props) {
    // Setting Safe Area Screen Boundaries
    const insets = useSafeAreaInsets();

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
    <Title>Chilis</Title>
    </View>

    <View style={styles.imageContainer}>
        <Image style ={styles.image} source ={require( "../assets/images/Chillis.jpeg")}/>
    </View>

    <View style={styles.infoContainer}>
        <Text 
            style={styles.infoText}
            onPress=  {() => Linking.openURL("tel:8439030607")} 
            >843-903-0607
        </Text>
        <Text
            style={styles.infoText} 
            onPress={() => Linking.openURL("https://www.google.com/maps/dir//100+Orchard+Dr,+Myrtle+Beach,+SC+29579/@33.7564706,-79.0473322,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89006c7ac354aab9:0x180ae95fac01db2d!2m2!1d-78.964931!2d33.756498?entry=ttu&g_ep=EgoyMDI1MDkyMi4wIKXMDSoASAFQAw%3D%3D")}
            >100 Ochard Dr{"\n"} Myrtle Beach, SC 2979
        </Text>
        <Text
            style={styles.infoText}
            onPress={() => Linking.openURL("https://www.chilis.com/locations/us/south-carolina/myrtle-beach/carolina-forest?utm_source=google&utm_medium=local&utm_campaign=Chilis")}
            >www.chilis.com
        </Text>

    </View>
    <View style={styles.buttonContainer}>
        <Button title="View Menu" onPress={props.onNext} color="black"/>
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

  imageContainer: {
    flex: 4,
  },

  image: {
    resizeMode: "cover",
    height: "100%",
    width: 380,
  },

  infoContainer:{
    flex: 3,
    justifyContent: "center",

  },

  infoText: {
    fontSize: 30,
    textAlign: "center",
    padding: 7,
    fontFamily: "SpartanRegular",
    color: Colors.primary500,
  },

  buttonContainer:{
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 40,
    width: 150,

  },
});
