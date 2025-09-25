import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Pressable, Modal, Button, TextInput, SafeAreaView} from 'react-native';


const responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
];


export default function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function onSubmitQuestion() {
    if (question === "") return;           
    const randomIndex = Math.floor(Math.random() * responses.length);
    setAnswer(responses[randomIndex]);
    setModalIsVisible(true);              
  }

  function closeModal() {
    setModalIsVisible(false);
    setQuestion("");
  }

  return (
    <>
      <StatusBar style='auto' />
      <SafeAreaView style={styles.root}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Magic 8 Ball</Text>
        </View>

        <View style={styles.rollButtonContainer}>
          <Text style={styles.inputLabel}>Ask Your Question:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type a yes/no question"
            placeholderTextColor="white"
            value={question}
            onChangeText={setQuestion}
          />

          <Pressable
            android_ripple={{ color: '#210644' }}
            onPress={onSubmitQuestion}
            style={({ pressed }) => pressed && styles.pressedButton}
          >
            <View style={styles.rollButton}>
              <Text style={styles.rollButtonText}>Ask</Text>
            </View>
          </Pressable>
        </View>

        <Modal visible={modalIsVisible}>
          <SafeAreaView style={styles.modalRoot}>
            <Text style={styles.inputLabel}>Your Question</Text>
            <Text style={styles.resultText}>{question}</Text>

            <Text style={styles.inputLabel}>The Ball Says</Text>
            <Text style={styles.resultText}>{answer}</Text>

            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Close" color="black" onPress={closeModal} />
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
    backgroundColor: '#fccbb3',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleContainer: {
    flex:1,
    backgroundColor: "black",
    width: "90%",
    justifyContent: "center",
    margin: 20,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 20,
    height: 100,
    marginTop: "20%",
  },

  title: {
    fontSize: 40,
    color: "white",
    textAlign: "center",
  },

  rollButtonContainer:{
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },

  rollButton:{
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    marginTop: 20,
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

  resultText:{
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 20,
  },

  modalRoot:{
    flex: 1,
    backgroundColor: "#394c4c",
    alignItems: "center",
    justifyContent: "center"
  },

  inputLabel:{
    fontSize: 25,
    color: "white",
    textAlign:"center",
    marginTop: 20,
    marginBottom: 10,
  },

  textInput:{
    borderWidth: 1,
    borderColor: "#394c4c",
    backgroundColor: "#394c4c",
    color:"white",
    borderRadius: 6,
    width: "90%",
    padding: 12,
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


