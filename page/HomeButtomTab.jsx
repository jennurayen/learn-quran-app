import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeButtomTab = ({navigation}) => {
  return (
    <View>
       {/* <Button
        title="For Nested Navigation"
        onPress={() => navigation.navigate('QuranSura', { screen: 'SuraDetails' })}
      /> */}
       <Button
        title="show details..."
        onPress={() => navigation.navigate('SuraDetails')}
      />
      <Text>Home2</Text>
      <Text style={{fontFamily: 'AmiriR', fontSize: 33}}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ"</Text>
      <Text style={{fontFamily: 'Hafs', fontSize: 33}}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ"</Text>
      <Text style={{ fontSize: 33}}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ"</Text>
    </View>
  )
}

export default HomeButtomTab

const styles = StyleSheet.create({})