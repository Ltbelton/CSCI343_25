import { Text, View, StyleSheet, ScrollView, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Colors from "../constants/colors";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { RadioGroup } from "react-native-radio-buttons-group";
import BouncyCheckBox from "react-native-bouncy-checkbox";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen(props) {
  // set safe area screen boundaries
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
    colors={[Colors.accent]}
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
        <Title>Bicycle Repair Shop</Title>
      </View>

      <ScrollView style={styles.scrollContainer}>
        {/* Service Time (Radio) */}
        <View style={styles.radioContainer}>
          <Text style={styles.radioHeader}>Service Time:</Text>
          <RadioGroup
            radioButtons={props.repairTimeRadioButtons}
            onPress={props.onSetRepairTimeId}
            selectedId={String(props.repairTimeId)}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabel}
          />
        </View>

        {/* Service Options (Checkboxes) */}
        <View style={styles.checkBoxContainer}>
          <Text style={styles.checkBoxHeader}>Service Options:</Text>
          <View style={styles.checkBoxSubContainer}>
            {props.services.map((item) => {
              return (
                <BouncyCheckBox
                  key={item.id}
                  text={`${item.name} ($${item.price})`}
                  isChecked={item.value}
                  onPress={() => props.onSetServices(item.id)}
                  textStyle={styles.checkBoxLabel}
                  innerIconStyle={styles.checkBoxInnerStyle}
                  iconStyle={styles.checkBoxIconStyle}
                  fillColor={Colors.primary500}
                  style={styles.checkBox}
                />
              );
            })}
          </View>
        </View>

        {/* Add-Ons (Switches) */}
        <View style={styles.rowContainer}>
          {/* Add On Options */}
          <View style={styles.addOnsContainer}>
            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Newsletter Signup ($0)</Text>
              <Switch
                onValueChange={props.onSetNewsletter}
                value={props.newsletter}
                thumbColor={
                  props.newsletter ? Colors.primary500 : Colors.primary800
                }
                trackColor={{ false: "#767577", true: "#81b0ff" }}
              />
            </View>

            <View style={styles.addOnsSubContainer}>
              <Text style={styles.addOnsLabel}>Rental Membership ($100)</Text>
              <Switch
                onValueChange={props.onSetRentalMembership}
                value={props.rentalMembership}
                thumbColor={
                  props.rentalMembership ? Colors.primary500 : Colors.primary800
                }
                trackColor={{ false: "#767577", true: "#81b0ff" }}
              />
            </View>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <NavButton onNext={props.onNext}>Submit Order</NavButton>
        </View>
      </ScrollView>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: "center",
    justifyContent: "center",
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

  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  radioHeader: {
    fontSize: 40,
    color: Colors.primary500,
    fontFamily: "AmaticSCBold",
  },

  radioGroup: {
    paddingBottom: 20,
  },

  radioGroupLabel: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "AmaticSCBold",
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
    paddingHorizontal: 24,
  },

  checkBoxContainer: {
    width: "100%",
    paddingHorizontal: 12,
  },

  checkBoxHeader: {
    fontSize: 20,
    color: Colors.primary500,
    fontFamily: "AmaticSCBold",
  },

  checkBoxSubContainer: {
    padding: 2,
    width: "100%",
  },

  checkBox: {
    padding: 2,
    width: "100%",
  },

  checkBoxLabel: {
    textDecorationLine: "none",
    color: Colors.primary500,
  },

  checkBoxInnerStyle: {
    borderRadius: 0,
    borderColor: Colors.primary500,
  },

  checkBoxIconStyle: {
    borderRadius: 0,
  },

  addOnsContainer: {
    justifyContent: "space-between",
    width: "100%",
  },

  addOnsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addOnsLabel: {
    color: Colors.primary500,
    fontSize: 20,
    fontFamily: "AmaticSCBold",
  },

  buttonContainer: {
    alignItems: "center",
  },
});
