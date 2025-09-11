import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable, Modal, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { TextInput } from 'react-native';

export default function App() {

  // Set a max and min dice values
  const maxVal = 6;
  const minVal = 1;
  // Create  state  management variables
  const [dice1, setDice1] =useState(1);
  const [dice2, setDice2] =useState(1);
  const [userGuess, setUserGuess] =useState("");
  const [userWager, setUserWager] =useState("");
  const [diceSum, setDiceSum] =useState(2);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startDiceRollHandler(){
    setModalIsVisible(true);
    setUserGuess("");
    setUserWager("");
  }
  function endDiceRollHandler(){
    setModalIsVisible(false);
  }

  function onDiceRoll(){
    const rndNum1 = Math.floor(Math.random() * (maxVal - minVal )) + minVal;
    const rndNum2 = Math.floor(Math.random() * (maxVal - minVal )) + minVal;
    setDice1(rndNum1);
    setDice2(rndNum2);

    let result = rndNum1 + rndNum2;
    setDiceSum(result);

    endDiceRollHandler();
  }

  let resultsText =(
    <Text style= {styles.resultText}>Roll The Dice And Make A Wager</Text>
  );

  const userGuessNum = parseInt(userGuess);
  const diceSumNum = parseInt(diceSum);

  if (userGuess !== "" && userGuessNum === diceSumNum){
    resultsText =  <Text style= {styles.resultText}>You Won ${(userWager *5).toFixed(2)}</Text>
  }
  
  if (userGuess !== "" && userGuessNum !== diceSumNum){
    resultsText =  <Text style= {styles.resultText}>You Lost ${(userWager * 1).toFixed(2)}</Text>
  }
  


  return (
    
    <>
      <StatusBar style ='auto' />
      <SafeAreaView style = {styles.root}>
      <View style = {styles.titleContainer}> 
        <Text style ={styles.title}>Dice Roller</Text>
      </View>

      <View style ={styles.rollButtonContainer}>
      <Pressable
          android_ripple={{ color: '#210644' }}
          onPress={startDiceRollHandler}
        style={({ pressed }) => {
          return pressed && styles.pressedButton;
        }}
      >
        <View style={styles.rollButton}>
          <Text style={styles.rollButtonText}>Roll Dice</Text>
        </View>
      </Pressable>

    </View>


    <View style= {styles.diceContainer}>
        <View style= {styles.dice}>
          <Text style= {styles.diceNumber}> {dice1} </Text>
        </View>
        <View style= {styles.dice}>
          <Text style= {styles.diceNumber}> {dice2}</Text>
        </View>
      </View>

      <View style ={styles.resultContainer}>
        <Text style ={styles.resultText}>The resulting dice roll is {diceSum}</Text>
      </View>

      <View style= {styles.resultContainer}>{resultsText}</View>

        <Modal visible ={modalIsVisible}>
        <SafeAreaView style = {styles.modalRoot}>

        <Text style ={styles.inputLabel}>Guess The Roll Value:</Text>
        <TextInput 
        style ={styles.textInput}
        placeholder="Enter A Guess Between 2 and 12"
        onChangeText={setUserGuess}
        value={userGuess}
        keyboardType="number-pad"
        />

        <Text style ={styles.inputLabel}>What's Your Wager:</Text>
        <TextInput 
        style ={styles.textInput}
        placeholder="Enter Your Wager Here"
        onChangeText={setUserWager}
        value={userWager}
        keyboardType="number-pad"
        />


        <View style= {styles.buttonContainer}>
          <View style= {styles.button}>
            <Button title="Roll Dice" color="grey" onPress={onDiceRoll}/>
          </View>
          <View style= {styles.button}>
            <Button title="Cancel" color="black" onPress={endDiceRollHandler}/>
          </View>
        </View>

        </SafeAreaView>
        </Modal>
      
        

      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#d96459',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    flex: 1,
    backgroundColor: "black",
    width: "90%",
    justifyContent: "center",
    margin: 20,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 20,
  },

  title: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
  },

  rollButtonContainer:{
    flex: 1,
    justifyContent: "center",
  },

  rollButton:{
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
  },

  rollButtonText:{
    color: "black",
    padding: 8,
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },

  pressedButton: {
    opacity: 0.5
  },

  diceContainer: {
    flex: 3,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },

  dice:{
    borderWidth: 6,
    margin: 20,
    width: "40%",
    paddingVertical: 30,
    backgroundColor: "white",
  },

  diceNumber:{
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },

  resultContainer:{
    flex: 1,
  },
  
  resultText:{
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },

  modalRoot:{
    flex: 1,
    backgroundColor: "#e37d7d",
    alignItems: "center",

  },

  inputLabel:{
    fontSize: 25,
    color: "white",
    textAlign:"center",
    marginTop: 20,
  },

  textInput:{
    boderWidth: 1,
    borderColor: "#fccbb3",
    backgroundColor: "#fccbb3",
    color:"black",
    borderRadius: 6,
    width: "90%",
    padding: "12",
    marginBottom: 30,
  },

  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },

  button:{
    width: "30%",
    marginHorizontal: 8,
  },

});
