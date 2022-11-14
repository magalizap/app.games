import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

export default function Header({title, newStyles}) {
  return (
    <View style={styles.header}>
      <Text style={{...styles.headerTitle, ...newStyles}}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        height:90,
        backgroundColor:colors.secondary,
        paddingTop:36,
        alignItems:'center',
        justifyContent:'center'
    },
    headerTitle:{
        color: colors.white,
        fontSize:22,
    }
})

