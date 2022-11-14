
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    LatoRegular: require('./assets/fonts/Lato-Regular.ttf')
  })
  const [userNumber, setUserNumber] = useState()

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let content = <StartGameScreen onStartGame={handleStartGame} newStyles={{fontFamily: 'LatoRegular', fontSize: 18}} />

  if(userNumber) {
    content = <GameScreen newStyles={{fontFamily: 'LatoRegular'}}/>
  }

  if(!loaded){
    return null
  }
  return (
    <View style={styles.container}>
      <Header title={'Adivina el número'} newStyles={{fontFamily: 'LatoRegular'}}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
