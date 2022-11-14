import {Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback,  View } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import colors from '../constants/colors'
import Input from '../components/Input'


const StartGameScreen = ({onStartGame, newStyles}) => {

  const [value, setValue] = useState('')
  const [confirmed, setConfirmed] = useState(false)
  const [selectedNumer, setSelectedNumer] = useState('')


  const handleResetInput = () => {
    setValue('')
    setConfirmed(false)
  }

  const handleConfirmation = () => {
    const choseNumber = parseInt(value)
    if(choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return
    setConfirmed(true)
    setSelectedNumer(choseNumber)
    setValue('')
  }

  const handleInput = (text) => {
    setValue(text.replace(/[^0-9]/g, ''))
    console.log(text)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.screen}>
        <Card>
            <Text style={{...newStyles}}>Elije tu número</Text>
            <Input  value={value} onChangeText={handleInput} style={{textAlign: 'center'}}/>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.cleanButton} onPress={handleResetInput}>
                    <Text style={{color:'white'}}>Limpiar</Text>
                </Pressable>
                <Pressable 
                style={{
                  ...styles.cleanButton,
                  ...styles.confirmButton
                }}
                onPress={handleConfirmation}
                >
                    <Text style={{color:'white'}}>Confirmar</Text>
                </Pressable>
            </View>
        </Card>
        {confirmed &&  (
            <Card newStyles={{marginTop: 50, width: 200}}>
                <Text style={{...newStyles}}>Tu selección es: </Text>
                <Text style={{margin: 15, fontWeight: 'bold'}}>{selectedNumer}</Text>

                <Pressable onPress={() => onStartGame(selectedNumer)} style={{...styles.cleanButton, ...styles.start}}>
                    <Text style={{color:'white'}}>Empezar juego</Text>
                </Pressable>
            </Card> 
        )}
    </View>
    </TouchableWithoutFeedback>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems:'center',
        marginTop:50
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent: 'space-between'
    },
    cleanButton:{
        backgroundColor: colors.orange,
        height: 35,
        width:70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10
    },
    confirmButton:{
        backgroundColor: colors.primary,
        width:80, 
        
    },
    start: {
        backgroundColor: colors.secondary,
        width:140,
    }
})