import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
       <Button
        title="Go to Details..."
        onPress={() => navigation.navigate('QuranSura')}
      />
       <Button
        title="Go to One Top Tab"
        onPress={() => navigation.navigate('QuranSura', { screen: '111' })}
      />
      <Text>Home2</Text>
      <Text style={{fontFamily: 'AmiriR', fontSize: 33}}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ"</Text>
      <Text style={{fontFamily: 'Hafs', fontSize: 33}}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ"</Text>
      <Text style={{ fontSize: 33}}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ"</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})