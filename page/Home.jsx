import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SvgComponent from '../assets/svg/HomeSvg'

const Home = () => {
  return (
    <View>
      {/* <SvgComponent/> */}
      <Text>Home2</Text>
      <Text style={{fontFamily: 'AmiriR', fontSize: 33}}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ"</Text>
      <Text style={{fontFamily: 'Hafs', fontSize: 33}}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ"</Text>
      <Text style={{ fontSize: 33}}>بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ"</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})