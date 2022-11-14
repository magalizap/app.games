import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import colors from '../constants/colors'

const GameScreen = ({newStyles}) => {

  const [currentGuess, setCurrentGuess] = useState()

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1 ))
  }, [])  

  return (
    <View style={styles.container}>
      <Text style={{...styles.gameTitle,...newStyles}}>La suposición del oponente es: </Text>
      <Card newStyles={styles.buttonContainer}>
        <Pressable style={styles.menor}>
          <Text style={{color: 'white'}}>Menor</Text>
        </Pressable>
        <Text style={{margin: 10, fontWeight: 'bold'}}>{currentGuess}</Text>
        <Pressable style={{...styles.menor, backgroundColor: colors.secondary}}>
          <Text style={{color: 'white'}}>Mayor</Text>
        </Pressable>
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: 300,
    },
    gameTitle: {
      fontSize: 18,
      margin: 25
    },
    menor:{
      backgroundColor: colors.orange,
      height: 35,
      width:70,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:10
    }
})