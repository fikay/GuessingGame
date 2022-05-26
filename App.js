import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import HomeScreen from './screens/Homescreen';
import GuessingScreen from './screens/Guessingscreen';
import EndgameScreen from './screens/Endgamescreen';

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
  function loadingScreen()
  {
     Font.loadAsync({
    'open-sans': require('./screens/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./screens/fonts/OpenSans-Bold.ttf')

  }).then(()=>setFontLoaded(true))

  }
 

  if(!fontLoaded)
  {
    
    SplashScreen.preventAutoHideAsync();
    loadingScreen();
  }
  else{
    console.log(fontLoaded);
    SplashScreen.hideAsync();
  }

const [numberPicked, setNumberpicked] = useState();
const [answer, setAnswer] = useState(false);
const [round, setRound] = useState();

let screen = <HomeScreen onNumberPicked ={numberPickedHandler}/>

function newGame()
{
  
  setNumberpicked(null);
  setAnswer(null);

screen = <HomeScreen onNumberPicked ={numberPickedHandler}/>
  
}
function numberPickedHandler(pickedNumber)
{
  setNumberpicked(pickedNumber)
}
function numberRounds(roundNumber)
{
  console.log(roundNumber)
  setRound(roundNumber)
  

}
function gameOver()
{
  
  setAnswer(true)
}
if(numberPicked)
{
  screen = <GuessingScreen  numberPicked= {numberPicked} gameOver ={gameOver} numberRounds={numberRounds}/>
}
if (answer && numberPicked)
{
  screen = <EndgameScreen round ={round} numberPicked= {numberPicked} newgame = {newGame}/>
}
  
  return (
    <>
    <StatusBar style='light'/>
    <View style ={styles.container}>
    {screen}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  }
 
});
