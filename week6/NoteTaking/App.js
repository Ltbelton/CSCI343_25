import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import HomeScreen from './screens/HomeScreen';
import NotesScreen from './screens/NotesScreen';
import AddNoteScreen from './screens/AddNoteScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from "./constants/colors";
import {useState} from "react";

export default function App() {
  //set up out custom fonts
  const [fontsLoaded] = useFonts({

    noteFont: require("./assets/fonts/Note.ttf"),
    paperNote: require("./assets/fonts/Papernotes.ttf"),
    paperNoteSketch: require("./assets/fonts/Papernotes Sketch.ttf"),
    paperNoteBold: require("./assets/fonts/Papernotes Bold.ttf"),
  });
  

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentID, setCurrentID]=useState(4);
  const [currentNotes, setCurrentNotes]=useState([
    {
      id: 1,
      title: "Math Notes",
      text: "a^2 + b^2 = c^2",
    },
    {
      id: 2,
      title: "Holiday Notes",
      text: "Halloween Oct 31st",
      
    },
    {
      id: 3,
      title: "Work Notes",
      text: "Oct 2nd - Off",
      
    },
  ])

  function homeScreenHandler(){
    setCurrentScreen("");
  }

  function notesScreenHandler(){
    setCurrentScreen("notes");
  }

  function addNoteScreenHandler(){
    setCurrentScreen("add");
  }

  function addNoteHandler(enteredNoteTitle, enteredNotetext){
    setCurrentNotes((currentNotes) => [

      ...currentNotes,
      {id: currentID, title: enteredNoteTitle, text: enteredNotetext},
    ]);
    setCurrentID(currentID + 1);
    notesScreenHandler();
  }

  function deleteNoteHandler(id){
    setCurrentNotes((currentNotes) => {
      return currentNotes.filter((item) => item.id !== id);
    })
  }

  let screen = <HomeScreen onNext={notesScreenHandler}/>
  if (currentScreen === "notes"){
    screen = ( <NotesScreen
    onHome ={homeScreenHandler}
    onAdd ={addNoteScreenHandler}
    onDelete={deleteNoteHandler}
    currentNotes={currentNotes}
    />);
  }

  if (currentScreen === "add"){
    screen = ( <AddNoteScreen
    onCancel ={notesScreenHandler}
    onAdd={addNoteHandler}
    />);
  }

  return (
   <>
    <StatusBar style = "auto"/>
    <SafeAreaProvider style ={styles.container}>{screen}</SafeAreaProvider>
   </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary800,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
