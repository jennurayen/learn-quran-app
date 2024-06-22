import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import QuranListNumber from './QuranListNumber'

const QuranDetailsCard = ({item}) => {
  let {id, text, translation, sejda} = item
  
  return (
    <View style={styles.card}>
      <View style={styles.left}>
        <QuranListNumber num={id} fsize={12} width={25} />      
      <View style={styles.sejda}>
        {sejda ? <Text style={styles.sejdaText}>۩</Text> : null}
      </View>
      </View>

      <View style={styles.right}>
      <Text style={styles.text}>{text}</Text>
      <Text style={styles.translation}>{translation}</Text>
      </View>
      
    </View>
  )
}

export default QuranDetailsCard

const styles = StyleSheet.create({
  card:{
    padding: 10,
    borderBottomWidth: 0.5,
    borderColor: '#0005',
    flexDirection: 'row',    
  },
  left:{
    width: 30,
  },
  id:{},
  sejda:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sejdaText:{
    fontSize: 30,
    color: 'green',
  },
  right:{
    flex: 1,
  },
  text:{
    // fontFamily: 'Amirir',
    // fontFamily: 'Hafs',
    fontFamily: 'IndoPak',
    fontSize: 30,
    color: 'black',
  },
  translation:{},
})