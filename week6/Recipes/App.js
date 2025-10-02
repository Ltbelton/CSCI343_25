import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import HomeScreen from './Screens/HomeScreen';
import RecipesScreen from './Screens/RecipesScreen';
import AddRecipeScreen from './Screens/AddRecipeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Colors from "./constants/colors";
import {useState} from "react";

export default function App() {
  //set up out custom fonts
  const [fontsLoaded] = useFonts({

    QuicksandRegular: require("./assets/fonts/Quicksand-Regular.ttf"),
    RalewaySemiBold: require("./assets/fonts/Raleway-SemiBold.ttf"),
    AmaticSCBoldttf: require("./assets/fonts/AmaticSC-Bold.ttf"),
    LobsterTwoRegular: require("./assets/fonts/LobsterTwo-Regular.ttf"),
  });
  

  const [currentScreen, setCurrentScreen] = useState("");
  const [currentID, setCurrentID]=useState(4);
  const [currentRecipes, setCurrentRecipes]=useState([
    {
      id: 1,
      title: "Chicken Parmesan",
      text: "2 large, skinless chicken breast\n2 eggs\n75g breadcrumbs\n75g parmesan\n1bsp olive oil\n2 garlic cloves\nhalf a 690ml jar passata\n1 tsp caster sugar\n1tsp dried oregano\nhalf a 125g ball light maozzarella",
    },
    {
      id: 2,
      title: "Chicken Satay Salad",
      text: "1 tbsp tamari\n1 tsp medium curry powder\n 1/4 tsp ground cumin\n 1 garlic clove\n 1 tsp clear honey\n 2 skinless chicken breast fillets\n 1 tbsp crunchy peanut butter\n 1 tbsp sweet chilli sauce\n1 tbsp lime juice\nsunflower oil\n2 Little Gem lettuce\n1/4 cucumber\n1 banana shallot\ncoriander\nseeds from 1/2 pomegranate",
      
    },
    {
      id: 3,
      title: "Carrot & Lentil Soup",
      text: "2 tsp cumin seeds\n pinch chilli flakes\n 2 tbsp olive oil\n600g carrots\n140g spilt red lentils\n1L hot vegetable stock\n12mml milk\nplain yogurt",
      
    },
  ])

  function homeScreenHandler(){
    setCurrentScreen("");
  }

  function recipesScreenHandler(){
    setCurrentScreen("recipes");
  }

  function addRecipeScreenHandler(){
    setCurrentScreen("add");
  }

  function addRecipeHandler(enteredRecipeTitle, enteredRecipetext){
    setCurrentRecipes((currentRecipes) => [

      ...currentRecipes,
      {id: currentID, title: enteredRecipeTitle, text: enteredRecipetext},
    ]);
    setCurrentID(currentID + 1);
    recipesScreenHandler();
  }

  function deleteRecipeHandler(id){
    setCurrentRecipes((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    })
  }

  let screen = <HomeScreen onNext={recipesScreenHandler}/>
  if (currentScreen === "recipes"){
    screen = ( <RecipesScreen
    onHome ={homeScreenHandler}
    onAdd ={addRecipeScreenHandler}
    onDelete={deleteRecipeHandler}
    currentRecipes={currentRecipes}
    />);
  }

  if (currentScreen === "add"){
    screen = ( <AddRecipeScreen
    onCancel ={recipesScreenHandler}
    onAdd={addRecipeHandler}
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











