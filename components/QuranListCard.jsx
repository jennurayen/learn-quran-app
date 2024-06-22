import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import QuranListNumber from './QuranListNumber'

const QuranLIstCard = ({item, navigation}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('SuraDetails', {noOfSura: item.id})}>

      <QuranListNumber num={item.id}/>
      
      <View style={styles.mid}>
      <Text style={styles.midTextTop}>{item.translation}</Text>         
          <Text style={styles.midTextDown}>{item.transliteration} | {item.total_verses}</Text>          
      </View>
      <View style={styles.right}>
       <Text style={styles.rightText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default QuranLIstCard

const styles = StyleSheet.create({
    card: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white',
        gap: 15,
        borderWidth: 0.5,
        borderColor: '#0005',
        borderRadius: 10,
        alignItems: 'center',
      },
      
      mid: {
        flex:1
      },
      midTextTop: {
        fontSize: 18,
        color: 'black',
      },
      midTextDown: {
        fontSize: 15,
        color: '#ff634799',
      },
      right: {
    
      },
      rightText: {
        color: 'black',
        fontSize: 25,
        fontFamily: 'AmiriR',
        lineHeight: 50,
        letterSpacing: -10,
      },
})